<template>
  <div class="setting-page">
    <!-- 设置按钮 -->
    <!-- <setting-panel ref="updatePanelRef" :config-data="configData" :hour-limit="hourLimit" :day-limit="dayLimit"
    @update:config="handleConfigUpdate" @update:hour-limit="(val) => hourLimit = val"
    @update:day-limit="(val) => dayLimit = val" /> -->
    <div>
      <!-- 状态栏区域 -->
      <div>
        <div class="status-card">
          <div class="status-bar-container">
            <!-- 使用 flex 布局确保所有内容在同一行 -->
            <div class="status-bar-row">
              <!-- 左侧功能区域包装 -->
              <div class="left-section">
                <!-- 左侧状态区域 -->
                <div class="status-bar-col" style="flex:none; width: 12%;">
                  <status-panel ref="statusPanelRef" :status-data="statusData" @update:status="handleStatusUpdate" />
                </div>

                <!-- 中间统计区域 -->
                <div class="status-bar-col" style="flex:0.9;  width: 15%;">
                  <stats-counter ref="statsCounterRef" :stats-data="statsData" @update:stats="handleStatsUpdate" />
                </div>

                <!-- 采集配置区域 -->
                <div class="status-bar-col" style="flex:0.9;  width: 15%;">
                  <config-panel ref="configPanelRef" :config-data="configData" @update:config="handleConfigUpdate" />
                </div>

                <!-- 右侧仪表盘区域 -->
                <div class="status-bar-col gauge-col" style="flex:0.9;  width: 15%; max-width: 200px;">
                  <gauge-chart ref="hourGaugeRef" :initial-value="hourValue" :initial-max="hourLimit" :min-value="0"
                    :max-value="100" :title="'最近1小时'" @update:max="handleHourLimitUpdate" />
                </div>

                <!-- 右侧仪表盘区域2 -->
                <div class="status-bar-col gauge-col">
                  <gauge-chart ref="dayGaugeRef" :initial-value="dayValue" :initial-max="dayLimit" :min-value="0"
                    :max-value="1000" :title="'最近1天'" @update:max="handleDayLimitUpdate" />
                </div>
              </div>

              <!-- 中间空白区域 -->
              <div class="middle-space"></div>

              <!-- 操作按钮区域 - 放在最右侧 -->
              <div class="status-bar-col action-col">
                <action-buttons :running="runningStatus" @start="startOrStopTask" />
              </div>

            </div>
          </div>
        </div>
      </div>

      <!-- 统计图表区域 -->
      <div>
        <statistics-charts height=" 66%" ref="statisticsChartsRef" />
      </div>

    </div>

    <div style="position: fixed; right: 10px; bottom: 10px; color: gray;">
      <span> 账号 {{ loginedData?.realName || '' }}</span>
      <span> | </span>
      <span>鲨鱼 v{{ appVersion }} </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { message } from 'ant-design-vue';
import { onMounted, onUnmounted, reactive, ref, toRaw, watch } from 'vue';
import ActionButtons from './components/ActionButtons.vue';
import ConfigPanel from './components/ConfigPanel.vue';
import GaugeChart from './components/GaugeChart.vue';
import StatisticsCharts from './components/StatisticsCharts.vue';
import StatsCounter from './components/StatsCounter.vue';
import StatusPanel from './components/StatusPanel.vue';

// 事件处理函数
interface StatusData {
  collectionArea: string;
  canCrawl: '是' | '否';
  checkArea: string;
  checkStatus: '是' | '否';
}

interface StatsData {
  collectedCount: number;
  qualifiedCount: number;
  regionQualifiedCount: number;
  qualifiedCountByOneDay: number;
  updatedCount: number;
  regionQualifiedCountByOneDay: number;
  bossCount: number;
  checkedCount: number;
  qualifiedAnchorCountByOneday: number;
  qualifiedAnchorCount: number;
  newCount: number;
  checkCount: number;
  availableCount: number;
}

