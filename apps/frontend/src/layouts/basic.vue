<script lang="ts" setup>
import type { NotificationItem } from '@vben/layouts';

import ImageViewer from '#/components/ImageViewer.vue';
import { AuthenticationLoginExpiredModal, useVbenModal } from '@vben/common-ui';
import { useWatermark } from '@vben/hooks';
import {
  BasicLayout,
  LockScreen,
  Notification,
  UserDropdown,
} from '@vben/layouts';
import { preferences } from '@vben/preferences';
import { useAccessStore, useUserStore } from '@vben/stores';
import { computed, ref, watch } from 'vue';

import { useAuthStore } from '#/store';
import { isElectron } from '#/utils/constant';
import LoginForm from '#/views/_core/authentication/login.vue';
import { Button as AButton, Space as ASpace, message } from 'ant-design-vue';

const displayWindow = ref(false);
const displayExportImages = ref(false);
const showImageViewer = ref(false);
const currentExportImagesOptions = ref({})
const imageViewerRef = ref()

const [downloadImagesModal, modalApi] = useVbenModal({
  showCancelButton: false,
  confirmText: '导出选中图片',
  async onConfirm() {
    if (imageViewerRef.value) {
      const result = await imageViewerRef.value.exportZip()
      if (result) {
        modalApi.close()
      }
    }
  },
  onOpened() {
    displayWindow.value = false
    __API__.hideWindow()
  },
  onClosed: () => {
    showImageViewer.value = false;
    displayWindow.value = true
    __API__.showWindow()
  },
});

async function exportImages() {
  const browserUrl = await __API__.getURL()
  if (!browserUrl) return browserUrl
  if (browserUrl.startsWith('https://www.52dsy.com/')) {
    export52Images()
  }
  if (browserUrl.startsWith('https://pc.jp0663.com/detail/')) {
    exportJunPuImages()
  }
}

async function exportJunPuImages() {
  const browserUrl = await __API__.getURL()
  if (!browserUrl) return
  const pruductId = new URL(browserUrl).pathname.split('/')[2];
  if (!pruductId) return
  const product = await __API__.getOneList(pruductId.toString())
  if (!product) {
    message.warn('异常错误')
    return
  }
  modalApi.open()
  showImageViewer.value = true;
  const selecterRecord = product.data
  currentExportImagesOptions.value = {
    fileName: selecterRecord.title,
    images: [
      {
        name: '主图',
        urls: Array.from(selecterRecord.data?.zhutu || []).map(url => ({ src: url, name: '' }))
      },
      {
        name: '详情图',
        urls: Array.from(selecterRecord.data?.xiangqingtu || []).map(url => ({ src: url, name: '' }))
      },
      {
        name: 'SKU图',
        urls: selecterRecord.data?.yanse || []
      }
    ]
  }
  // console.log(`🚀 ~ exportImages ~ currentExportImagesOptions.value :`, currentExportImagesOptions.value)
}


async function export52Images() {
  const browserUrl = await __API__.getURL()
  if (!browserUrl) return
  const productId = new URL(browserUrl).pathname.replace('.html', '').replace('/', '')
  const product = await __API__.getOneList(productId.toString())
  if (!product) {
    message.warn('异常错误')
    return
  }
  modalApi.open()
  showImageViewer.value = true;
  const selecterRecord = product.data
  currentExportImagesOptions.value = {
    fileName: selecterRecord.title,
    images: [
      {
        name: '主图',
        urls: Array.from(selecterRecord.data.mainImageList || []).map(url => ({ src: url, name: '' }))
      },
      {
        name: '详情图',
        urls: Array.from(selecterRecord.data.goodsPictureList || []).map(url => ({ src: url, name: '' }))
      },
      {
        name: 'SKU图',
        urls: selecterRecord.data.colorList.map((item: any) => {
          return {
            name: item.name,
            src: item.img,
          }
        })
      }
    ]
  }
  console.log(`🚀 ~ exportImages ~ currentExportImagesOptions.value :`, currentExportImagesOptions.value)
}

async function doDisplayWindow() {
  await __API__.isShow() ? __API__.hideWindow() : __API__.showWindow();
  displayWindow.value = await __API__.isShow();
  refreshExportImageButton()
}

async function refreshExportImageButton() {
  displayExportImages.value = false
  const browserUrl = await __API__.getURL()
  if (typeof browserUrl === 'string' && displayWindow.value) {
    const urls = new URL(browserUrl, location.href)
    if (urls.href.startsWith('https://pc.jp0663.com/detail/') ||
      (urls.href.startsWith('https://www.52dsy.com/') && urls.pathname.endsWith('.html'))
    ) {
      displayExportImages.value = true
    }
  }
}

