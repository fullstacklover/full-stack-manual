module.exports = {
  base: '/',//基础路径
  head: [
    ['meta', {
      name: 'keywords',
      content: '全栈手册,全栈手册,大前端,前端教程,前端面试,面试,简历,es6,nodejs,go,golang'
    }],
    ['link', {
      rel: 'shortcut icon',
      type: 'image/x-icon',
      href: '/images/favicon.ico'
    }]
  ],
  host: '0.0.0.0',
  // dest: '../../dist',//打包输出目录
  markdown: {
    lineNumbers: true
  },
  theme: undefined,
  themeConfig: {
    logo: '/images/fullstacklover_gravatar.png',
    repo: 'https://github.com/fullstacklover/full-stack-manual', // 顶部显示的github地址
    docsRepo: 'https://github.com/fullstacklover/full-stack-manual', //文档内改进页面的仓库地址
    docsDir: 'docs', //文档目录
    docsBranch: 'master', //分支
    editLinks: true,
    search: true,
    searchMaxSuggestions: 10,
    locales: {
      '/': {
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
        // sidebar: 'auto',
        nav: [
          {
            text: '🏚️主页', link: '/'
          },
          {
            text: '🌌大前端', link: '/frontend/'
          },
          {
            text: 'NodeJS',
            items: [
              {
                text: 'Koa', link: '/nodejs/koa/introduction-framework'
              },
            ]
          },
          {
            text: '🪞C语言教程', link: '/c-language-tutorial/'
          },
          {
            text: '🥨Go语言教程', link: '/go-language-tutorial/'
          },
          {
            text: '开发工具',
            items: [
              // {
              //   text: 'VsCode插件开发教程', link: '/vscode-extension-development/README'
              // },
            ]
          },
          {
            text: '🧊数据结构', link: '/data-structure/'
          },
          {
            text: 'Linux教程', link: '/linux-tutorial/'
          },
          {
            text: '📑面试题', link: '/interview-questions/'
          },
          {
            text: '🤵招聘·内推', link: 'https://github.com/fullstacklover/full-stack-manual/issues/3'
          },
          {
            text: '友情链接',
            items: [
              { text: '米司博客', link: 'https://blog.misitebao.com' },
              { text: '机房钢琴师的个人博客', link: 'http://webwanghui.cn/' },
              { text: '一个捞人的语雀分享', link: 'https://www.yuque.com/luomouren/wu1op7' },
              { text: '一个捞人的个人主页', link: 'https://www.luotianyi888.cn' },
              { text: 'TigaTeam团队', link: 'http://tigateam.org' }
            ]
          },
          // {
          //   text: 'AAA',
          //   items: [
          //     { text: 'aaa', link: '/AAA/aaa' },
          //     { text: 'bbb', link: '/AAA/bbb' }
          //   ]
          // },
          // {
          //   text: 'BBB',
          //   items: [
          //     { text: 'aaa', link: '/BBB/aaa' },
          //     { text: 'bbb', link: '/BBB/bbb' }
          //   ]
          // },
        ],
        sidebar: {
          // '/vscode-extension-development/': [
          //   {
          //     text: 'VSCode 插件开发文档',
          //     link: '/vscode-extension-development/README',
          //   }, {
          //     text: '术语表和说明',
          //     link: '/vscode-extension-development/术语表和说明',
          //   },
          //   {
          //     text: '预备知识',
          //     collapsable: false,
          //     children: [
          //       { text: '非JS开发者的第一步', link: '/vscode-extension-development/preknowledge/first-step' },
          //       { text: '认识Typescript-变量和类型', link: '/vscode-extension-development/preknowledge/variable-and-type', },
          //       { text: '认识Typescript-类', link: '/vscode-extension-development/preknowledge/class', },
          //       { text: '认识Typescript-接口和命名空间', link: '/vscode-extension-development/preknowledge/interface-and-namespace', },
          //       { text: '认识Typescript-泛型', link: '/vscode-extension-development/preknowledge/generics', },
          //       { text: '认识Typescript-声明文件', link: '/vscode-extension-development/preknowledge/declaration-files', },
          //     ]
          //   },
          //   {
          //     text: '第一步',
          //     collapsable: false,
          //     children: [
          //       { text: '你的第一个插件', link: '/vscode-extension-development/get-started/your-first-extension' },
          //       { text: '解析插件结构', link: '/vscode-extension-development/get-started/extension-anatomy', },
          //       { text: '小结', link: '/vscode-extension-development/get-started/wrapping-up', },
          //     ]
          //   },
          //   {
          //     text: '开发插件',
          //     collapsable: false,
          //     children: [
          //       { text: '测试插件', link: '/vscode-extension-development/working-with-extensions/testing-extension' },
          //       { text: '发布插件', link: '/vscode-extension-development/working-with-extensions/publish-extension' },
          //       { text: '打包插件', link: '/vscode-extension-development/working-with-extensions/bundling-extension' },
          //       { text: '持续集成', link: '/vscode-extension-development/working-with-extensions/continuous-integration' },
          //     ]
          //   },
          //   {
          //     text: '插件功能',
          //     collapsable: false,
          //     children: [
          //       { text: '概述', link: '/vscode-extension-development/extension-capabilities/' },
          //       { text: '常用功能', link: '/vscode-extension-development/extension-capabilities/common-capabilities' },
          //       { text: '主题', link: '/vscode-extension-development/extension-capabilities/theming' },
          //       { text: '扩展工作台', link: '/vscode-extension-development/extension-capabilities/extending-workbench' },
          //     ]
          //   },
          //   {
          //     text: '插件指南',
          //     collapsable: false,
          //     children: [
          //       { text: '概述', link: '/vscode-extension-development/extension-guides/' },
          //       { text: '命令', link: '/vscode-extension-development/extension-guides/command' },
          //       { text: '色彩主题', link: '/vscode-extension-development/extension-guides/color-theme' },
          //       { text: '图标主题', link: '/vscode-extension-development/extension-guides/icon-theme' },
          //       { text: '树视图', link: '/vscode-extension-development/extension-guides/tree-view' },
          //       { text: 'Webview', link: 'extension-guides/webview' },
          //       { text: '虚拟文档', link: '/vscode-extension-development/extension-guides/virtual-documents' },
          //       { text: '任务', link: '/vscode-extension-development/extension-guides/task-provider' },
          //       { text: '源控制', link: '/vscode-extension-development/extension-guides/scm-provider' },
          //       { text: '调试器插件', link: '/vscode-extension-development/extension-guides/debugger-extension' },
          //       { text: 'Markdown插件', link: '/vscode-extension-development/extension-guides/markdown-extension' },
          //     ]
          //   },
          //   {
          //     text: '语言插件',
          //     collapsable: false,
          //     children: [
          //       { text: '概述', link: '/vscode-extension-development/language-extensions/' },
          //       { text: '语法高亮', link: '/vscode-extension-development/language-extensions/syntax-highlight-guide' },
          //       { text: '代码片段', link: '/vscode-extension-development/language-extensions/snippet-guide' },
          //       { text: '语言配置', link: '/vscode-extension-development/language-extensions/language-configuration-guide' },
          //       { text: '程序性语言特性', link: '/vscode-extension-development/language-extensions/programmatic-language-features' },
          //       { text: '语言服务器', link: '/vscode-extension-development/language-extensions/language-server-extension-guide' },
          //     ]
          //   },
          //   {
          //     text: '进阶主题',
          //     collapsable: false,
          //     children: [
          //       { text: '插件主机', link: '/vscode-extension-development/advanced-topics/extension-host' },
          //       { text: '远程开发', link: '/vscode-extension-development/advanced-topics/remote-extensions' },
          //       { text: '使用不稳定的API', link: '/vscode-extension-development/advanced-topics/using-proposed-api' },
          //     ]
          //   },
          //   {
          //     text: '参考',
          //     collapsable: false,
          //     children: [
          //       { text: 'VS Code API', link: '/vscode-extension-development/references/vscode-api' },
          //       { text: '发布内容配置', link: '/vscode-extension-development/references/contribution-points' },
          //       { text: '激活事件', link: '/vscode-extension-development/references/activation-events' },
          //       { text: '插件清单', link: '/vscode-extension-development/references/extension-manifest' },
          //       { text: '命令', link: '/vscode-extension-development/references/commands' },
          //       { text: '主题色彩', link: '/vscode-extension-development/references/theme-color' },
          //       { text: '标签中的图标', link: '/vscode-extension-development/references/icons-in-labels' },
          //       { text: '文档选择器', link: '/vscode-extension-development/references/document-selector' },
          //     ]
          //   }
          // ],
          // '/AAA/': [
          //   {
          //     text: 'AAAAAAAAAA',
          //     // path: '/AAA/',
          //     collapsable: true,
          //     children: [
          //       { text: "aaaaaa", link: "/AAA/aaa" },
          //       { text: "bbbbbb", link: "/AAA/bbb" }
          //     ]
          //   }
          // ],
          // '/BBB/': [
          //   {
          //     text: 'BBBBBBBBBB',
          //     // path: '/BBB/',
          //     collapsable: true,
          //     children: [
          //       { text: "aaaaaa", link: "/BBB/aaa" },
          //       { text: "bbbbbb", link: "/BBB/bbb" }
          //     ]
          //   }
          // ],
        }
      },
      '/en/': {
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
        // sidebar: 'auto',
        nav: [
          {
            text: 'Home', link: '/en/'
          },
          {
            text: 'AAA',
            items: [
              { text: 'aaa', link: '/en/AAA/aaa' },
              { text: 'bbb', link: '/en/AAA/bbb' }
            ]
          },
          {
            text: 'BBB',
            items: [
              { text: 'aaa', link: '/en/BBB/aaa' },
              { text: 'bbb', link: '/en/BBB/bbb' }
            ]
          },
        ],
        sidebar: {
          '/en/AAA/': [
            {
              text: 'AAAAAAAAAA',
              path: '/en/AAA/',
              collapsable: true,
              children: [
                { text: "aaaaaa", link: "/en/AAA/aaa" },
                { text: "bbbbbb", link: "/en/AAA/bbb" }
              ]
            }
          ],
          '/en/BBB/': [
            {
              text: 'BBBBBBBBBB',
              path: '/en/BBB/',
              collapsable: true,
              children: [
                { text: "aaaaaa", link: "/en/BBB/aaa" },
                { text: "bbbbbb", link: "/en/BBB/bbb" }
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
    '/': {
      lang: 'zh-CN',
      text: '全栈手册',
      description: '全栈手册'
    },
    '/en/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      text: 'Full Stack Manual',
      description: `Full Stack Manual`
    }
  }
}