interface ConfigData {
  anchorMinCoin: number;
  bossMinCoin: number;
  minFans: number;
  tags: string;
  filterEcommerce: boolean;
  autoCheck: boolean;
  autoUpload: boolean;
  guildCheckInterval: number;
}

// 组件引用，用于外部访问
interface GaugeChartInstance {
  setValue: (value: number) => void;
  updateChart: () => void;
  getLimit: () => number;
  setLimit: (value: number) => void;
}

const appVersion = window['__VBEN_ADMIN_METADATA__']?.['version'] || '1.0.0'
const loginedData = JSON.parse(localStorage.getItem('loginedData') || '{}')
const statusPanelRef = ref(null);
console.log("🚀 ~ loginedData:", loginedData)
const statsCounterRef = ref(null);
const configPanelRef = ref(null);
const hourGaugeRef = ref<GaugeChartInstance | null>(null);
const dayGaugeRef = ref<GaugeChartInstance | null>(null);
const statisticsChartsRef = ref(null);

// 仪表盘数据
const hourLimit = ref(0);
const dayLimit = ref(0);
const hourValue = ref(0);
const dayValue = ref(0);
const runningStatus = ref(false);

// 状态数据
const statusData = reactive<StatusData>({
  collectionArea: '',
  canCrawl: '否',
  checkArea: '',
  checkStatus: '否'
});

// 统计数据
const statsData = reactive<StatsData>({
  collectedCount: 0,
  qualifiedCount: 0,
  regionQualifiedCount: 0,
  updatedCount: 0,
  checkedCount: 0,
  bossCount: 0,
  regionQualifiedCountByOneDay: 0,
  qualifiedCountByOneDay: 0,
  qualifiedAnchorCount: 0,
  qualifiedAnchorCountByOneday: 0,
  newCount: 0,
  checkCount: 0,
  availableCount: 0
});

// 配置数据
const configData = reactive<ConfigData>({
  anchorMinCoin: 0,
  bossMinCoin: 50,
  minFans: 300,
  tags: '',
  filterEcommerce: true,
  autoCheck: false,
  autoUpload: false,
  guildCheckInterval: 90
});

watch(configData, () => {
  __API__.updateAppConfig(toRaw(configData))
})
watch([hourLimit, dayLimit], () => {
  __API__.updateAppConfig(toRaw({
    hourLimit: hourLimit.value,
    dayLimit: dayLimit.value,
  }))
})

/**
 * 更新仪表盘值
 */
function updateGaugeValues(data: {
  hourLimit?: number;
  dayLimit?: number;
  hourValue?: number;
  dayValue?: number;
}) {
  // 更新限制值
  if (data.hourLimit !== undefined) {
    hourLimit.value = data.hourLimit;
    // 同时更新仪表盘组件的限制值
    if (hourGaugeRef.value) {
      hourGaugeRef.value.setLimit(data.hourLimit);
    }
  }

  if (data.dayLimit !== undefined) {
    dayLimit.value = data.dayLimit;
    // 同时更新仪表盘组件的限制值
    if (dayGaugeRef.value) {
      dayGaugeRef.value.setLimit(data.dayLimit);
    }
  }

  // 更新当前值并同步到仪表盘组件
  if (data.hourValue !== undefined && hourGaugeRef.value) {
    hourValue.value = data.hourValue;
    hourGaugeRef.value.setValue(data.hourValue);
  }
  if (data.dayValue !== undefined && dayGaugeRef.value) {
    dayValue.value = data.dayValue;
    dayGaugeRef.value.setValue(data.dayValue);
  }
}

const handleStatusUpdate = (newStatus: Partial<StatusData>) => {
  Object.assign(statusData, newStatus);
};

const handleStatsUpdate = (newStats: Partial<StatsData>) => {
  Object.assign(statsData, newStats);
};

const handleConfigUpdate = (newConfig: Partial<ConfigData>) => {
  Object.assign(configData, newConfig);
};

