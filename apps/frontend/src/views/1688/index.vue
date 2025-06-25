<script lang="ts" setup>

import type {
  VxeTableGridOptions
} from '#/adapter/vxe-table';

import { Page } from '@vben/common-ui';

import { Button } from 'ant-design-vue';

import { useVbenForm } from '#/adapter/form';
import { useVbenVxeGrid } from '#/adapter/vxe-table';
import type { CompanyUserApi } from '#/api/company/user';
import { useVbenModal } from '@vben/common-ui';
import { onMounted, onUnmounted } from 'vue';
import { useColumns, useGridFormSchema, useSettingFrom } from './data';

const [settingModal, modalApi] = useVbenModal({
  onOpened() {
    const stockLimit = localStorage.getItem('stockLimit')
    if (stockLimit) {
      formApi.setValues({ stockLimit })
    }
  },
  async onConfirm() {
    const values = await formApi.getValues()
    if (values.stockLimit) {
      localStorage.setItem('stockLimit', values.stockLimit)
    }
    gridApi.query()
    modalApi.close()
  }
});
const [settingForm, formApi] = useVbenForm({
  showDefaultActions: false,
  schema: useSettingFrom()
})

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
      types: ['csv', 'txt']
    },
    proxyConfig: {
      ajax: {
        query: async ({ page }, formValues) => {
          const result = await __API__.getPruductList({
            where: { type: '1688' },
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

function parseColor(row: any) {
  const skuList = row.skuList
  return [...new Set(skuList.map((item: any) => item.specAttrs.split(';')[0]))].join('\n')
}

function parseSize(row: any) {
  const skuList = row.skuList
  return [...new Set(skuList.map((item: any) => item.specAttrs.split(';')[1]))].join('\n')
}

function parsePresale(row: any){
  return row.title.includes('预售') ? '是' : ''
}

function parseLimit(row: any): string {
  const skuList = row.skuList
  const specList: string[] = []
  const stockLimit = localStorage.getItem('stockLimit')
  if (!stockLimit) return ''
  skuList.forEach((item: any) => {
    const canBookCount = item.canBookCount
    if (stockLimit <= canBookCount) return
    specList.push(`${item.specAttrs} - 库存 ${item.canBookCount}`)
  })
  return specList.join('\n')
}

function deleteRows() {
  const grid = gridApi.grid
  const selecterRecord = grid.getCheckboxRecords()
  const deleteIds = selecterRecord.map(item => item.id)
  __API__.deleteProduct(deleteIds)
  gridApi.reload()
}

let curTotal = -1
let loopUpdateTimer: any
onMounted(() => {
  loopUpdateTimer = setInterval(async() => {
    const productList = await __API__.getPruductList({ where: { type: '1688' }})
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
    <Grid :table-title="'1688选品'">
      <template #display_id="{ row }">
        <Button type="link" target="_blank" :href="row['detailUrl']">{{ row['title'] }}</Button>
      </template>
      <template #color="{ row }">
        <div>{{ parseColor(row) }}</div>
      </template>
      <template #size="{ row }">
        <div>{{ parseSize(row) }}</div>
      </template>
      <template #presale="{ row }">
        <div>{{ parsePresale(row) }}</div>
      </template>
      <template #limit="{ row }">
        <div>{{ parseLimit(row) }}</div>
      </template>
      <template #toolbar-tools>
        <Button class="mr-2" type="primary" danger @click="deleteRows()">
          删除
        </Button>
        <Button class="mr-2" type="primary" @click="() => modalApi.open()">
          配置
        </Button>
        <settingModal class="w-[600px]" title="配置">
          <settingForm></settingForm>
        </settingModal>
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
