import { SidebarConfig } from "vuepress";

let sidebarConfig: SidebarConfig = {
    '/algorithm/': [
        {
            text: '算法',
            children: [
                'README',
            ]
        }
    ],
    '/backend/java/': [
        {
            text: 'Java',
            children: [
                'README',
            ],
        },
    ],
    '/backend/python/': [
        {
            text: 'Python',
            children: [
                'README',
            ],
        },
    ],
    '/backend/golang/': [
        {
            text: 'Golang',
            children: [
                'README',
            ],
        },
    ],
};

export default sidebarConfig;