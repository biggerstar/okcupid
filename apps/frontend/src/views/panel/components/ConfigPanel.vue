<template>
  <div class="config-panel">
    <div class="status-title">采集配置</div>
    <div class="status-content">
      <div class="status-item">
        <span class="label">主播最低金币:</span>
        <a-input-number v-model:value="configData.anchorMinCoin" size="small" :min="0" :max="10000" style="width: 100px"
          @change="handleConfigChange('anchorMinCoin')" />
      </div>
      <div class="status-item">
        <span class="label">主播最低粉丝:</span>
        <a-input-number v-model:value="configData.minFans" size="small" :min="0" style="width: 100px"
          @change="handleConfigChange('minFans')" />
      </div>
      <div class="status-item">
        <span class="label">老板最低金币:</span>
        <a-input-number v-model:value="configData.bossMinCoin" size="small" :min="0" :max="10000" style="width: 100px"
          @change="handleConfigChange('bossMinCoin')" />
      </div>
      <div class="status-item">
        <span class="label">查验间隔 (秒):</span>
        <a-input-number v-model:value="configData.guildCheckInterval" size="small" :min="0" style="width: 100px"
          @change="handleConfigChange('guildCheckInterval')" />
      </div>
      <!-- <div class="status-item">
        <span class="label">标签:</span>
        <a-input v-model:value="configData.tags" size="small" style="width: 100px"
          @change="handleConfigChange('tags')" />
      </div> -->
      <!-- <div class="status-item checkbox">
        <a-checkbox direction="rtl" v-model:checked="configData.filterEcommerce"
          @change="handleConfigChange('filterEcommerce')">排除新建主播</a-checkbox>
      </div> -->
      <div class="status-item checkbox">
        <a-checkbox direction="rtl" v-model:checked="configData.autoCheck"
          @change="handleConfigChange('autoCheck')">自动查验</a-checkbox>
      </div>
      <div class="status-item checkbox">
        <a-checkbox direction="rtl" v-model:checked="configData.autoUpload"
          @change="handleConfigChange('autoCheck')">自动上传</a-checkbox>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Checkbox as ACheckbox, InputNumber as AInputNumber } from 'ant-design-vue';
import { watch } from 'vue';

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

const props = defineProps<{
  configData: ConfigData;
}>();

const emit = defineEmits<{
  'update:config': [config: ConfigData]
}>();

// 处理配置变更
const handleConfigChange = (key: keyof ConfigData) => {
  emitConfigUpdate();
};

// 向父组件发送更新事件
const emitConfigUpdate = () => {
  emit('update:config', { ...props.configData });
};

// 更新配置数据
const updateConfig = (newConfig: Partial<ConfigData>) => {
  emit('update:config', { ...props.configData, ...newConfig });
};

// 获取当前配置
const getConfig = () => {
  return { ...props.configData };
};

// 监听属性变化
watch(() => props.configData, (newValue) => {
  // 可以添加处理逻辑
}, { deep: true });

// 暴露方法给父组件
defineExpose({
  updateConfig,
  getConfig
});
</script>

<style lang="scss" scoped>
.config-panel {
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
        width: 120px;
        color: #666;
      }

      &.checkbox {
        margin-top: 8px;

        :deep(.ant-checkbox-wrapper) {
          flex-direction: row-reverse;

          span {
            padding-inline-start: 0
          }

          .ant-checkbox-inner {
            opacity: 0.9;
          }
        }
      }

      :deep(.ant-input-number) {
        background-color: transparent;
      }

      :deep(.ant-input) {
        background-color: transparent;
      }
    }
  }
}
</style>
