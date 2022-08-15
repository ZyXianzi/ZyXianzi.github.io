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
    '/frontend/html/': [
        {
            text: 'HTML',
            children: [
                'README.md',
            ],
        }
    ],
    '/frontend/css/': [
        {
            text: 'CSS',
            children: [
                'README.md',
            ],
        }
    ],
    '/frontend/javascript/': [
        {
            text: 'JavaScript',
            children: [
                'README.md',
            ],
        }
    ],
    '/frontend/typescript/': [
        {
            text: 'TypeScript',
            children: [
                'README.md',
            ],
        }
    ],
    '/frontend/vue/': [
        {
            text: 'Vue',
            children: [
                'README.md',
            ],
        }
    ],
    '/frontend/react/': [
        {
            text: 'React',
            children: [
                'README.md',
            ],
        }
    ],
    '/frontend/flutter/': [
        {
            text: 'Flutter',
            children: [
                'README.md',
            ],
        }
    ],
    '/frontend/tools/': [
        {
            text: '实用工具',
            children: [
                'README.md',
            ],
        }
    ],
    '/maintenance/linux/': [
        {
            text: 'Linux基础',
            children: [
                'README.md',
            ],
        }
    ],
    '/maintenance/tools/': [
        {
            text: '实用工具',
            children: [
                'README.md',
                'git.md',
            ],
        }
    ],
};

export default sidebarConfig;