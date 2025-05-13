<template>
  <div class="gauge-chart-container">
    <div class="chart-title" v-if="title">{{ title }}</div>
    <div class="chart-wrapper">
      <div class="gauge-chart" ref="chartRef"></div>
      <div class="flex justify-center items-center">
        <span class="label">最高查验: </span>
        <a-input-number v-model:value="limitValue" size="small" :min="minValue" :max="maxValue" @change="handleLimitChange" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { InputNumber as AInputNumber } from 'ant-design-vue';
import * as echarts from 'echarts';
import { onMounted, onUnmounted, ref, watch } from 'vue';

const props = defineProps({
  initialValue: {
    type: Number,
    default: 0
  },
  initialMax: {
    type: Number,
    default: 0
  },
  minValue: {
    type: Number,
    default: 0
  },
  maxValue: {
    type: Number,
    default: 0
  },
  title: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['update:max']);
const limitValue = ref(props.initialMax);
const chartRef = ref<HTMLDivElement>();
let chart: echarts.ECharts | null = null;

// 监听props中initialMax的变化，更新limitValue
watch(() => props.initialMax, (newVal) => {
  if (newVal !== limitValue.value) {
    limitValue.value = newVal;
    updateChart();
  }
});

// 初始化仪表盘
function initChart() {
  if (chartRef.value) {
    chart = echarts.init(chartRef.value);

    const option = {
      series: [{
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: limitValue.value,
        radius: '100%',
        splitNumber: 5,
        axisLine: {
          lineStyle: {
            width: 10,
            color: [
              [0.3, '#67e0e3'],
              [0.7, '#37a2da'],
              [1, '#fd666d']
            ]
          }
        },
        pointer: {
          itemStyle: {
            color: 'auto'
          },
          width: 4
        },
        axisTick: {
          distance: 0,
          length: 6,
          lineStyle: {
            color: '#fff',
            width: 1.5
          }
        },
        splitLine: {
          distance: 0,
          length: 12,
          lineStyle: {
            color: '#fff',
            width: 2.5
          }
        },
        axisLabel: {
          distance: 10,
          color: '#999',
          fontSize: 12
        },
        detail: {
          valueAnimation: true,
          offsetCenter: [0, '40%'],
          fontSize: 16,
          fontWeight: 'bold',
          formatter: '{value}',
          color: 'inherit'
        },
        data: [{
          value: props.initialValue
        }]
      }]
    };

    chart.setOption(option);

    // 确保初始值和最大值正确设置
    chart.setOption({
      series: [{
        max: limitValue.value,
        data: [{
          value: props.initialValue
        }]
      }]
    });
  }
}

// 更新仪表盘配置
function updateChart() {
  if (chart) {
    // 保存当前值
    const options = chart.getOption();
    const currentValue = (options.series as any)[0].data[0].value;

    // 更新最大值
    chart.setOption({
      series: [{
        max: limitValue.value,
        data: [{
          value: currentValue
        }]
      }]
    });

    emit('update:max', limitValue.value);
  }
}

// 处理输入框限制值变化
function handleLimitChange(value: number | string | null) {
  if (value === null) return;
  const numValue = typeof value === 'string' ? parseFloat(value) : value;
  limitValue.value = numValue;
  updateChart();
  emit('update:max', numValue);
}

// 设置仪表盘值
function setValue(value: number) {
  if (chart) {
    // 获取当前选项
    const options = chart.getOption();
    const currentMax = (options.series as any)[0].max;

    // 更新仪表盘值而不改变最大值
    chart.setOption({
      series: [{
        max: currentMax,
        data: [{
          value
        }]
      }]
    });
  }
}

// 重新调整图表大小
function resizeChart() {
  chart?.resize();
}

onMounted(() => {
  // 确保初始值正确
  limitValue.value = props.initialMax;
  initChart();
  window.addEventListener('resize', resizeChart);
});

onUnmounted(() => {
  chart?.dispose();
  window.removeEventListener('resize', resizeChart);
});

// 暴露方法
defineExpose({
  setValue,
  updateChart,
  getLimit: () => limitValue.value,
  setLimit: (value: number) => {
    limitValue.value = value;
    // 使用 updateChart 方法确保只更新 max 值而不影响当前值
    updateChart();
  }
});
</script>

<style lang="scss" scoped>
.gauge-chart-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  .chart-title {
    margin-bottom: 6px;
    font-size: 16px;
    font-weight: 600;
    color: #333;
    text-align: center;
  }

  .chart-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .gauge-chart {
      width: 220px;
      height: 150px;
    }

    .label {
      margin-right: 10px;
      font-size: 14px;
      color: gray;
    }
  }

  :deep(.ant-input-number) {
    background-color: transparent;
  }

  :deep(.ant-input) {
    background-color: transparent;
  }
}
</style>