setInterval(async () => {
  displayWindow.value = await __API__.isShow()
  refreshExportImageButton()
}, 500)

function loadURL(url: string) {
  __API__.loadURL(url);
}

const notifications = ref<NotificationItem[]>([
  {
    avatar: 'https://avatar.vercel.sh/vercel.svg?text=VB',
    date: '3小时前',
    isRead: true,
    message: '描述信息描述信息描述信息',
    title: '收到了 14 份新周报',
  },
]);

const userStore = useUserStore();
const authStore = useAuthStore();
const accessStore = useAccessStore();
const { destroyWatermark, updateWatermark } = useWatermark();
const showDot = computed(() =>
  notifications.value.some((item) => !item.isRead),
);

const menus = computed(() => [
  // {
  //   handler: () => {
  //     openWindow(VBEN_DOC_URL, {
  //       target: '_blank',
  //     });
  //   },
  //   icon: BookOpenText,
  //   text: $t('ui.widgets.document'),
  // },
  // {
  //   handler: () => {
  //     openWindow(VBEN_GITHUB_URL, {
  //       target: '_blank',
  //     });
  //   },
  //   icon: MdiGithub,
  //   text: 'GitHub',
  // },
  // {
  //   handler: () => {
  //     openWindow(`${VBEN_GITHUB_URL}/issues`, {
  //       target: '_blank',
  //     });
  //   },
  //   icon: CircleHelp,
  //   text: $t('ui.widgets.qa'),
  // },
]);

const avatar = computed(() => {
  return userStore.userInfo?.avatar ?? preferences.app.defaultAvatar;
});

async function handleLogout() {
  await authStore.logout(false);
}

function handleNoticeClear() {
  notifications.value = [];
}

function handleMakeAll() {
  notifications.value.forEach((item) => (item.isRead = true));
}

watch(
  () => preferences.app.watermark,
  async (enable) => {
    if (enable) {
      await updateWatermark({
        content: `${userStore.userInfo?.username}`,
      });
    } else {
      destroyWatermark();
    }
  },
  {
    immediate: true,
  },
);
</script>

<template>
  <BasicLayout @clear-preferences-and-logout="handleLogout">
    <template #user-dropdown v-if="!isElectron">
      <UserDropdown :avatar :menus :text="userStore.userInfo?.username" description="" tag-text="Pro"
        @logout="handleLogout" />
    </template>
    <template #notification>
      <Notification :dot="showDot" :notifications="notifications" @clear="handleNoticeClear"
        @make-all="handleMakeAll" />
    </template>
    <template #extra>
      <AuthenticationLoginExpiredModal v-model:open="accessStore.loginExpired" :avatar>
        <LoginForm />
      </AuthenticationLoginExpiredModal>
    </template>
    <template #lock-screen>
      <LockScreen :avatar @to-login="handleLogout" />
    </template>
    <!-- <template #aside-header>
      <div class="text-center h-[20px]">2222222222222</div>
    </template> -->
    <template #aside-header>
      <!-- <div class="flex flex-col justify-center items-center h-[80px]">
        <UserDropdown :avatar :menus :text="userStore.userInfo?.username" description="" tag-text="Pro" side="right"
          @logout="handleLogout" />
      </div> -->
    </template>
    <template #aside-footer>
      <div class="flex flex-col justify-center items-center mb-[10px]">
        <ASpace direction="vertical" class="mb-[50px]">
          <AButton @click="() => exportImages()" v-show="displayExportImages" style="width: 75px; font-size: 0.70rem;">
            导出图片
          </AButton>
        </ASpace>
        <ASpace direction="vertical">
          <AButton @click="() => loadURL('https://pc.jp0663.com')" v-show="displayWindow"
            style="width: 70px; color: #ff5502;">
            军埔
          </AButton>
          <AButton @click="() => loadURL('https://www.52dsy.com')" v-show="displayWindow"
            style="width: 70px; color: #e4393c;">
            52电商
          </AButton>
          <AButton @click="doDisplayWindow" :type="displayWindow ? 'primary' : 'text'">
            {{ displayWindow ? '隐 藏' : '选 品' }}
          </AButton>
        </ASpace>
        <downloadImagesModal class="w-[80%]" title="图片导出">
          <ImageViewer v-if="showImageViewer" ref="imageViewerRef" :options="currentExportImagesOptions"
            style="z-index: 999999999;" />
        </downloadImagesModal>
      </div>
    </template>
  </BasicLayout>
</template>
