import { DefaultTheme } from "vitepress"

let sidebarConfig: DefaultTheme.SidebarMulti = {
    '/algorithm': [
        {
            text: '导读',
            collapsed: false,
            items: [
                { text: '算法是什么', link: '/algorithm/what-is-algorithm' },
                { text: '为什么学习算法', link: '/algorithm/why-to-learn' },
            ]
        }
    ],
    '/maintenance/linux': [
        {
            text: '导读',
            collapsed: false,
            items: [
                { text: 'Linux介绍', link: '/maintenance/linux/introduction'},
            ]
        },
        {
            text: '命令行的基本使用',
            collapsed: false,
            items: [
                { text: '常见文件管理命令', link: '/maintenance/linux/file-commands'}
            ]
        }
    ],
    '/tools': [
        {
            text: '导读',
            collapsed: false,
            items: [
                { text: '导读', link: '/tools/introduction' },
            ]
        },
        {
            text: 'Git',
            collapsed: false,
            items: [
                { text: 'Git基础知识', link: '/tools/git/basic-commands' },
                { text: 'Git使用规范', link: '/tools/git/develop-rule'}
            ]
        },
        {
            text: 'Docker',
            collapsed: false,
            items: [
                { text: 'Docker基本命令', link: '/tools/docker/basic-commands'},
            ]
        }
    ],
    'discussion': [
        {
            text: '导读',
            collapsed: false,
            items: [
                { text: '关于博客', link: '/discussion/about-blog' },
            ]
        }
    ]
}

export default sidebarConfig