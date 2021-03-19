# 使用不稳定的 API

在 VS Code 中，插件 API 的兼容性非常重要，我们尽最大努力避免 API 变动以便插件开发人员已经发布的插件可以按预期工作。但是，这对使得我们束手束脚，一旦新的 API 发布后，就不可能再轻易改动。

不稳定的 API（Proposed API）则解决了这个问题，不稳定的 API 是 VS Code 已经实现但是还未公开的 API。它们只在 Insider 版的 VS Code 中可用，而且很有可能再次产生变动，你也不能在想要发布的插件中使用。不管怎样，插件开发者开始可以在本地开发时测试这些 API，然后给 VS Code 团队提供建议的，经过不断修改之后最终可能出现在稳定版中。

## 使用不稳定的 API

下面是在本地开发中测试未稳定 API 的步骤：

- 使用 VS Code 的[Insider](https://code.visualstudio.com/insiders)版本
- 在`package.json`中添加`"enableProposedApi": true`
- 把最新的[`vscode.proposed.d.ts`](https://github.com/Microsoft/vscode/blob/master/src/vs/vscode.proposed.d.ts)复制到你的项目中