// 开始或停止任务
const startOrStopTask = async () => {
  console.log('切换任务状态');
  // 如果当前正在运行，则停止任务
  if (runningStatus.value) {
    __API__.stopTask();
    runningStatus.value = false;
    message.success('停止执行');
    return;
  }

  // 如果当前未运行，检查条件是否满足后启动任务
  if (
    true
    // statusData.canCrawl === '是'
    // statusData.checkStatus === '是' &&
    // statusData.checkArea === statusData.collectionArea
  ) {
    __API__.startTask();
    runningStatus.value = true;
    message.success('开始执行');
  } else {
    message.error('条件不满足，不可开启');
  }
};

let _updateConfigTimer: any = null;
let _loopSyncRunningStatusConfigTimer: any = null;

// 更新当前的统计信息
async function updateCrawlStatFromMainProcess(currentStat: Record<string, any>) {
  if (currentStat && typeof currentStat === 'object') {
    // 更新爬取主播数据
    if (currentStat.collectedCount !== undefined) {
      statsData.collectedCount = currentStat.collectedCount;
    }
    // 更新合格主播数据
    if (currentStat.qualifiedCount !== undefined) {
      statsData.qualifiedCount = currentStat.qualifiedCount;
    }

    // 更新 24 小时内合格主播数据
    if (currentStat.qualifiedCountByOneDay !== undefined) {
      statsData.qualifiedCountByOneDay = currentStat.qualifiedCountByOneDay;
    }

    // 更新区域合格主播数据
    if (currentStat.regionQualifiedCount !== undefined) {
      statsData.regionQualifiedCount = currentStat.regionQualifiedCount;
    }
    // 更新区域合格主播数据
    if (currentStat.regionQualifiedCountByOneDay !== undefined) {
      statsData.regionQualifiedCountByOneDay = currentStat.regionQualifiedCountByOneDay;
    }

    // 更新区域查验合格主播数据
    if (currentStat.qualifiedAnchorCount !== undefined) {
      statsData.qualifiedAnchorCount = currentStat.qualifiedAnchorCount;
    }

    // 更新区域 查验 24 小时合格主播数据
    if (currentStat.qualifiedAnchorCountByOneday !== undefined) {
      statsData.qualifiedAnchorCountByOneday = currentStat.qualifiedAnchorCountByOneday;
    }

    if (currentStat.checkedCount !== undefined) {
      statsData.checkedCount = currentStat.checkedCount;
    }

    // 更新更新主播数据
    if (currentStat.bossCount !== undefined) {
      statsData.bossCount = currentStat.bossCount;
    }

    // 更新更新主播数据
    if (currentStat.updatedCount !== undefined) {
      statsData.updatedCount = currentStat.updatedCount;
    }
    // 更新新建主播数据
    if (currentStat.newCount !== undefined) {
      statsData.newCount = currentStat.newCount;
    }
    // 更新查验主播数据
    if (currentStat.checkCount !== undefined) {
      statsData.checkCount = currentStat.checkCount;
    }
    // 更新可用主播数据
    if (currentStat.availableCount !== undefined) {
      statsData.availableCount = currentStat.availableCount;
    }
  }
}

/**
 * 从API配置更新页面状态
 * 可直接使用__API__.getAppConfig()返回的数据作为参数
 */
function updateFromAppConfig(config: Record<string, any>) {
  // 更新状态面板数据
  statusData.collectionArea = config.region || '';
  statusData.checkArea = config.checkArea || '';
  statusData.canCrawl = config.canCrawl === '1' ? '是' : '否';
  statusData.checkStatus = config.checkStatus === '1' ? '是' : '否';

  // 更新配置面板数据(如果需要)
  if (config.anchorMinCoin) configData.anchorMinCoin = +config.anchorMinCoin;
  if (config.bossMinCoin) configData.bossMinCoin = +config.bossMinCoin;
  if (config.minFans) configData.minFans = +config.minFans;
  if (config.tags !== undefined) configData.tags = config.tags;
  if (config.filterEcommerce !== undefined) configData.filterEcommerce = config.filterEcommerce === '1' || config.filterEcommerce === true;
  if (config.autoCheck !== undefined) configData.autoCheck = config.autoCheck === '1' || config.autoCheck === true;
  if (config.autoUpload !== undefined) configData.autoUpload = config.autoUpload === '1' || config.autoUpload === true;
  if (config.guildCheckInterval !== undefined) configData.guildCheckInterval = +config.guildCheckInterval;

  // 更新仪表盘数据
  updateGaugeValues({
    hourLimit: +config.hourLimit || 0,
    dayLimit: +config.dayLimit || 0,
    hourValue: +config.hourValue || 0,
    dayValue: +config.dayValue || 0
  });
}

