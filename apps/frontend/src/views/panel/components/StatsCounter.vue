<template>
  <div class="stats-counter">
    <div class="status-title">已运行{{ runDays }}天{{ runHours }}小时{{ runMinutes }}分钟</div>
    <div class="status-content">
      <div class="status-item">
        <span class="label">有效爬取总数:</span>
        <span class="value">{{ statsData.collectedCount }}</span>
      </div>
      <!-- <div class="status-item">
        <span class="label">已查主播数:</span>
        <span class="value">{{ statsData.checkedCount }}</span>
      </div> -->
      <div class="status-item">
        <span class="label">全球合格(总):</span>
        <span class="value">{{ statsData.qualifiedCount }}</span>
      </div>
      
      <div class="status-item">
        <span class="label">区域合格(总):</span>
        <span class="value">{{ statsData.regionQualifiedCount }}</span>
      </div>

      <div class="status-item">
        <span class="label">全球合格(天):</span>
        <span class="value">{{ statsData.qualifiedCountByOneDay }}</span>
      </div>
      
      <div class="status-item">
        <span class="label">区域合格(天):</span>
        <span class="value">{{ statsData.regionQualifiedCountByOneDay }}</span>
      </div>
      
      <div class="status-item">
        <span class="label">老板数量:</span>
        <span class="value">{{ statsData.bossCount }}</span>
      </div>
      
      <!-- <div class="status-item">
        <span class="label">更新主播:</span>
        <span class="value">{{ statsData.updatedCount }}</span>
      </div> -->
      <!-- <div class="status-item">
        <span class="label">新建主播:</span>
        <span class="value">{{ statsData.newCount }}</span>
      </div> -->
      <!-- <div class="status-item">
        <span class="label">查验主播:</span>
        <span class="value">{{ statsData.checkCount }}</span>
      </div> -->
      <div class="status-item">
        <span class="label">可用主播(总):</span>
        <span class="value">{{ statsData.qualifiedAnchorCount }}</span>
      </div>
      <div class="status-item">
        <span class="label">可用主播(天):</span>
        <span class="value">{{ statsData.qualifiedAnchorCountByOneday }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';

interface StatsData {
  collectedCount: number;
  qualifiedCount: number;
  updatedCount: number;
  checkedCount: number;
  bossCount: number;
  regionQualifiedCount: number;
  qualifiedCountByOneDay: number;
  regionQualifiedCountByOneDay: number;
  qualifiedAnchorCount: number;
  qualifiedAnchorCountByOneday: number;
  newCount: number;
  checkCount: number;
  availableCount: number;
}

const props = defineProps<{
  statsData: StatsData;
}>();

const emit = defineEmits<{
  'update:stats': [stats: StatsData]
}>();

// 运行时间相关
const SESSION_STORAGE_KEY = 'stats_start_time';
const startTimestamp = ref(0);        // 第一次打开页面的时间戳
const runTime = ref(0);               // 当前运行时间（毫秒）
const intervalId = ref<number | null>(null);

// 计算运行时间
const runDays = computed(() => Math.floor(runTime.value / (1000 * 60 * 60 * 24)));
const runHours = computed(() => Math.floor((runTime.value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
const runMinutes = computed(() => Math.floor((runTime.value % (1000 * 60 * 60)) / (1000 * 60)));

// 保存初始时间点到 sessionStorage
const saveStartTime = () => {
  sessionStorage.setItem(SESSION_STORAGE_KEY, startTimestamp.value.toString());
};

// 从 sessionStorage 加载初始时间点
const loadStartTime = () => {
  const savedStartTime = sessionStorage.getItem(SESSION_STORAGE_KEY);
  if (savedStartTime) {
    startTimestamp.value = parseInt(savedStartTime);
  } else {
    // 如果没有保存的初始时间，设置当前时间为初始时间
    startTimestamp.value = Date.now();
    saveStartTime();
  }
};

// 更新运行时间
const updateRunningTime = () => {
  // 计算从初始时间点到现在的运行时间
  runTime.value = Date.now() - startTimestamp.value;
};

// 启动定时器
const startTimer = () => {
  if (intervalId.value === null) {
    // 先更新一次时间，确保初始值正确
    updateRunningTime();
    
    // 设置定时器，每分钟更新一次
    intervalId.value = window.setInterval(() => {
      updateRunningTime();
    }, 60000); // 每分钟更新一次
  }
};

// 更新统计数据
const updateStats = (newStats: Partial<StatsData>) => {
  emit('update:stats', { ...props.statsData, ...newStats });
};

// 获取当前统计
const getStats = () => {
  return { ...props.statsData };
};

// 监听属性变化
watch(() => props.statsData, () => {}, { deep: true });

onMounted(() => {
  // 页面加载时从 sessionStorage 读取初始时间点
  loadStartTime();
  
  // 启动定时器
  startTimer();
});

onBeforeUnmount(() => {
  // 清除定时器
  if (intervalId.value !== null) {
    clearInterval(intervalId.value);
    intervalId.value = null;
  }
});

// 暴露方法给父组件
defineExpose({
  updateStats,
  getStats
});
</script>

<style lang="scss" scoped>
.stats-counter {
  height: 100%;

  .status-title {
    margin-bottom: 6px;
    font-size: 14px;
    font-weight: 600;
    color: #333;
  }

  .status-content {
    .status-item {
      display: flex;
      align-items: center;
      margin-bottom: 5px;

      .label {
        width: 100px;
        color: #666;
      }

      .value {
        font-weight: 500;
        color: #333;
      }
    }
  }
}
</style>
