let navConfig = [
    { text: '首页', link: '/' },
    { text: '算法', link: '/algorithm/' },
    { text: '前端', children: [
      { text: 'HTML', link: '/frontend/html/' },
      { text: 'CSS', link: '/frontend/css/' },
      { text: 'JavaScript', link: '/frontend/javascript/' },
      { text: 'TypeScript', link: '/frontend/typescript/' },
      { text: 'Vue', link: '/frontend/vue/' },
      { text: 'React', link: '/frontend/react/' },
      { text: 'Flutter', link: '/frontend/flutter/' },
    ]},
    { text: '后端', children: [
      { text: 'Golang', link: '/backend/golang/' },
      { text: 'Java', link: '/backend/java/' },
      { text: 'Python', link: '/backend/python/' },
    ]},
    { text: '运维', children: [
      { text: 'Linux基础', link: '/maintenance/linux/' },
      { text: '实用工具', link: '/maintenance/tools/' },
    ]},
  ];
export default navConfig;