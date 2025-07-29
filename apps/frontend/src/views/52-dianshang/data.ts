import type { VbenFormSchema } from '#/adapter/form';
import type { VxeTableGridOptions } from '#/adapter/vxe-table';
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
  return [];
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
      width: 60,
    },
    {
      field: 'keyword',
      title: '搜索词',
      width: 110,
    },
    {
      field: 'detailUrl',
      title: '来源 URL',
      width: 160,
      visible: false,
    },
    {
      field: 'title',
      title: '标题',
      minWidth: 260,
      sortable: true,
      slots: {
        default: 'title'
      },
    },
    {
      field: 'color',
      title: '颜色',
      minWidth: 260,
      slots: {
        default: 'color'
      },
      exportMethod({ row }) {
        return row.color
          ? row.color.split('\n').join('、')
          : ''
      }
    },
    {
      field: 'size',
      title: '尺码',
      minWidth: 260,
      slots: {
        default: 'size'
      },
    },
    {
      field: 'releaseTime',
      title: '发布时间',
      minWidth: 120,
      visible: false,
      slots: {
        default: 'releaseTime'
      },
    },
    {
      field: 'updateTime',
      title: '更新时间', // 产品更新时间，不是数据库时间
      minWidth: 120,
      slots: {
        default: 'updateTime'
      },
    },
    {
      field: 'remark',
      title: '备注',
      minWidth: 260,
      slots: {
        default: 'remark'
      },
      filters: [
        { label: '清仓', value: true },
        { label: '预售', value: true }
      ],
      filterMethod(options) {
        const { row, option } = options
        if (option.label === '清仓' && row.title.includes('清仓')) {
          return true
        }
        if (option.label === '预售' && row.title.includes('预售')) {
          return true
        }
        return false
      }
    },
    {
      field: 'created_time',
      title: '创建时间',
      width: 120,
      visible: false,
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
  ];
}
