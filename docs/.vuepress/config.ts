import { defineUserConfig } from 'vuepress';
import { defaultTheme } from 'vuepress';

import navConfig from './config/navConfig';
import pluginConfig from './config/pluginConfig';
import sidebarConfig from './config/sidebarConfig';

export default defineUserConfig({
  lang: 'zh-CN',
  title: '紫芋仙子的秘密基地',
  description: "ZyXianzi's blog",
  base: '/blog/',
  plugins: pluginConfig,
  theme: defaultTheme({
    navbar: navConfig,
    sidebar: sidebarConfig,
    repo: 'ZyXianzi/blog',
    repoLabel: 'Github',
  }),
})
