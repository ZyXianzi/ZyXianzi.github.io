import { defineConfig } from 'vitepress'
import navConfig from './config/nav'
import sidebarConfig from './config/sidebar'

export default defineConfig({
    lang: 'zh-CN',
    title: '紫芋仙子的秘密博客',
    titleTemplate: false,
    description: 'Just playing around.',

    lastUpdated: true,
    cleanUrls: true,

    themeConfig: {
        nav: navConfig,
        sidebar: sidebarConfig,

        lastUpdatedText: '最后更新',
        docFooter: {
            prev: '上一篇',
            next: '下一篇',
        },
        returnToTopLabel: '返回顶部',
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2023 紫芋仙子 All Rights Reserved'
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/ZyXianzi' },
        ]
    }
});