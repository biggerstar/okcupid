import type { VbenFormSchema } from '#/adapter/form';
import type { VxeTableGridOptions } from '#/adapter/vxe-table';
import { $t } from '#/locales';
import dayjs from 'dayjs';

// 日期格式化函数
const formatTimeField = (time: string | null): string => {
  if (!time) return '';
  try {
    return dayjs(time).format('MM-DD HH:mm:ss');
  } catch (error) {
    return time || '';
  }
};

export function useGridFormSchema(): VbenFormSchema[] {
  return [
    {
      component: 'Input',
      fieldName: 'username',
      label: $t('system.user.username'),
    },
    {
      component: 'Input',
      fieldName: 'nickname',
      label: $t('system.user.nickname'),
    },
    {
      component: 'ApiSelect',
      componentProps: {
        allowClear: true,
        options: [
          { label: $t('ui.form.enabled'), value: 1 },
          { label: $t('ui.form.disabled'), value: 0 },
        ],
      },
      fieldName: 'status',
      label: $t('system.user.status'),
    },
  ];
}

export function useColumns(): VxeTableGridOptions['columns'] {
  return [
    {
      type: 'checkbox',
      title: '',
      width: 50,
    },
    {
      field: 'index',
      title: '序号',
      width: 80,
    },
    {
      field: 'display_name',
      title: '老板ID',
      width: 160,
      sortable: true,
      slots: {
        default: 'display_name'
      },
    },
    {
      field: 'from_live_display_name',
      title: '来自直播间',
      sortable: true,
      slots: {
        default: 'from_live_display_name'
      },
    },
    {
      field: 'nickname',
      title: '昵称',
      sortable: true,
    },
    {
      field: 'fan_ticket',
      title: '金币',
      sortable: true,
      width: 120,
    },
    {
      field: 'created_time',
      title: '创建时间',
      sortable: true,
      formatter: ({ cellValue }) => formatTimeField(cellValue),
    },
    {
      field: 'updated_time',
      title: '更新时间',
      sortable: true,
      visible: false,
      formatter: ({ cellValue }) => formatTimeField(cellValue),
    },
  ];
}
