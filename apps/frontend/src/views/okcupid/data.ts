import type { VbenFormSchema } from '#/adapter/form';
import type { VxeTableGridOptions } from '#/adapter/vxe-table';
import { $t } from '#/locales';
import dayjs from 'dayjs';

// 日期格式化函数
export const formatTimeField = (time: string | null | number): string => {
  if (!time) return '';
  try {
    return dayjs(+time).subtract(8, 'hour').format('MM-DD HH:mm:ss');
  } catch (error) {
    return String(time) || '';
  }
};

export function useSettingFrom(): VbenFormSchema[] {
  return [
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入最高配送天数',
      },
      fieldName: 'deliveryDay',
      label: '配送天数',
    },
  ]
}

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
    // {
    //   type: 'checkbox',
    //   title: '',
    //   width: 50,
    // },
    // {
    //   field: 'index',
    //   title: '序号',
    //   width: 60,
    // },
    {
      field: 'serial_number',
      title: '编号',
      width: 60,
    },
    {
      field: 'user_id',
      title: '浏览器ID',
      width: 100,
      sortable: true,
    },
    {
      field: 'group_name',
      title: '分组',
      width: 100,
      sortable: true,
    },
    {
      field: 'name',
      title: '标题',
      minWidth: 260,
      sortable: true,
    },
    {
      field: 'remark',
      title: '备注',
      minWidth: 260,
      // slots: {
      //   default: 'remark'
      // },
    },
    {
      field: 'created_time',
      title: '创建时间',
      width: 120,
      visible: false,
      sortable: true,
      formatter: ({ cellValue }) => formatTimeField(Number(cellValue) * 1000),
    },
    // {
    //   field: 'updated_time',
    //   title: '更新时间',
    //   visible: false,
    //   sortable: true,
    //   width: 120,
    //   formatter: ({ cellValue }) => formatTimeField(cellValue),
    // },
    // {
    //   cellRender: { name: 'CellOperation', props: { text: '编辑', type: 'primary' } },
    //   field: 'action',
    //   fixed: 'right',
    //   title: '操作',
    //   width: 120,
    // },
  ];
}
