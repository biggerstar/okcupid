import { message } from "ant-design-vue";
import { useNavigator } from "../common/use-navigator";
import { usePageLoading } from "../common/use-page-loading";
import { use52DianShang } from "../site/52-dianshang/52-dianshang";
import { useAboutBlankPage } from "../site/about-blank";
import { useJpo663Page } from "../site/jio663/jio663";

console.log('浏览器加载成功!')

useNavigator()
usePageLoading()

message.config({
  top: "120px"
})

if (location.href === 'about:blank') {
  useAboutBlankPage();
}
if (location.href.startsWith('https://pc.jp0663.com')) {
  useJpo663Page()
}
if (location.href.startsWith('https://www.52dsy.com')) {
  use52DianShang()
}