async function syncRuningStatus() {
  // 使用 ShowStatus API 代替 RunningStatus API
  // const tkWindowShowStatus = await __API__.getTiktokWindowRunningStatus();
  // const tkBackstageShowStatus = await __API__.getTiktokBackstageWindowRunningStatus();
  // 更新运行状态，任一窗口显示即认为在运行
  runningStatus.value = await __API__.taskRunningStatus();
}

async function doUpdatePageInfoByAppConfig() {
  const currentConfig = await __API__.getAppConfig();
  const currentStat = await __API__.getCurrentStat();

  updateFromAppConfig(currentConfig);
  updateCrawlStatFromMainProcess(currentStat);
}

onMounted(() => {
  doUpdatePageInfoByAppConfig()
  setTimeout(doUpdatePageInfoByAppConfig, 2000)
  setTimeout(doUpdatePageInfoByAppConfig, 4000)
  _updateConfigTimer = setInterval(() => doUpdatePageInfoByAppConfig(), 6000);
  syncRuningStatus()
  _loopSyncRunningStatusConfigTimer = setInterval(() => syncRuningStatus(), 2000);
});

onUnmounted(() => {
  clearInterval(_updateConfigTimer);
  clearInterval(_loopSyncRunningStatusConfigTimer);
});

// 添加对仪表盘组件初始化后的监听
watch([hourGaugeRef, dayGaugeRef], ([hourGauge, dayGauge]) => {
  if (hourGauge && dayGauge) {
    // 组件挂载后，立即更新一次仪表盘的数据和限制值
    updateGaugeValues({
      hourLimit: hourLimit.value,
      dayLimit: dayLimit.value,
      hourValue: hourValue.value,
      dayValue: dayValue.value
    });
  }
}, { immediate: true });

// 处理仪表盘最大值更新事件
const handleHourLimitUpdate = (value: number) => {
  hourLimit.value = value;
};

const handleDayLimitUpdate = (value: number) => {
  dayLimit.value = value;
};
</script>

<style lang="scss" scoped>
/* 媒体查询放在最外层 */
@media (min-width: 868px) {
  .action-col {
    margin-right: 36px !important;
  }
}

@media (min-width: 1268px) {
  .action-col {
    margin-right: 26px !important;
  }
}

@media (min-width: 1568px) {
  .action-col {
    margin-right: 0 !important;
  }
}

.setting-page {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-width: 1200px;
  height: 100vh;
  padding: 12px 16px;
  background-color: #f5f5f5;

  .status-card {
    height: auto;
    padding: 16px 20px;
    border-radius: 8px;

    .status-bar-container {
      width: 100%;

      .status-bar-row {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        width: 100%;

        .left-section {
          display: flex;
          flex: 3;
          flex-wrap: nowrap;
        }

        .middle-space {
          flex: 1;
        }

        .status-bar-col {
          position: relative;
          flex: 1;
          min-width: 0;
          padding: 0 10px;
          border-right: 1px solid #f0f0f0;

          // 仪表盘列宽度调整
          &.gauge-col {
            flex: 0.95;
          }

          // 操作按钮列样式
          &.action-col {
            display: flex;
            flex: 0.6;
            align-items: center;
            justify-content: center;
            padding: 0 5px;
            border-right: none;
          }

          // 第一个元素不需要左边距
          &:first-child {
            padding-left: 0;
          }
        }

        .left-section .status-bar-col:last-child {
          border-right: none;
        }
      }
    }
  }
}
</style>
