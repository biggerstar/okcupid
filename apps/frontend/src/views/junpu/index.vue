<script lang="ts" setup>

import type {
  VxeTableGridOptions
} from '#/adapter/vxe-table';

import { Page } from '@vben/common-ui';

import { Button, message } from 'ant-design-vue';

import { useVbenVxeGrid } from '#/adapter/vxe-table';

import type { CompanyUserApi } from '#/api/company/user';
import ImageViewer from '#/components/ImageViewer.vue';
import { useVbenModal } from '@vben/common-ui';
import dayjs from 'dayjs';
import { onMounted, onUnmounted, ref } from 'vue';
import { useColumns, useGridFormSchema } from './data';


const showImageViewer = ref(false);
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
      pageSize: 2000,
      pageSizes: [50, 200, 500, 2000, 5000]
    },
    checkboxConfig: {
      range: true
    },
    exportConfig: {
      types: ['csv', 'txt'],
      columnFilterMethod({ column }) {
        if (column.type === 'checkbox') return false
        return true
      }
    },
    proxyConfig: {
      ajax: {
        query: async ({ page }, formValues) => {
          const result = await __API__.getPruductList({
            where: { type: 'junpu' },
            pageSize: page.pageSize,
            currentPage: page.currentPage,
            ...formValues
          })
          console.log(`🚀 ~ query: ~ result:`, result)
          return result.data
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

function parseDetailUrl(row: any) {
  __API__.showWindow()
  __API__.loadURL(row.detailUrl)
}

function parseColor(row: any) {
  const data = row.data
  const yanseList = data.yanse.map((item: any) => item.name)
  row.color = yanseList.join('\n')
  return row.color
}

function parseSize(row: any) {
  const data = row.data
  row.size = data.chima.join('\n')
  return row.size
}

function parseRemark(row: any) {
  const title = row.title
  const hitKeyword = ['清仓', '预售']
  return hitKeyword.filter(key => title.includes(key)).join(' | ')
}

function parseReleaseTime(row: any) {
  const releaseTime = row.data?.xiangcexinxi?.shijian
  return dayjs(+releaseTime * 1000).format('YYYY-MM-DD')
}

function deleteRows() {
  const grid = gridApi.grid
  const selecterRecordList = grid.getCheckboxRecords()
  const deleteIds = selecterRecordList.map(item => item.id)
  __API__.deleteProduct(deleteIds)
  gridApi.reload()
}

function exportImages() {
  const grid = gridApi.grid
  const selecterRecordList = grid.getCheckboxRecords()
  const selecterRecord = selecterRecordList[0]
  if (selecterRecordList.length == 0) {
    message.warning('请选择需要导出的产品')
    return
  }
  if (selecterRecordList.length > 1) {
    message.warning('一次只能选择一个产品导出图片')
    return
  }
  showImageViewer.value = true;
  modalApi.open()
  currentExportImagesOptions.value = {
    fileName: selecterRecord.title,
    images: [
      {
        name: '主图',
        urls: Array.from(selecterRecord.data?.zhutu || []).map(url => ({ src: url, name: '' }))
      },
      {
        name: '详情图',
        urls: Array.from(selecterRecord.data?.xiangqingtu || []).map(url => ({ src: url, name: '' }))
      },
      {
        name: 'SKU图',
        urls: selecterRecord.data?.yanse || []
      }
    ]
  }
  console.log(`🚀 ~ exportImages ~ currentExportImagesOptions.value :`, currentExportImagesOptions.value)
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
    <Grid :table-title="'军埔选品'">
      <template #title="{ row }">
        <Button type="link" @click="() => parseDetailUrl(row)">{{ row.title }}</Button>
      </template>
      <template #color="{ row }">
        <div>{{ parseColor(row) }}</div>
      </template>de
      <template #size="{ row }">
        <div>{{ parseSize(row) }}</div>
      </template>
      <template #remark="{ row }">
        <div>{{ parseRemark(row) }}</div>
      </template>
      <template #releaseTime="{ row }">
        <div>{{ parseReleaseTime(row) }}</div>
      </template>
      <template #toolbar-tools>
        <Button class="mr-2" @click="exportImages()">
          导出图片
        </Button>
        <Button class="mr-2" type="primary" danger @click="deleteRows()">
          删除
        </Button>
        <!-- <Button class="mr-2" type="primary" @click="() => modalApi.open()">
          配置
        </Button> -->
        <downloadImagesModal class="w-[80%]" title="图片导出">
          <ImageViewer v-if="showImageViewer" ref="imageViewerRef" :options="currentExportImagesOptions" />
        </downloadImagesModal>
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
