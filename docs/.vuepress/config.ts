import { defineUserConfig } from 'vuepress';
import { defaultTheme } from 'vuepress';

export default defineUserConfig({
  lang: 'zh-CN',
  title: '紫芋仙子的秘密基地',
  description: "ZyXianzi's blog",
  base: '/blog/',
  theme: defaultTheme({
    home: '/blog/',
    repo: 'ZyXianzi/blog',
    repoLabel: 'Github',
    sidebar: [
      '/README.md',
      '/22-08-08.md',
    ],
  }),
})
