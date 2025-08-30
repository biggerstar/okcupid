<script lang="ts" setup>

import type {
  VxeTableGridOptions
} from '#/adapter/vxe-table';

import { Page } from '@vben/common-ui';

import { Button as AButton } from 'ant-design-vue';

import { useVbenVxeGrid } from '#/adapter/vxe-table';

import Api from '#/api';
import type { CompanyUserApi } from '#/api/company/user';
import { sleep } from '#/utils/common';
import { useVbenModal } from '@vben/common-ui';
import Pqueue from 'p-queue';
import { onMounted, onUnmounted, ref } from 'vue';
import { useColumns, useGridFormSchema } from './data';

const queue = new Pqueue({ concurrency: 1 })
const showImageViewer = ref(false);
const buttonLoading = ref(false);
const currentExportImagesOptions = ref({})
const imageViewerRef = ref()
const [downloadImagesModal, modalApi] = useVbenModal({
  showCancelButton: false,
  confirmText: '导出选中图片',
  async onConfirm() {
    if (imageViewerRef.value) {
      const result = await imageViewerRef.value.exportZip()
      if (result) {
        gridApi.query()
        modalApi.close()
      }
    }
  },
  onClosed: () => {
    showImageViewer.value = false;
  },
});

const [Grid, gridApi] = useVbenVxeGrid({
  showSearchForm: false,
  formOptions: {
    schema: useGridFormSchema(),
    compact: true,
    submitOnChange: true,
    showCollapseButton: false,
    // wrapperClass: "grid-cols-5",
  },
  gridOptions: {
    columns: useColumns(),
    height: 'auto',
    keepSource: true,
    showOverflow: true,
    virtualYConfig: {
      enabled: true,
      gt: 0
    },
    pagerConfig: {
      autoHidden: true,
      pageSize: 2000,
      pageSizes: [2000]
    },
    checkboxConfig: {
      range: true
    },
    exportConfig: {
      types: ['csv', 'txt'],
      includeFields: [
        'index',
        'keyword',
        'detailUrl',
        'title',
        'color',
        'size',
        'releaseTime',
        'remark',
      ],
      columnFilterMethod({ column }) {
        if (column.type === 'checkbox') return false
        return true
      }
    },
    proxyConfig: {
      ajax: {
        query: async ({ page }) => {
          const result = await Api.ads.env.getBrowserList(page)
          console.log(`🚀 ~ query: ~ result:`, result)
          return result
        },
      },
    },
    toolbarConfig: {
      custom: true,
      export: true,
      refresh: { code: 'query' },
      search: false,
      zoom: false,
    },
  } as VxeTableGridOptions<CompanyUserApi.User>,
});

function deleteRows() {
  const grid = gridApi.grid
  const selecterRecordList = grid.getCheckboxRecords()
  const deleteIds = selecterRecordList.map(item => item.id)
  __API__.deleteProduct(deleteIds)
  gridApi.reload()
}

function openBrowser(user_id: string) {
  Api.ads.env.openBrowser(user_id)
}

function closeBrowser(user_id: string) {
  Api.ads.env.closeBrowser(user_id)
}

async function getTokensWithOneClick() {
  buttonLoading.value = true
  let allResult: any[] = []
  try {
    const allIds = gridApi.grid.getData().map(item => item.user_id)
    const browserList: any[] = (await Api.ads.env.getBrowserList({}, allIds)).items
    const allQuery = browserList.map(async (item, index) => {
      await sleep(index * 2000)
      return {
        user_id: item.user_id,
        info: await Api.ads.env.checkBrowserStatus(item.user_id)
      }
    })
    allResult = await Promise.all(allQuery)
  } catch (e) {
    await sleep(1500)
    buttonLoading.value = false
  }
  const wsList = allResult
    .filter(item => item.info?.data?.status === "Active")
    .map(item => {
      return {
        user_id: item?.user_id,
        wsLink: item.info?.data?.ws.puppeteer
      }
    })
  wsList.forEach(({ wsLink, user_id }) => {
    queue.add(async () => {
      const { token } = (await __API__.getPuppeteerResult(wsLink)) || {}
      if (!token) return
      await sleep(2000)
      console.log(`🚀 ~ getTokensWithOneClick ~ token:`, user_id, token)
      await Api.ads.env
        .updateAdsEnv({
          user_id,
          remark: token
        })
        .then((res) => {
          if (res.code !== 0 || res.msg !== "Success") return
          const allData = gridApi.grid.getData();
          const foundItem = allData.find(item => item?.user_id === user_id)
          if (!foundItem) return
          foundItem.remark = token
        })
    })
  })
  console.log(`🚀 ~ getTokensWithOneClick ~ wsList:`, wsList)
}

let curTotal = -1
let loopUpdateTimer: any
onMounted(() => {
  loopUpdateTimer = setInterval(async () => {
    const productList = await __API__.getPruductList({ where: { type: 'junpu' } })
    if (curTotal !== productList.data.total) {
      if (curTotal >= 0) gridApi.reload()
      curTotal = productList.data.total
    }
  }, 500)
})

onUnmounted(() => {
  clearInterval(loopUpdateTimer)
})

</script>
<template>
  <Page auto-content-height>
    <Grid :table-title="'无 TOKEN 浏览器列表'">
      <template #action="{ row }">
        <AButton type="primary" @click="() => openBrowser(row.user_id)">打开</AButton>
      </template>
      <template #toolbar-tools>
        <AButton class="mr-2" type="primary" :loading="buttonLoading" @click="() => getTokensWithOneClick()">
          一键获取 TOKEN
        </AButton>
        <!-- <Button class="mr-2" type="primary" danger @click="deleteRows()">
          删除
        </Button> -->
        <!-- <Button class="mr-2" type="primary" @click="() => modalApi.open()">
          配置
        </Button> -->
        <!-- <downloadImagesModal class="w-[80%]" title="图片导出">
          <ImageViewer v-if="showImageViewer" ref="imageViewerRef" :options="currentExportImagesOptions" />
        </downloadImagesModal> -->
      </template>
    </Grid>
  </Page>
</template>

<style lang="scss" scoped>
:deep(.vxe-grid) {
  .vxe-grid--layout-header-wrapper {
    overflow: hidden;
  }
}
</style>
