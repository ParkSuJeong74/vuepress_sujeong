module.exports = {
  base: "/vuepress_sujeong/",
  title: "ParkSuJeong's devBlog",
  description: "Hello World!",
  email: "sujeong9158@gmail.com",
  lang: "ko-KR",
  head: [
    ["link", { rel: "icon", href: `/images/title.png` }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
  ],
  themeConfig: {
    logo: "/images/titleImage.jpg",
    repo: "ParkSuJeong74/vuepress_sujeong",
    repoLabel: "my-Repo",
    docsRepo: "ParkSuJeong74/vuepress_sujeong",
    editLinks: true,
    editLinkText: "Improve this page!",
    smoothScroll: true,
    sidebar: {
      "/study/python/": ["", "python2"],
      "/study/devOps/": ["", "devOps2"],
      "/column/": [
        "",
        //'devOps2',
      ],
      "/study/algorithm/": ["", "algorithm2"],
      "/study/dataAnalysis/": [
        "",
        //'dataAnalysis2'
      ],
      "/study/backend/": [
        "",
        //'dataAnalysis2'
      ],
    },
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Study",
        items: [
          { text: "Python", link: "/study/python/" },
          { text: "DevOps", link: "/study/devOps/" },
          { text: "Algorithm", link: "/study/algorithm/" },
          { text: "Programming", link: "/study/programming" },
          { text: "Web", link: "/study/web/" },
          { text: "Backend", link: "/study/backend/" },
          { text: "Frontend", link: "/study/frontend" },
          { text: "DataAnalysis", link: "/study/dataAnalysis/" },
          { text: "CS", link: "/study/cs/" },
        ],
      },
      { text: "Project", link: "/project/" },
      { text: "Column", link: "/column/" },
      { text: "Contact", link: "/contact/" },
    ],
  },
  plugins: [
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
    ["@vuepress/back-to-top"],
    ["@vuepress/plugin-medium-zoom"],
    //['vuepress-plugin-auto-sidebar']
  ],
  markdown: {
    lineNumbers: true,
  },
};
