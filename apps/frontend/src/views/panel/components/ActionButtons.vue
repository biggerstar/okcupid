<template>
  <div class="action-buttons">
    <div class="btn-group">
      <a-button class="action-btn" :class="{ 'stop-btn': running }" :loading="startOrTsopStakLoading"
        @click="handleStart">
        <template #icon>
          <pause-circle-outlined v-if="props.running" />
          <play-circle-outlined v-else />
        </template>
        {{ running ? '停止执行' : '开始执行' }}
      </a-button>
      <a-button type="primary" class="action-btn tk-btn" :loading="tkLoading" :disabled="tkLoading"
        @click="handleOpenTK">
        <template #icon><link-outlined /></template>
        {{ tkWindowVisible ? '隐藏TK页面' : '打开TK页面' }}
      </a-button>
      <a-button type="primary" class="action-btn guild-btn" :loading="guildLoading" :disabled="guildLoading"
        @click="handleOpenGuild">
        <template #icon><team-outlined /></template>
        {{ guildWindowVisible ? '隐藏公会页面' : '打开公会页面' }}
      </a-button>
      <a-button type="primary" class="action-btn clear-check-btn" @click="clearCheckCounter">
        <template #icon>
          <ClearOutlined />
        </template>
        清除查验计数
      </a-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { sleep } from '#/utils/common';
import {
  ClearOutlined,
  LinkOutlined,
  PauseCircleOutlined,
  PlayCircleOutlined,
  TeamOutlined,
} from '@ant-design/icons-vue';
import { Button as AButton, message } from 'ant-design-vue';
import { onMounted, onUnmounted, ref } from 'vue';

// 定义组件属性
const props = defineProps<{
  running: boolean
}>();

// 定义事件
const emit = defineEmits<{
  (e: 'start'): void;
}>();

// 窗口显示状态
const tkWindowVisible = ref(false);
const guildWindowVisible = ref(false);
const tkLoading = ref(false);
const guildLoading = ref(false);
const startOrTsopStakLoading = ref(false);
let statusUpdateTimer: number | null = null;

// 获取窗口状态
const updateWindowStatus = async () => {
  try {
    const tkStatus = await __API__.getTiktokWindowShowStatus();
    const guildStatus = await __API__.getTiktokBackstageWindowShowStatus();

    // 更新按钮状态
    if (tkLoading.value && tkWindowVisible.value !== tkStatus) {
      tkLoading.value = false;
    }

    if (guildLoading.value && guildWindowVisible.value !== guildStatus) {
      guildLoading.value = false;
    }

    // 更新窗口状态
    tkWindowVisible.value = tkStatus;
    guildWindowVisible.value = guildStatus;
  } catch (error) {
    console.error('更新窗口状态出错:', error);
  }
};

// 轮询检查窗口状态变化
const pollWindowStatus = async (currentTkStatus: boolean, currentGuildStatus: boolean) => {
  let attempts = 0;
  const maxAttempts = 15; // 最多检查15次
  const pollInterval = 500; // 每0.5秒检查一次
  let pollTimer: number | null = null;

  // 设置超时保护，确保按钮不会无限期地处于加载状态
  const timeout = setTimeout(() => {
    if (tkLoading.value || guildLoading.value) {
      console.log('轮询超时，重置按钮状态');
      tkLoading.value = false;
      guildLoading.value = false;

      if (pollTimer) {
        clearTimeout(pollTimer);
      }
    }
  }, 10000); // 10秒超时

  const checkStatus = async () => {
    if (attempts >= maxAttempts) {
      console.log(`达到最大尝试次数(${maxAttempts})，停止轮询`);
      tkLoading.value = false;
      guildLoading.value = false;
      clearTimeout(timeout);
      return;
    }

    attempts++;
    console.log(`轮询检查状态 (${attempts}/${maxAttempts})`);

    try {
      // 检查TK窗口状态
      if (tkLoading.value) {
        const newTkStatus = await __API__.getTiktokWindowShowStatus();
        console.log(`TK窗口状态: ${newTkStatus ? '显示' : '隐藏'}`);

        if (newTkStatus !== currentTkStatus) {
          tkWindowVisible.value = newTkStatus;
          tkLoading.value = false;
          console.log('TK窗口状态已更新，停止轮询');
        }
      }

      // 检查公会窗口状态
      if (guildLoading.value) {
        const newGuildStatus = await __API__.getTiktokBackstageWindowShowStatus();
        console.log(`公会窗口状态: ${newGuildStatus ? '显示' : '隐藏'}`);

        if (newGuildStatus !== currentGuildStatus) {
          guildWindowVisible.value = newGuildStatus;
          guildLoading.value = false;
          console.log('公会窗口状态已更新，停止轮询');
        }
      }

      // 如果两个状态都已更新，则停止轮询
      if (!tkLoading.value && !guildLoading.value) {
        console.log('所有窗口状态已更新，停止轮询');
        clearTimeout(timeout);
        return;
      }

      // 继续轮询
      pollTimer = window.setTimeout(checkStatus, pollInterval);
    } catch (error) {
      console.error('轮询窗口状态出错:', error);

      // 出错时也停止loading状态
      tkLoading.value = false;
      guildLoading.value = false;
      clearTimeout(timeout);
    }
  };

  // 开始轮询
  checkStatus();
};

