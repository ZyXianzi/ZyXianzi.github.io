import { defineUserConfig } from 'vuepress';
import { defaultTheme } from 'vuepress';

export default defineUserConfig({
  lang: 'zh-CN',
  title: '紫芋仙子的秘密基地',
  description: "ZyXianzi's blog",
  base: '/blog/',
  theme: defaultTheme({
    repo: 'ZyXianzi/blog',
    repoLabel: 'Github',
  }),
})
