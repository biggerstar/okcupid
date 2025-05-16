import type { VbenFormSchema } from '#/adapter/form';
import type { VxeTableGridOptions } from '#/adapter/vxe-table';
import { $t } from '#/locales';
import dayjs from 'dayjs';

// 日期格式化函数
const formatTimeField = (time: string | null): string => {
  if (!time) return '';
  try {
    return dayjs(+time).subtract(8, 'hour').format('MM-DD HH:mm:ss');
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
          { label: '广场', value: '广场' },
          { label: '推荐', value: '推荐' },
          { label: '热门', value: '热门' },
        ],
      },
      fieldName: 'status',
      label: '来源',
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
      field: 'display_id',
      title: '主播ID',
      width: 150,
      sortable: true,
      slots: {
        default: 'display_id'
      },
    },
    // {
    //   field: 'nickname',
    //   title: $t('system.user.nickname'),
    //   width: 160,
    // },
    {
      field: 'region',
      title: '区域',
      sortable: true,
      width: 60,
    },
    {
      field: 'data_from',
      width: 60,
      title: '来源',
      sortable: true,
    },
    {
      field: 'coin',
      title: '金币',
      width: 80,
      sortable: true,
    },
    {
      field: 'tow_week_coins',
      title: '两周金币',
      width: 100,
      sortable: true,
    },
    {
      field: 'fans',
      title: '粉丝',
      width: 70,
      sortable: true,
    },
    {
      field: 'follow',
      title: '关注',
      width: 70,
      sortable: true,
    },
    {
      field: 'audience_count',
      title: '观众',
      width: 70,
      sortable: true,
    },
    {
      field: 'live_type',
      title: '类型',
      width: 70,
      sortable: true,
    },
    // {
    //   field: 'tags',
    //   title: '标签',
    // },
    {
      field: 'check_result',
      title: '查验结果',
      sortable: true,
    },
    {
      field: 'created_time',
      title: '创建时间',
      width: 120,
      sortable: true,
      formatter: ({ cellValue }) => formatTimeField(cellValue),
    },
    {
      field: 'updated_time',
      title: '更新时间',
      visible: false,
      sortable: true,
      width: 120,
      formatter: ({ cellValue }) => formatTimeField(cellValue),
    },
    {
      field: 'upload_time',
      title: '上传时间',
      visible: false,
      sortable: true,
      width: 120,
      formatter: ({ cellValue }) => formatTimeField(cellValue),
    },
    {
      field: 'check_time',
      title: '查验时间',
      sortable: true,
      width: 120,
      formatter: ({ cellValue }) => formatTimeField(cellValue),
    },
  ];
}
