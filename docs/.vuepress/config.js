module.exports = {
  base: '/',//基础路径
  head: [
    ['meta', {
      name: 'keywords',
      content: '全栈知识手册,全栈手册,大前端,前端教程,前端面试,简历,es6,nodejs,go,golang'
    }],
    ['link', {
      rel: 'shortcut icon',
      type: 'image/x-icon',
      href: '/images/favicon.ico'
    }]
  ],
  host: '0.0.0.0',
  dest: './dist',//打包输出目录
  markdown: {
    lineNumbers: true
  },
  theme: undefined,
  themeConfig: {
    logo: '/images/fullstacklover_gravatar.png',
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
        nav: [
          // {
          //   text: 'Home', link: '/book/'
          // },
          // {
          //   text: 'Development Tool',
          //   items: [
          //     {
          //       text: 'VsCode',
          //       items: [{
          //         text: 'Plug In Development', link: 'https://liiked.github.io/VS-Code-Extension-Doc-ZH'
          //       }]
          //     },
          //   ]
          // },
          // {
          //   text: 'Front End',
          //   items: [
          //     { text: 'Front end Foundation', link: '/book/dir-a/' },
          //     { text: 'Front end Algorithm', link: '/book/dir-b/' },
          //     { text: 'ES6+', link: '/book/dir-b/' },
          //   ]
          // },
          // {
          //   text: 'NodeJS', link: '/book/'
          // },
          // {
          //   text: 'Golang', link: '/book/'
          // },
          // {
          //   text: 'Database', link: '/book/'
          // },
          // {
          //   text: 'Interview Collection', link: '/book/'
          // },
          // {
          //   text: 'About', link: '/book/'
          // },
          // {
          //   text: 'Recruit·Internal recommendation', link: '/book/'
          // },
          // {
          //   text: 'Links',
          //   items: [
          //     { text: '米司博客', link: 'https://blog.misitebao.com' },
          //     { text: '机房钢琴师的个人博客', link: 'http://webwanghui.cn/' }
          //   ]
          // }
        ],
        sidebar: [
          // {
          //   title: 'dira',
          //   path: '/book/dir-a/',
          //   collapsable: false,
          //   children: [
          //     '/book/dir-a/file-1',
          //     '/book/dir-a/file-2',
          //     '/book/dir-a/file-3'
          //   ]
          // }, {
          //   title: 'dirb',
          //   path: '/book/dir-b/',
          //   collapsable: false,
          //   children: [
          //     '/book/dir-b/file-1',
          //     '/book/dir-b/file-2',
          //     '/book/dir-b/file-3']
          // }
        ],
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
                text: '插件开发文档', link: '/zh/book/development-tools/vscode/development-plugin/'
              }]
            },
          ]
        },
        // {
        //     text: 'Vue', link: '/zh/book/vue/'
        // },
        // {
        //   text: '大前端',
        //   items: [
        //     { text: '前端基础', link: '/zh/book/dir-a/' },
        //     { text: '前端算法', link: '/zh/book/dir-b/' },
        //     { text: 'ES6+', link: '/zh/book/dir-b/' },
        //   ]
        // },
        {
          text: 'NodeJS',
          items: [
            {
              text: 'Koa', link: '/zh/book/nodejs/koa/introduction-framework.md'

            },
          ]
        },
        // {
        //     text: 'Golang', link: '/zh/book/'
        // },
        // {
        //     text: '数据库', link: '/zh/book/'
        // },
        // {
        //     text: '优质仓库',
        //     items: [
        //         { text: '大前端', link: '/zh/book/dir-b/' },
        //         { text: 'Nodejs', link: '/zh/book/dir-b/' },
        //         { text: 'Golang', link: '/zh/book/dir-a/' },
        //     ]
        // },
        // {
        //     text: '面试集合', link: '/zh/book/'
        // },
        // {
        //     text: '关于', link: '/zh/book/'
        // },
        {
          text: '招聘·内推', link: 'https://github.com/fullstacklover/full-stack-manual/issues/3'
        },
        {
          text: '友情链接',
          items: [
            { text: '米司博客', link: 'https://blog.misitebao.com' },
            { text: '机房钢琴师的个人博客', link: 'http://webwanghui.cn/' }
          ]
        }],
        sidebar: {
          "/zh/book/development-tools/vscode/development-plugin/": [
            {
              title: '插件开发文档',
              path: '/zh/book/development-tools/vscode/development-plugin/',
            }, {
              title: '术语表和说明',
              path: '/zh/book/development-tools/vscode/development-plugin/术语表和说明.md',
            },
            {
              title: '预备知识',
              collapsable: false,
              children: [
                { title: '非JS开发者的第一步', path: '/zh/book/development-tools/vscode/development-plugin/preknowledge/first-step.md' },
                { title: '认识Typescript-变量和类型', path: '/zh/book/development-tools/vscode/development-plugin/preknowledge/variable-and-type.md', },
                { title: '认识Typescript-类', path: '/zh/book/development-tools/vscode/development-plugin/preknowledge/class.md', },
                { title: '认识Typescript-接口和命名空间', path: '/zh/book/development-tools/vscode/development-plugin/preknowledge/interface-and-namespace.md', },
                { title: '认识Typescript-泛型', path: '/zh/book/development-tools/vscode/development-plugin/preknowledge/generics.md', },
                { title: '认识Typescript-声明文件', path: '/zh/book/development-tools/vscode/development-plugin/preknowledge/declaration-files.md', },
              ]
            },
            {
              title: '第一步',
              collapsable: false,
              children: [
                { title: '你的第一个插件', path: '/zh/book/development-tools/vscode/development-plugin/get-started/your-first-extension.md' },
                { title: '解析插件结构', path: '/zh/book/development-tools/vscode/development-plugin/get-started/extension-anatomy.md', },
                { title: '小结', path: '/zh/book/development-tools/vscode/development-plugin/get-started/wrapping-up.md', },
              ]
            },
            {
              title: '开发插件',
              collapsable: false,
              children: [
                { title: '测试插件', path: '/zh/book/development-tools/vscode/development-plugin/working-with-extensions/testing-extension.md' },
                { title: '发布插件', path: '/zh/book/development-tools/vscode/development-plugin/working-with-extensions/publish-extension.md' },
                { title: '打包插件', path: '/zh/book/development-tools/vscode/development-plugin/working-with-extensions/bundling-extension.md' },
                { title: '持续集成', path: '/zh/book/development-tools/vscode/development-plugin/working-with-extensions/continuous-integration.md' },
              ]
            },
            {
              title: '插件功能',
              collapsable: false,
              children: [
                { title: '概述', path: '/zh/book/development-tools/vscode/development-plugin/extension-capabilities/' },
                { title: '常用功能', path: '/zh/book/development-tools/vscode/development-plugin/extension-capabilities/common-capabilities.md' },
                { title: '主题', path: '/zh/book/development-tools/vscode/development-plugin/extension-capabilities/theming.md' },
                { title: '扩展工作台', path: '/zh/book/development-tools/vscode/development-plugin/extension-capabilities/extending-workbench.md' },
              ]
            },
            {
              title: '插件指南',
              collapsable: false,
              children: [
                { title: '概述', path: '/zh/book/development-tools/vscode/development-plugin/extension-guides/' },
                { title: '命令', path: '/zh/book/development-tools/vscode/development-plugin/extension-guides/command.md' },
                { title: '色彩主题', path: '/zh/book/development-tools/vscode/development-plugin/extension-guides/color-theme.md' },
                { title: '图标主题', path: '/zh/book/development-tools/vscode/development-plugin/extension-guides/icon-theme.md' },
                { title: '树视图', path: '/zh/book/development-tools/vscode/development-plugin/extension-guides/tree-view.md' },
                { title: 'Webview', path: 'extension-guides/webview.md' },
                { title: '虚拟文档', path: '/zh/book/development-tools/vscode/development-plugin/extension-guides/virtual-documents.md' },
                { title: '任务', path: '/zh/book/development-tools/vscode/development-plugin/extension-guides/task-provider.md' },
                { title: '源控制', path: '/zh/book/development-tools/vscode/development-plugin/extension-guides/scm-provider.md' },
                { title: '调试器插件', path: '/zh/book/development-tools/vscode/development-plugin/extension-guides/debugger-extension.md' },
                { title: 'Markdown插件', path: '/zh/book/development-tools/vscode/development-plugin/extension-guides/markdown-extension.md' },
              ]
            },
            {
              title: '语言插件',
              collapsable: false,
              children: [
                { title: '概述', path: '/zh/book/development-tools/vscode/development-plugin/language-extensions/' },
                { title: '语法高亮', path: '/zh/book/development-tools/vscode/development-plugin/language-extensions/syntax-highlight-guide.md' },
                { title: '代码片段', path: '/zh/book/development-tools/vscode/development-plugin/language-extensions/snippet-guide.md' },
                { title: '语言配置', path: '/zh/book/development-tools/vscode/development-plugin/language-extensions/language-configuration-guide.md' },
                { title: '程序性语言特性', path: '/zh/book/development-tools/vscode/development-plugin/language-extensions/programmatic-language-features.md' },
                { title: '语言服务器', path: '/zh/book/development-tools/vscode/development-plugin/language-extensions/language-server-extension-guide.md' },
              ]
            },
            {
              title: '进阶主题',
              collapsable: false,
              children: [
                { title: '插件主机', path: '/zh/book/development-tools/vscode/development-plugin/advanced-topics/extension-host.md' },
                { title: '远程开发', path: '/zh/book/development-tools/vscode/development-plugin/advanced-topics/remote-extensions.md' },
                { title: '使用不稳定的API', path: '/zh/book/development-tools/vscode/development-plugin/advanced-topics/using-proposed-api.md' },
              ]
            },
            {
              title: '参考',
              collapsable: false,
              children: [
                { title: 'VS Code API', path: '/zh/book/development-tools/vscode/development-plugin/references/vscode-api.md' },
                { title: '发布内容配置', path: '/zh/book/development-tools/vscode/development-plugin/references/contribution-points.md' },
                { title: '激活事件', path: '/zh/book/development-tools/vscode/development-plugin/references/activation-events.md' },
                { title: '插件清单', path: '/zh/book/development-tools/vscode/development-plugin/references/extension-manifest.md' },
                { title: '命令', path: '/zh/book/development-tools/vscode/development-plugin/references/commands.md' },
                { title: '主题色彩', path: '/zh/book/development-tools/vscode/development-plugin/references/theme-color.md' },
                { title: '标签中的图标', path: '/zh/book/development-tools/vscode/development-plugin/references/icons-in-labels.md' },
                { title: '文档选择器', path: '/zh/book/development-tools/vscode/development-plugin/references/document-selector.md' },
              ]
            }
          ],
          "/zh/book/nodejs/koa/": [
            {
              title: 'Koa',
              // path: '/zh/book/nodejs/koa/',
              collapsable: false,
              children: [
                { title: '框架简介', path: '/zh/book/nodejs/koa/introduction-framework.md' },
                { title: '快速开始', path: '/zh/book/nodejs/koa/quick-start.md' },
              ]
            }
          ],
        }
      }
    }
  },
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    // '/': {
    //   lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
    //   title: 'Full Stack Manual',
    //   description: `Create the most complete knowledge Manual of the full stack`
    // },
    '/zh/': {
      lang: 'zh-CN',
      title: '全栈知识手册',
      description: '打造最全的全栈知识手册'
    }
  }
}