onMounted(async () => {
  await updateWindowStatus();
  statusUpdateTimer = window.setInterval(updateWindowStatus, 3000);
});

onUnmounted(() => {
  if (statusUpdateTimer) {
    clearInterval(statusUpdateTimer);
  }
});

function noticeNotLogin(){
  message.error('用户未登录')
}

// 处理开始执行按钮点击
const handleStart = async () => {
  const isLogined = await __API__.isLogined()
  if(!isLogined) {
    noticeNotLogin()
    return
  }
  startOrTsopStakLoading.value = true
  await sleep(300)
  emit('start');
  startOrTsopStakLoading.value = false
};

// 处理打开/隐藏TK页面按钮点击
const handleOpenTK = async () => {
  const isLogined = await __API__.isLogined()
  if(!isLogined) {
    noticeNotLogin()
    return
  }
  try {
    console.log('切换TK页面');

    // 设置加载状态
    tkLoading.value = true;

    // 获取当前状态用于比较
    const currentStatus = tkWindowVisible.value;

    // 通知调用API切换窗口状态
    if (currentStatus) {
      console.log('正在隐藏TK窗口...');
      await __API__.hideTikTokWindow();
    } else {
      console.log('正在显示TK窗口...');
      await __API__.openTikTokWindow();
    }

    // 启动轮询检查状态变化
    pollWindowStatus(currentStatus, guildWindowVisible.value);
  } catch (error) {
    console.error('切换TK窗口时出错:', error);
    message.error('操作TK窗口失败');
    tkLoading.value = false;
  }
};

// 处理打开/隐藏公会页面按钮点击
const handleOpenGuild = async () => {
  const isLogined = await __API__.isLogined()
  if(!isLogined) {
    noticeNotLogin()
    return
  }
  try {
    console.log('切换公会页面');

    // 设置加载状态
    guildLoading.value = true;

    // 获取当前状态用于比较
    const currentStatus = guildWindowVisible.value;

    // 通知调用API切换窗口状态
    if (currentStatus) {
      console.log('正在隐藏公会窗口...');
      await __API__.hideTiktokBackstageWindow();
    } else {
      console.log('正在显示公会窗口...');
      await __API__.openTiktokBackstageWindow();
    }

    // 启动轮询检查状态变化
    pollWindowStatus(tkWindowVisible.value, currentStatus);
  } catch (error) {
    console.error('切换公会窗口时出错:', error);
    message.error('操作公会窗口失败');
    guildLoading.value = false;
  }
};

const clearCheckCounter = async () => {
  await __API__.resetCheckCounter();
  setTimeout(() => location.reload(), 500);
};
</script>

<style lang="scss" scoped>
.action-buttons {
  display: flex;
  align-items: start;
  justify-content: flex-start;
  height: 100%;

  .btn-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }

  .action-btn {
    color: white;
    border-radius: 5px;

    // 开始执行按钮（默认按钮）
    &:first-child {
      background-color: #2196ea;
      border-color: #2196ea;

      &:hover,
      &:focus {
        background-color: #5daef0;
        border-color: #5daef0;
      }

      &.stop-btn {
        background-color: #ff4d4f;
        border-color: #ff4d4f;

        &:hover,
        &:focus {
          background-color: #ff7875;
          border-color: #ff7875;
        }
      }
    }

    &.tk-btn {
      background-color: #8f64da;
      border-color: #8f64da;

      &:hover,
      &:focus {
        background-color: #9d7fe0;
        border-color: #9d7fe0;
      }
    }

    &.guild-btn {
      background-color: #68c93a;
      border-color: #68c93a;

      &:hover,
      &:focus {
        background-color: #79cb58;
        border-color: #79cb58;
      }
    }

    &.clear-check-btn {
      background-color: #f05108;
      border-color: #f05108;

      &:hover,
      &:focus {
        background-color: #e21f01;
        border-color: #e21f01;
      }
    }
  }
}
</style>
