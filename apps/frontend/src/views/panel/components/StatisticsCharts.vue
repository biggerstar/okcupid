<template>
  <div :bordered="false" class="chart-card">
    <div ref="speedChartRef" class="chart-container"></div>
    <div ref="recordChartRef" class="chart-container"></div>
  </div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts';
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue';

const activeTab = ref('speed');
const speedChartRef = ref<HTMLDivElement>();
const recordChartRef = ref<HTMLDivElement>();
let speedChart: echarts.ECharts | null = null;
let recordChart: echarts.ECharts | null = null;

async function syncMuinueStaisticsData() {
  const { all, qualified } = await __API__.getMinutelyCounts()
  const series = [
    {
      name: '采集主播',
      type: 'line',
      smooth: true,
      data: all.map((item: any) => item.count) || []
    },
    {
      name: '合格主播',
      type: 'line',
      smooth: true,
      data: qualified.map((item: any) => item.count) || []
    },
  ]
  speedChart?.setOption({
    series,
    xAxis: {
      data: qualified.map((item: any) => `${item.minute.getHours()}:${item.minute.getMinutes()}`)
    }
  })
}

async function syncDayStaisticsData() {
  const { qualified } = await __API__.getCheckedCountInfo()

  const checkCountData = qualified.map((item: any) => [item.created_time - 8 * 60 * 60 * 1000, item.check_count])
  const checkSuccessData = qualified.map((item: any) => [item.created_time - 8 * 60 * 60 * 1000, item.check_success])

  recordChart?.setOption({
    xAxis: {
      min: new Date().getTime() - 2 * 60 * 60 * 1000,
      max: new Date().getTime(),
    },
    series: [
      {
        name: '查验主播',
        type: 'scatter',
        symbolSize: 10,
        data: checkCountData,
        itemStyle: {
          color: '#6c5ce7'
        }
      },
      {
        name: '查验合格',
        type: 'scatter',
        symbolSize: 10,
        data: checkSuccessData,
        itemStyle: {
          color: '#f97f51'
        }
      }
    ],
  });
}

const syncTimer = setInterval(() => {
  syncMuinueStaisticsData()
  syncDayStaisticsData()
}, 20 * 1000)

onMounted(() => {
  syncMuinueStaisticsData()
  syncDayStaisticsData()
})
onUnmounted(() => {
  clearInterval(syncTimer)
})

function initSpeedChart() {
  if (speedChartRef.value) {
    if (speedChart) {
      speedChart.dispose();
    }

    speedChart = echarts.init(speedChartRef.value);
    speedChart.setOption({
      color: ['#1890ff', '#52c41a'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['采集主播', '合格主播'],
        right: 10,
        top: 0
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        axisLine: {
          lineStyle: {
            color: '#ddd'
          }
        },
        axisLabel: {
          color: '#666'
        }
      },
      yAxis: {
        type: 'value',
        name: '采集数量(分钟)',
        min: 1,
        minInterval: 1,
        axisLine: {
          show: false
        },
        axisLabel: {
          color: '#666',
          formatter: '{value}'
        },
        splitLine: {
          lineStyle: {
            color: '#eee'
          }
        }
      },
      series: [
        {
          name: '采集主播',
          type: 'line',
          smooth: true,
          data: []
        },
        {
          name: '合格主播',
          type: 'line',
          smooth: true,
          data: []
        }
      ]
    });
  }
}

function initRecordChart() {
  if (recordChartRef.value) {
    if (recordChart) {
      recordChart.dispose();
    }

    recordChart = echarts.init(recordChartRef.value);
    recordChart.setOption({
      color: ['#6c5ce7', '#f97f51'],
      tooltip: {
        snapThreshold: 20,
        trigger: 'axis',
        formatter: function (params: any) {
          const time = params[0].axisValue;
          const date = new Date(time)
          const timeString = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`
          let result = `${timeString}<br/>`;
          params.forEach((param: any) => {
            result += `${param.seriesName}: ${param.value[1]}个<br/>`;
          });
          return result;
        }
      },
      legend: {
        data: ['查验主播', '查验合格'],
        right: 10,
        top: 20
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'time',
        axisLabel: {
          formatter: function (value: any) {
            var date = new Date(value);
            return date.getHours() + ':'
              + ('0' + date.getMinutes()).slice(-2) + ':'
              + ('0' + date.getSeconds()).slice(-2);
          }
        },
        axisTick: {
          interval: 10 * 60 * 1000 // 设置分割线间隔（这里设置为每10分钟一条分割线
        }
      },
      yAxis: {
        type: 'value',
        name: '查验数量',
        min: 0,
        minInterval: 1,
        axisLine: {
          show: false
        },
        axisLabel: {
          color: '#666',
          formatter: '{value}'
        },
        splitLine: {
          lineStyle: {
            color: '#eee'
          }
        }
      },
      series: [
        {
          name: '查验主播',
          type: 'scatter',
          symbolSize: 8,
          data: []
        },
        {
          name: '查验合格',
          type: 'scatter',
          symbolSize: 8,
          data: []
        }
      ]
    });
  }
}

function resizeCharts() {
  speedChart?.resize();
  recordChart?.resize();
}

// 监听标签页切换
watch(activeTab, (val) => {
  nextTick(() => {
    if (val === 'speed') {
      initSpeedChart();
    } else if (val === 'record') {
      initRecordChart();
    }
    resizeCharts();
  });
});

// 创建 ResizeObserver 监听容器大小变化
let observer: ResizeObserver | null = null;

onMounted(() => {
  initSpeedChart();
  initRecordChart();

  window.addEventListener('resize', resizeCharts);

  // 使用 ResizeObserver 监听父容器大小变化
  if (typeof ResizeObserver !== 'undefined') {
    observer = new ResizeObserver(() => {
      resizeCharts();
    });

    if (speedChartRef.value) {
      observer.observe(speedChartRef.value.parentElement as Element);
    }

    if (recordChartRef.value) {
      observer.observe(recordChartRef.value.parentElement as Element);
    }
  }
});

onUnmounted(() => {
  speedChart?.dispose();
  recordChart?.dispose();
  window.removeEventListener('resize', resizeCharts);

  // 清除 ResizeObserver
  if (observer) {
    observer.disconnect();
    observer = null;
  }
});

// 暴露方法给父组件
defineExpose({
  resizeCharts
});
</script>

<style lang="scss" scoped>
.chart-card {
  display: flex;
  flex-direction: column;
  height: 100%;

  :deep(.ant-card-body) {
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 16px 16px 8px;
    overflow: hidden;
  }

  :deep(.ant-tabs) {
    display: flex;
    flex: 1;
    flex-direction: column;

    .ant-tabs-nav {
      margin-bottom: 10px;
    }

    .ant-tabs-content {
      flex: 1;
      height: 100%;
    }

    .ant-tabs-tabpane {
      height: 100%;
    }
  }

  .chart-container {
    width: 100%;
    height: 30%;
    min-height: 240px;
  }
}
</style>
