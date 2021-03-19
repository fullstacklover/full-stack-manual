# Markdown 插件

Markdown 插件可以帮你扩展和加强 VS Code 内置的 Markdown 预览，包括改变预览的样式、添加新的 Markdown 语法。

## 用 CSS 改变 Mark 预览样式

---

配置 CSS 可以改变 mark 预览的布局和样式，在你的插件`pacakge.json`中注册`markdown.previewStyles`即可：

```json
"contributes": {
    "markdown.previewStyles": [
        "./style.css"
    ]
}
```

`markdown.previewStyles`类型是插件根目录下的文件列表。

配置的样式会在用户的`"markdown.styles"`之前，内置 Markdown 预览样式之后加载。

[Markdown Preview GitHub Styling](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-preview-github-styles)是一个如何将 Markdown 预览变成像 GitHub 渲染风格的好例子，在 GitHub 上去查看[源码](https://github.com/mjbvz/vscode-github-markdown-preview-style)吧

## 使用 markdown-it 插件添加新语法

---

VS Code Markdown 预览支持[CommonMark 规格](https://spec.commonmark.org/)，插件可以通过一个[markdown-it 插件](https://github.com/markdown-it/markdown-it#syntax-extensions)添加新的 Markdown 语法。

首先，在你的插件`package.json`中配置`"markdown.markdownItPlugins"`：

```json
"contributes": {
    "markdown.markdownItPlugins": true
}
```

然后在插件的主`activation`函数中，返回一个包含名`extendMarkdownIt`函数的对象。这个函数接收一个 markdown-it 实例，然后必须返回出新的 markdown-it 实例：

```typescript
import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  return {
    extendMarkdownIt(md: any) {
      return md.use(require("markdown-it-emoji"));
    },
  };
}
```

若想配置多个 markdown-it 插件，只需多次链式调用`use`声明即可。

```typescript
return md.use(require("markdown-it-emoji")).use(require("markdown-it-hashtag"));
```

Markdown 预览第一次显示时，配置了 markdown-it 的插件会变成懒加载激活。

[markdown-emoji](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-emoji)插件展示了如何使用 markdown-it 添加 emoji 支持，你可以在 GitHub 上查看 Emoji 插件的[源码](https://github.com/mjbvz/vscode-markdown-emoji)。

你可能还想了解：

- markdown-it 插件开发者[指南](https://github.com/markdown-it/markdown-it/blob/master/docs/development.md)
- [现成的 markdown-it 插件](https://www.npmjs.com/browse/keyword/markdown-it-plugin)

## 用脚本添加进阶功能

---

对于进阶特性，在插件中配置可运行的脚本：

```json
"contributes": {
    "markdown.previewScripts": [
        "./main.js"
    ]
}
```

配置的脚本是异步加载的，每次内容变动还会重载。

[Markdown Preview Mermaid Support](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid)插件展示了如何使用脚本添加[鱼骨图](https://knsv.github.io/mermaid/index.html)和流程图预览。在[这里](https://github.com/mjbvz/vscode-markdown-mermaid)查看插件源码。
