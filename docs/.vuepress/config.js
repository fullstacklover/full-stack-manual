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
        sidebarDepth: -1,
        sidebar: 'auto',
        nav: [{
          text: '主页', link: '/zh/'
        },
        {
          text: 'Vue', link: '/zh/vue/'
        },
        {
          text: 'NodeJS',
          items: [
            {
              text: 'Koa', link: '/zh/nodejs/koa/introduction-framework.md'

            },
          ]
        },
        {
          text: 'C语言教程', link: '/zh/c-language-tutorial/'
        },
        {
          text: 'Go语言教程', link: '/zh/go-language-tutorial/'
        },
        {
          text: '开发工具',
          items: [
            {
              text: 'VsCode插件开发教程', link: '/zh/vscode-extension-development/'
            },
          ]
        },
        {
          text: '数据结构', link: '/zh/data-structure/'
        },
        {
          text: 'Linux教程', link: '/zh/linux-tutorial/'
        },
        {
          text: '招聘·内推', link: 'https://github.com/fullstacklover/full-stack-manual/issues/3'
        },
        {
          text: '友情链接',
          items: [
            { text: '米司博客', link: 'https://blog.misitebao.com' },
            { text: '机房钢琴师的个人博客', link: 'http://webwanghui.cn/' },
            { text: '一个捞人的语雀分享', link: 'https://www.yuque.com/luomouren/wu1op7' },
            { text: '一个捞人的个人主页', link: 'https://www.luotianyi888.cn' }
          ]
        }],
        sidebar: {
          // Go语言教程
          "/zh/go-language-tutorial/": [
            {
              // title: 'Go语言教程',
              collapsable: false,
              children: [
                { title: '学习Go语言的前景', path: '/zh/go-language-tutorial/学习Go语言的前景.md' },
                {
                  title: '开发环境搭建',
                  collapsable: false,
                  children: [
                    { title: '安装Go编译器', path: '/zh/go-language-tutorial/开发环境搭建/安装Go编译器.md' },
                  ]
                },
                {
                  title: '基本语法',
                  collapsable: false,
                  children: [
                    { title: '变量声明', path: '/zh/go-language-tutorial/基本语法/变量声明.md' },
                  ]
                }
              ]
            }],
          // VSCode 扩展开发
          "/zh/vscode-extension-development/": [
            {
              title: '插件开发文档',
              path: '/zh/vscode-extension-development/',
            }, {
              title: '术语表和说明',
              path: '/zh/vscode-extension-development/术语表和说明.md',
            },
            {
              title: '预备知识',
              collapsable: false,
              children: [
                { title: '非JS开发者的第一步', path: '/zh/vscode-extension-development/preknowledge/first-step.md' },
                { title: '认识Typescript-变量和类型', path: '/zh/vscode-extension-development/preknowledge/variable-and-type.md', },
                { title: '认识Typescript-类', path: '/zh/vscode-extension-development/preknowledge/class.md', },
                { title: '认识Typescript-接口和命名空间', path: '/zh/vscode-extension-development/preknowledge/interface-and-namespace.md', },
                { title: '认识Typescript-泛型', path: '/zh/vscode-extension-development/preknowledge/generics.md', },
                { title: '认识Typescript-声明文件', path: '/zh/vscode-extension-development/preknowledge/declaration-files.md', },
              ]
            },
            {
              title: '第一步',
              collapsable: false,
              children: [
                { title: '你的第一个插件', path: '/zh/vscode-extension-development/get-started/your-first-extension.md' },
                { title: '解析插件结构', path: '/zh/vscode-extension-development/get-started/extension-anatomy.md', },
                { title: '小结', path: '/zh/vscode-extension-development/get-started/wrapping-up.md', },
              ]
            },
            {
              title: '开发插件',
              collapsable: false,
              children: [
                { title: '测试插件', path: '/zh/vscode-extension-development/working-with-extensions/testing-extension.md' },
                { title: '发布插件', path: '/zh/vscode-extension-development/working-with-extensions/publish-extension.md' },
                { title: '打包插件', path: '/zh/vscode-extension-development/working-with-extensions/bundling-extension.md' },
                { title: '持续集成', path: '/zh/vscode-extension-development/working-with-extensions/continuous-integration.md' },
              ]
            },
            {
              title: '插件功能',
              collapsable: false,
              children: [
                { title: '概述', path: '/zh/vscode-extension-development/extension-capabilities/' },
                { title: '常用功能', path: '/zh/vscode-extension-development/extension-capabilities/common-capabilities.md' },
                { title: '主题', path: '/zh/vscode-extension-development/extension-capabilities/theming.md' },
                { title: '扩展工作台', path: '/zh/vscode-extension-development/extension-capabilities/extending-workbench.md' },
              ]
            },
            {
              title: '插件指南',
              collapsable: false,
              children: [
                { title: '概述', path: '/zh/vscode-extension-development/extension-guides/' },
                { title: '命令', path: '/zh/vscode-extension-development/extension-guides/command.md' },
                { title: '色彩主题', path: '/zh/vscode-extension-development/extension-guides/color-theme.md' },
                { title: '图标主题', path: '/zh/vscode-extension-development/extension-guides/icon-theme.md' },
                { title: '树视图', path: '/zh/vscode-extension-development/extension-guides/tree-view.md' },
                { title: 'Webview', path: 'extension-guides/webview.md' },
                { title: '虚拟文档', path: '/zh/vscode-extension-development/extension-guides/virtual-documents.md' },
                { title: '任务', path: '/zh/vscode-extension-development/extension-guides/task-provider.md' },
                { title: '源控制', path: '/zh/vscode-extension-development/extension-guides/scm-provider.md' },
                { title: '调试器插件', path: '/zh/vscode-extension-development/extension-guides/debugger-extension.md' },
                { title: 'Markdown插件', path: '/zh/vscode-extension-development/extension-guides/markdown-extension.md' },
              ]
            },
            {
              title: '语言插件',
              collapsable: false,
              children: [
                { title: '概述', path: '/zh/vscode-extension-development/language-extensions/' },
                { title: '语法高亮', path: '/zh/vscode-extension-development/language-extensions/syntax-highlight-guide.md' },
                { title: '代码片段', path: '/zh/vscode-extension-development/language-extensions/snippet-guide.md' },
                { title: '语言配置', path: '/zh/vscode-extension-development/language-extensions/language-configuration-guide.md' },
                { title: '程序性语言特性', path: '/zh/vscode-extension-development/language-extensions/programmatic-language-features.md' },
                { title: '语言服务器', path: '/zh/vscode-extension-development/language-extensions/language-server-extension-guide.md' },
              ]
            },
            {
              title: '进阶主题',
              collapsable: false,
              children: [
                { title: '插件主机', path: '/zh/vscode-extension-development/advanced-topics/extension-host.md' },
                { title: '远程开发', path: '/zh/vscode-extension-development/advanced-topics/remote-extensions.md' },
                { title: '使用不稳定的API', path: '/zh/vscode-extension-development/advanced-topics/using-proposed-api.md' },
              ]
            },
            {
              title: '参考',
              collapsable: false,
              children: [
                { title: 'VS Code API', path: '/zh/vscode-extension-development/references/vscode-api.md' },
                { title: '发布内容配置', path: '/zh/vscode-extension-development/references/contribution-points.md' },
                { title: '激活事件', path: '/zh/vscode-extension-development/references/activation-events.md' },
                { title: '插件清单', path: '/zh/vscode-extension-development/references/extension-manifest.md' },
                { title: '命令', path: '/zh/vscode-extension-development/references/commands.md' },
                { title: '主题色彩', path: '/zh/vscode-extension-development/references/theme-color.md' },
                { title: '标签中的图标', path: '/zh/vscode-extension-development/references/icons-in-labels.md' },
                { title: '文档选择器', path: '/zh/vscode-extension-development/references/document-selector.md' },
              ]
            }
          ],
          "/zh/nodejs/koa/": [
            {
              title: 'Koa',
              // path: '/zh/nodejs/koa/',
              collapsable: false,
              children: [
                { title: '框架简介', path: '/zh/nodejs/koa/introduction-framework.md' },
                { title: '快速开始', path: '/zh/nodejs/koa/quick-start.md' },
              ]
            }
          ],
        }
      },
      // '/': {
      //   selectText: 'Languages',
      //   label: 'English',
      //   repoLabel: 'Source',
      //   editLinkText: 'Edit this page on GitHub',
      //   lastUpdated: 'Last Updated',
      //   serviceWorker: {
      //     updatePopup: {
      //       message: "New content is available.",
      //       buttonText: "Refresh"
      //     }
      //   },
      //   algolia: {},
      //   sidebarDepth: 2,
      //   sidebar: 'auto',
      //   nav: [
      //     // {
      //     //   text: 'Home', link: '/'
      //     // },
      //     // {
      //     //   text: 'Development Tool',
      //     //   items: [
      //     //     {
      //     //       text: 'VsCode',
      //     //       items: [{
      //     //         text: 'Plug In Development', link: 'https://liiked.github.io/VS-Code-Extension-Doc-ZH'
      //     //       }]
      //     //     },
      //     //   ]
      //     // },
      //     // {
      //     //   text: 'Front End',
      //     //   items: [
      //     //     { text: 'Front end Foundation', link: '/dir-a/' },
      //     //     { text: 'Front end Algorithm', link: '/dir-b/' },
      //     //     { text: 'ES6+', link: '/dir-b/' },
      //     //   ]
      //     // },
      //     // {
      //     //   text: 'NodeJS', link: '/'
      //     // },
      //     // {
      //     //   text: 'Golang', link: '/'
      //     // },
      //     // {
      //     //   text: 'Database', link: '/'
      //     // },
      //     // {
      //     //   text: 'Interview Collection', link: '/'
      //     // },
      //     // {
      //     //   text: 'About', link: '/'
      //     // },
      //     // {
      //     //   text: 'Recruit·Internal recommendation', link: '/'
      //     // },
      //     // {
      //     //   text: 'Links',
      //     //   items: [
      //     //     { text: '米司博客', link: 'https://blog.misitebao.com' },
      //     //     { text: '机房钢琴师的个人博客', link: 'http://webwanghui.cn/' }
      //     //   ]
      //     // }
      //   ],
      //   sidebar: [
      //     // {
      //     //   title: 'dira',
      //     //   path: '/dir-a/',
      //     //   collapsable: false,
      //     //   children: [
      //     //     '/dir-a/file-1',
      //     //     '/dir-a/file-2',
      //     //     '/dir-a/file-3'
      //     //   ]
      //     // }, {
      //     //   title: 'dirb',
      //     //   path: '/dir-b/',
      //     //   collapsable: false,
      //     //   children: [
      //     //     '/dir-b/file-1',
      //     //     '/dir-b/file-2',
      //     //     '/dir-b/file-3']
      //     // }
      //   ],
      // },
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