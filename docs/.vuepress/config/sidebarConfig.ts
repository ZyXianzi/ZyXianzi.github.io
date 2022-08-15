import { SidebarConfig } from "vuepress";

let sidebarConfig: SidebarConfig = {
    '/algorithm/': [
        {
            text: '算法',
            children: [
                'README.md',
            ]
        }
    ],
    '/backend/java/': [
        {
            text: 'Java',
            children: [
                'README.md',
            ],
        },
    ],
    '/backend/python/': [
        {
            text: 'Python',
            children: [
                'README.md',
            ],
        },
    ],
    '/backend/golang/': [
        {
            text: 'Golang',
            children: [
                'README.md',
            ],
        },
    ],
};

export default sidebarConfig;