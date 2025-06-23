<script lang="ts" setup>

import type {
  VxeTableGridOptions
} from '#/adapter/vxe-table';

import { Page } from '@vben/common-ui';

import { Button } from 'ant-design-vue';

import { useVbenVxeGrid } from '#/adapter/vxe-table';

import Api from '#/api';
import type { CompanyUserApi } from '#/api/company/user';
import { useColumns, useGridFormSchema } from './data';

const [Grid, gridApi] = useVbenVxeGrid({
  showSearchForm: false,
  formOptions: {
    schema: useGridFormSchema(),
    submitOnChange: true,
    showCollapseButton: false,
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
      pageSize: 50,
      pageSizes: [50, 200, 500, 2000, 5000, 10000, 50000, 100000, 200000, 500000, 1000000]
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
          // console.log("🚀 ~ query: ~ page:", page, formValues)
          const res = await Api.electron.boss.getBossList({
            page: page.currentPage,
            pageSize: page.pageSize,
            ...formValues,
          });
          console.log("🚀 ~ query: ~ res:", res)
          return res
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

function getTikTokLiveUrl (user_unionid: string, isLive: boolean = false){
  let url =''
  if (isLive) {
      url =  `https://www.tiktok.com/@${user_unionid}/live`
    }else{
      url =  `https://www.tiktok.com/@${user_unionid}`
  }
  return url
}

function deleteRows() {
  const grid = gridApi.grid
  const selecterRecord = grid.getCheckboxRecords()
  console.log("🚀 ~ deleteRows ~ selecterRecord:", selecterRecord)
  const deleteIds = selecterRecord.map(item => item.id)
  __TABLE_API__.deleteBossList(deleteIds)
  gridApi.reload()
}

</script>
<template>
  <Page auto-content-height>
    <Grid :table-title="'老板列表'">
      <template #display_name="{ row }">
        <Button type="link" target="_blank" :href="getTikTokLiveUrl(row['display_name'], false)">
          {{ row['display_name'] }}
        </Button>
      </template>
      <template #from_live_display_name="{ row }">
        <Button type="link" target="_blank" :href="getTikTokLiveUrl(row['from_live_display_name'], true )">
          {{ row['from_live_display_name'] }}
        </Button>
      </template>
      <template #toolbar-tools>
        <Button class="mr-2" type="primary" danger @click="deleteRows()">
          删除
        </Button>
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
