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
                { text: 'Git基础知识', link: '/tools/git' },
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