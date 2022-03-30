module.exports = {
    title: 'ParkSuJeong\'s devBlog',
    description: 'Hello World!',
    email: 'sujeong9158@gmail.com',
    lang: 'ko-KR',
    head: [
        ['link', {rel: 'icon', href: `/images/title.png`}],
        ['link', {rel: 'manifest', href: '/manifest.json'}],
    ],
    themeConfig: {
        repo: "ParkSuJeong74/vuepress_parksujeong",
        repoLabel: 'my-Github',
        docsRepo: 'ParkSuJeong74/vuepress_parksujeong',
        editLinks: true,
        editLinkText: 'Improve this page!',
        nav: [{
                text: 'Study',
                items: [
                    { text: 'Python-Algorithm', link: '/algorithm'},
                    { text: 'DataAnalysis', link: '/dataAnalysis'},
                    { text: 'DevOps', link: '/devOps'},
                    { text: 'CS', link: '/cs'},
                ]
            },
            { text: 'Tags', link: '/_tags/' },
            { text: 'Contact', link: '/contact/' }
        ]
    },
    plugins: [
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: true
        }],
        ['@vuepress/back-to-top'],
        ['@vuepress/plugin-medium-zoom']
    ],
    markdown: {
        lineNumbers: true
    }
}