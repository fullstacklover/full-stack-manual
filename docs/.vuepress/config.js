module.exports = {
    base: '/',//基础路径
    head: [
        ['meta', {
            name: 'keywords',
            content: '全栈知识手册,全栈手册,大前端,前端教程,前端面试,简历,es6,nodejs,go,golang'
        }]
    ],
    host: '0.0.0.0',
    dest: './dist',//打包输出目录
    markdown: {
        lineNumbers: true
    },
    theme: undefined,
    themeConfig: {
        logo: '/images/misitebao.png',
        repo: 'https://github.com/fullstacklover/full-stack-manual',
        docsRepo: 'https://github.com/fullstacklover/full-stack-manual',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        locales: {
            '/': {
                selectText: 'Languages',
                label: 'English',
                repoLabel: 'Source',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
                algolia: {},
                sidebarDepth: 2,
                sidebar: 'auto',
                nav: [{
                    text: 'Home', link: '/book/'
                },
                {
                    text: 'Development Tool',
                    items: [
                        {
                            text: 'VsCode',
                            items: [{
                                text: 'Plug In Development', link: 'https://liiked.github.io/VS-Code-Extension-Doc-ZH'
                            }]
                        },
                    ]
                },
                {
                    text: 'Front End',
                    items: [
                        { text: 'Front end Foundation', link: '/book/dir-a/' },
                        { text: 'Front end Algorithm', link: '/book/dir-b/' },
                        { text: 'ES6+', link: '/book/dir-b/' },
                    ]
                },
                {
                    text: 'NodeJS', link: '/book/'
                },
                {
                    text: 'Golang', link: '/book/'
                },
                {
                    text: 'Database', link: '/book/'
                },
                {
                    text: 'Interview Collection', link: '/book/'
                },
                {
                    text: 'About', link: '/book/'
                },
                {
                    text: 'Recruit·Internal recommendation', link: '/book/'
                },
                {
                    text: 'Links',
                    items: [
                        { text: '米司博客', link: 'https://blog.misitebao.com' },
                        { text: '机房钢琴师的个人博客', link: 'http://webwanghui.cn/' }
                    ]
                }],
                sidebar: [{
                    title: 'dira',
                    path: '/book/dir-a/',
                    collapsable: false,
                    children: [
                        '/book/dir-a/file-1',
                        '/book/dir-a/file-2',
                        '/book/dir-a/file-3'
                    ]
                }, {
                    title: 'dirb',
                    path: '/book/dir-b/',
                    collapsable: false,
                    children: [
                        '/book/dir-b/file-1',
                        '/book/dir-b/file-2',
                        '/book/dir-b/file-3']
                }],
            },
            '/zh/': {
                // 多语言下拉菜单的标题
                selectText: '选择语言',
                // 该语言在下拉菜单中的标签
                label: '简体中文',

                repoLabel: '查看源码',
                // 以下为可选的编辑链接选项
                // 默认为 "Edit this page"
                editLinkText: '帮助我们改善此页面！',
                // 最后更新时间
                lastUpdated: '最后更新时间',
                // Service Worker 的配置
                serviceWorker: {
                    updatePopup: {
                        message: "发现新内容可用.",
                        buttonText: "刷新"
                    }
                },
                // 当前 locale 的 algolia docsearch 选项
                algolia: {},
                sidebarDepth: 2,
                sidebar: 'auto',
                nav: [{
                    text: '主页', link: '/zh/book/'
                },
                {
                    text: '开发工具',
                    items: [
                        {
                            text: 'VsCode',
                            items: [{
                                text: '插件开发中文文档', link: 'https://liiked.github.io/VS-Code-Extension-Doc-ZH'
                            }]
                        },
                    ]
                },
                {
                    text: 'Vue', link: '/zh/book/vue/'
                },
                {
                    text: '大前端',
                    items: [
                        { text: '前端基础', link: '/zh/book/dir-a/' },
                        { text: '前端算法', link: '/zh/book/dir-b/' },
                        { text: 'ES6+', link: '/zh/book/dir-b/' },
                    ]
                },
                {
                    text: 'NodeJS', link: '/zh/book/'
                },
                {
                    text: 'Golang', link: '/zh/book/'
                },
                {
                    text: '数据库', link: '/zh/book/'
                },
                {
                    text: '优质仓库',
                    items: [
                        { text: '大前端', link: '/zh/book/dir-b/' },
                        { text: 'Nodejs', link: '/zh/book/dir-b/' },
                        { text: 'Golang', link: '/zh/book/dir-a/' },
                    ]
                },
                {
                    text: '面试集合', link: '/zh/book/'
                },
                {
                    text: '关于', link: '/zh/book/'
                },
                {
                    text: '招聘·内推', link: '/zh/book/'
                },
                {
                    text: '友情链接',
                    items: [
                        { text: '米司博客', link: 'https://blog.misitebao.com' },
                        { text: '机房钢琴师的个人博客', link: 'http://webwanghui.cn/' }
                    ]
                }],
                sidebar: [{
                    title: '目录A',
                    path: '/zh/book/dir-a/',
                    collapsable: false,
                    children: [
                        '/zh/book/dir-a/file-1',
                        '/zh/book/dir-a/file-2',
                        '/zh/book/dir-a/file-3'
                    ]
                },
                {
                    title: '目录B',
                    path: '/zh/book/dir-b/',
                    collapsable: false,
                    children: [
                        '/zh/book/dir-b/file-1',
                        '/zh/book/dir-b/file-2',
                        '/zh/book/dir-b/file-3']
                }],
            }
        }
    },
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
            title: 'Full Stack Manual',
            description: `Create the most complete knowledge Manual of the full stack`
        },
        '/zh/': {
            lang: 'zh-CN',
            title: '米司全栈知识手册',
            description: '打造最全的全栈知识手册'
        }
    }
}