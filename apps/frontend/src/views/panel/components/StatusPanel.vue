<template>
  <div class="status-panel">
    <div class="status-title">采集状态</div>
    <div class="status-content">
      <div class="status-item">
        <span class="label">采集区域:</span>
        <span class="value status-my">{{ statusData.collectionArea }}</span>
      </div>
      <div class="status-item">
        <span class="label">查验区域:</span>
        <span class="value status-my">{{ statusData.checkArea }}</span>
      </div>
      <div class="status-item">
        <span class="label">能否采集:</span>
        <span class="value" :class="getCanCrawClass">{{ getCanCrawlText }}</span>
      </div>
      <div class="status-item">
        <span class="label">能否查验:</span>
        <span class="value" :class="getCheckStatusClass">{{ getCheckStatusText }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

interface StatusData {
  collectionArea: string;
  canCrawl: string;
  checkArea: string;
  checkStatus: string;
}

const props = defineProps<{
  statusData: StatusData;
}>();

const getCanCrawClass = computed(() => {
  return props.statusData.canCrawl === '是' ? 'status-success' : 'status-error'
});


const getCheckStatusClass = computed(() => {
  return props.statusData.checkStatus === '是' ? 'status-success' : 'status-error'
});

const getCanCrawlText = computed(() => {
  return props.statusData.canCrawl;
});

const getCheckStatusText = computed(() => {
  return props.statusData.checkStatus
});

</script>

<style lang="scss" scoped>
.status-panel {
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
        width: 70px;
        color: #666;
      }

      .value {
        font-weight: 500;
        color: #333;
      }

      .status-my {
        font-weight: bold;
        color: #52c41a;
      }

      .status-success {
        display: inline-block;
        width: 20px;
        height: 20px;
        line-height: 20px;
        color: white;
        text-align: center;
        background-color: #2eb146;
        border-radius: 2px;
      }

      .status-error {
        display: inline-block;
        width: 20px;
        height: 20px;
        line-height: 20px;
        color: white;
        text-align: center;
        background-color: #f83838;
        border-radius: 2px;
      }
    }
  }
}
</style>
