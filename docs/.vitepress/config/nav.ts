import { DefaultTheme } from "vitepress"

let navConfig: DefaultTheme.NavItem[] = [
    { text: '算法', link: '/algorithm/what-is-algorithm', activeMatch: '/algorithm/' },
    {
        text: '运维',
        items: [
            { text: 'Linux基础', link: '/maintenance/linux/introduction' },
        ],
        activeMatch: '/maintenance',
    },
    { text: '开发工具', link: '/tools/introduction', activeMatch: '/toots/' },
    { text: '杂谈', link: '/discussion/about-blog', activeMatch: '/discussion/'}
]

export default navConfig