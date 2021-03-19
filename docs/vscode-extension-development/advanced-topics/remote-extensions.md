# 支持远程开发

[VS Code 远程开发](https://code.visualstudio.com/docs/remote/remote-overview)允许你无缝在远程机器上开发代码。有了这项支持后，你就可以完全使用 VS Code 本地插件和你熟悉的方式远程工作了。

本节会介绍远程开发相关的知识，[VS Code 远程开发 插件架构](#架构和插件类型)，在远程目录[测试插件](#测试和调试插件)，和[远程插件不能正常工作](#常见问题)的一些建议。大部分插件不需要改动就能适应远程开发环境，其他的插件也只要稍微改动一点就能适配远程开发了。

## 架构和插件类型

---

为了使远程开发尽力透明化，便于理解，我们可以将插件分为两类：

- **UI 插件：** 这些插件可以配置 VS Code 的用户界面，而且只运行在用户的本地机器上。UI 插件不能直接访问工作区的文件，或者在工作区的机器上运行脚本/工具。这类插件如：主题、代码片段、语言语法、快捷键映射。
- **工作区插件：** 这类插件运行在工作区所在机器上。当运行在本地时，*工作区插件*运行在本地机器上；在远程项目中，工作区插件运行在远程机器上。工作区插件可以访问工作区的文件并提供富文本支持和多语言服务器，调试和其他复杂的操作（也包含被脚本/工具调起的文件）。不过工作区插件在自定义 UI 上稍有限制，你可以配置的 UI 组件有资源管理器，视图容器等其他 UI 组件。

当一个用户安装了一个插件，VS Code 会基于插件类型自动将插件安装到正确的环境中去：UI 插件运行在 VS Code 的[本地插件主机](/advanced-topics/extension-host.md)中，工作区插件则运行在一个非常小的**VS Code 服务器**的**远程插件主机**中。当你打开一个 Windows Subsystem for Linux(WSL)、容器、或者远程 SSH 主机时这个服务会自动安装（更新）。VS Code 还会自动管理这个服务的启停，所以用户根本意识不到它的存在。

![architecture](https://code.visualstudio.com/assets/api/advanced-topics/remote-extensions/architecture.png)

VS Code API 会自动运行在正确的机器上（不管是本地还是远程）。但是如果你的插件使用的 api 不是 VS Code 提供的——比如运行 shell 脚本的 Node API——当运行在远程时可能不会正常工作，因此我们建议你在所有的环境中测试一下你的插件。

## 测试和调试插件

---

这个部分将说明如何在远程目录下测试和调试插件。在这之前，我们先看一下怎么使用本地[开发容器](https://code.visualstudio.com/docs/remote/containers)测试一个插件。本地测试容器是跨平台的，很容易部署，但是限制了访问文件系统的端口。由于只占用了非常小的 OS 空间，开发容器可以提供最为接近插件的真实运行环境。WSL，换句话说，就是一个典型的最小自治 SSH 主机。大部分场景下，你只要做小小的调整就可以解决问题了，相关主题查看[常见问题](#常见问题)。

#### 安装开发版插件

目前，VS Code 自动在 SSH 主机、容器、WSL 安装插件时会使用插件市场的版本(而不是你本机上当前安装的版本)。大部分时候这么做事合理的，但是我们现在可能需要一个未发布的版本来测试，所以你可以将插件打包成`VSIX`格式，然后打开已经连接到远程 VS Code 窗口中手动安装这个插件。

遵循以下步骤：

1. 如果这个插件已经发布，你需要将配置文件`setting.json`设置成`"extensions.autoUpdate": false`，阻止插件自动更新到插件市场的最新版本。
2. 下一步，使用`vsce package`将你的插件打包成 VSIX
3. 连接到[开发容器](https://code.visualstudio.com/docs/remote/containers)、[SSH 主机](https://code.visualstudio.com/docs/remote/ssh)或[WSL 环境](https://code.visualstudio.com/docs/remote/wsl)
4. 在你已经连接远程目录的项目中，使用命令 **Install from VSIX...**安装你打包好的插件
5. 完成后重启

?> **小提示：**安装完毕后，你可以使用 **Developer: Show Running Extensions**命令查看 VS Code 在本地运行插件还是在远程运行插件的。

#### 在远程调试你的插件

通常，你在本地机器上构建、编辑、加载和调试你的插件，远程调试插件也差不多遵循相同的模式，你只要把这些工作全部放在打开的远程开发目录去做就好了。

##### 使用开发容器

遵循以下步骤开发和调试容器中的插件。

1. 添加 Node.js 开发容器定义。在你的插件文件夹下按`F1`，选择 **Remote-Containers: Create Configuration File...** 命令，然后选择 **Node.js 8 & Typescript**（或者只是 Node.js 8）。这就定义了你将会编辑和调试的插件容器。
2. 命令运行后，你可以自由修改`.devcontainer`文件夹，添加比如构建或运行时的其他选项。深入[容器](https://code.visualstudio.com/docs/remote/containers)了解更多内容。
3. **【可选】** 编辑`launch.json`在`args`属性后面添加第二个参数，指向你的容器中的工作区目录下的测试项目/测试数据。比如，如果你的测试数据在工作区的一个`data`文件夹下，需要按照如下步骤添加`${workspaceFolder}/data`:

> 注意：你**不可以**单独使用`${workspaceFolder}`作为第二个参数

```json
{
  "name": "Launch Extension",
  "type": "extensionHost",
  "request": "launch",
  "runtimeExecutable": "${execPath}",
  "args": [
    "--extensionDevelopmentPath=${workspaceFolder}",
    "${workspaceFolder}/data"
  ],
  "stopOnEntry": false,
  "sourceMaps": true,
  "outFiles": ["${workspaceFolder}/dist/**/*.js"],
  "preLaunchTask": "npm"
}
```

4. 运行 **Remote-Containers: Reopen Folder in Container**，VS Code 会部署好容器，然后建立连接。现在你可以从容器内部修改源码了。
5. 最后，按下`F5`或者使用 **调试视图**从容器内部加载然后启动调试器。

##### 使用 SSH 或 WSL

你在 [SSH 主机](https://code.visualstudio.com/docs/remote/ssh) 或 [WSL](https://code.visualstudio.com/docs/remote/wsl) 中遵循类似的步骤。

1. 使用 SSH，你需要在远程主机上打开对应的项目（比如，使用 **Remote-SSH: Connect to Host...** 命令，然后在 **File > Open**打开对应的插件副本）。使用 WSL，使用 **File > New WSL Window**然后 **File > Open**打开对应文件夹。
2. 通过 SSH 主机/WSL 打开文件夹后，你可以像在本地一样编辑源码了。
3. 最后，按下 `F5` 或者使用 **调试视图**加载插件，像本地一样调试代码。

## 常见问题

---

VS Code API 会根据项目自动运行在正确的环境上。记住这点，然后我们来看看几个 API，它会帮助你避免一些意外问题。

#### 不正确的执行环境

如果你的插件出错了，它有可能是运行在了错误环境中。比较常见的场景是，你原本期望它运行在本地却运行在了远程上。你可以使用命令面板的 **Developer: Show Running Extensions**命令查看插件的运行情况。

如果这个命令显示某个 UI 插件被当做工作区插件或者类似的情况，你可以试着在插件的`package.json`中设置`extensionKind`属性：

```json
{
  "extensionKind": "ui"
}
```

- `"extensionKind": "ui"` —— 将插件视为 UI 插件，强制在本地运行。
- `"extensionKind": "ui"` —— 将插件视为 工作区插件，它有可能会在远程工作区的 VS Code Server 中运行。

你也可以在[设置](https://code.visualstudio.com/docs/getstarted/settings)中修改 `remote.extensionKind`插件的类型，这项配置可以立竿见影地看到效果。比如，你想把 [Azure Cosmos DB](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-cosmosdb)插件强制设置为 UI 插件（默认是工作区插件）然后把[Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)设置为工作区插件（默认是 UI 插件），你可以这么设置：

```json
{
  "remote.extensionKind": {
    "ms-azuretools.vscode-cosmosdb": "ui",
    "msjsdiag.debugger-for-chrome": "workspace"
  }
}
```

使用 `remote.extensionKind`可以快速地测试发行版插件，而不用修改插件的`package.json`或重新构建插件。

#### 保存插件数据或状态

有的时候，你的插件需要保留住不属于`settings.json`的数据或者独立的工作区配置文件（如`.eslintrc`），你可以使用插件激活入口的`vscode.ExtensionContext`对象。如果你的插件已经使用好了这些属性那就应该不会出错。

但是，你的插件如果依赖 VS Code 的路径约定（如 `~/.vscode`）或者特定的 OS 目录（比如 Linux 上的 `~/.config/Code`）来保存数据，那你就可能会遇到问题。不过还好这些小问题只要稍加修改插件就能处理掉。

如果你只是想保存一些键值对全局状态信息，你可以使用`vscode.ExtensionContext.workspaceState`或`vscode.ExtensionContext.globalState`。如果数据不止键值对且更为复杂，访问`globalStoragePath`和`storagePath`可以安全地获取对应的储存路径，供你读写文件。

这些 API 在 1.31 版本之后可用，你需要在`package.json`中配置版本：

```json
{
  "engines": {
    "vscode": "^1.31.0"
  }
}
```

如何使用我们上面介绍的 API:

```typescript
import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "myAmazingExtension.persistWorkspaceData",
      () => {
        // 如果插件所属的工作区不存在储存路径，则创建一个
        if (!fs.existsSync(context.storagePath)) {
          fs.mkdirSync(context.storagePath);
        }

        // 将文件写入储存目录
        fs.writeFileSync(
          path.join(context.storagePath, "workspace-data.json"),
          JSON.stringify({ now: Date.now() })
        );
      }
    )
  );

  context.subscriptions.push(
    vscode.commands.registerCommand(
      "myAmazingExtension.persistGlobalData",
      () => {
        // 如果插件所属的全局（跨工作区）文件夹不存在则创建一个
        if (!fs.existsSync(context.globalStoragePath)) {
          fs.mkdirSync(context.globalStoragePath);
        }

        // 为插件创建一个全局储存文件
        fs.writeFileSync(
          path.join(context.globalStoragePath, "global-data.json"),
          JSON.stringify({ now: Date.now() })
        );
      }
    )
  );
}
```

#### 保留密钥

如果你的插件需要保留密码或者其他密钥，你可能会想到使用本地操作系统的密钥储存功能（Windows Cert Store、 macOS KeyChain、Linux 的 `libsecret`-based keyring），而不是使用远程主机的储存功能。更有可能的是，你可能需要在 Linux 上使用`libsecret`，在插件中使用`gnome-keyring`去储存你的密钥，通常来说，这项功能在服务端或者容器内不一定能运作起来。

VS Code 本身不提供密钥储存机制，不过需要插件作者会转而使用[`keytar` node module](https://www.npmjs.com/package/keytar)包。因此，VS Code 内建了`keytar`，你在 _工作区插件_ 中如果使用了它，它就会自动无声地运行在后台。这样一来你就可以使用本地系统的 keychain/ keyring/ cert store 同时还避免了各种问题。

比如：

```typescript
import * as vscode from "vscode";

function getCoreNodeModule(moduleName) {
  try {
    return require(`${vscode.env.appRoot}/node_modules.asar/${moduleName}`);
  } catch (err) {}
  try {
    return require(`${vscode.env.appRoot}/node_modules/${moduleName}`);
  } catch (err) {}
  return undefined;
}

// Use it
const keytar = getCoreNodeModule("keytar");
await keytar.setPassword("my-service-name", "my-account", "iamal337d00d");
const password = await keytar.getPassword("my-service-name", "my-account");
```

#### 使用剪贴板

由于历史原因，大部分插件作者会使用诸如`clipboardy`等 Node.js 的包和剪贴板交互。不幸的的是，如果你使用了这样的包，那么它就很有可能会运行在远程机器上。

VS Code 1.30 引入的剪贴板则解决了这个问题。它总是运行在本地中，所以同样的，你只要修改你的`engines.vscode`版本就可以使用这个 API 了。

在插件中使用剪贴板 API：

```typescript
import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "myAmazingExtension.clipboardIt",
      async () => {
        // 读取剪贴板
        const text = await vscode.env.clipboard.readText();

        // 写入剪贴板
        await vscode.env.clipboard.writeText(
          `It looks like you're copying "${text}". Would you like help?`
        );
      }
    )
  );
}
```

#### 在本地浏览器或者其他应用中打开些什么

在本地的场景下，通过使用子进程或者`opn`包启动浏览器或者其他应用是完全可行的，但是一旦插件运行到了远程上，这就会导致应用加载错误。VS Code 远程开发**部分**兼容了`opn`包使得现有插件可以正常运行。你可以使用 URI 调用这个包，VS Code 会带上这个 URL 在客户端唤起默认应用。由于不是完整实现，有些配置是不支持的，也不会返回`child_process`对象。

除了依赖第三方包，我们建议你使用`vscode.env.openExternal`方法在本地操作系统上启动默认应用打开对应的 URI。而且`vscode.env.openExternal`**还支持自动端口转发**！你可以指向到远程的 web server 上，即使那个端口外部不可访问。

这项功能自 1.31 开始支持，所以你又要修改你的`engines.vscode`了。

如何使用`vscode.env.openExternal`API：

```typescript
import * as vscode from "vscode";

export async function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("myAmazingExtension.openExternal", () => {
      // 示例 1 - 在默认浏览器中打开VS Code主页
      vscode.env.openExternal(
        vscode.Uri.parse("https://code.visualstudio.com")
      );

      // 示例 2 - 打开默认email应用
      vscode.env.openExternal(vscode.Uri.parse("mailto:vscode@microsoft.com"));
    })
  );
}
```

#### 使用命令在插件间通信

一些插件意在被其他插件调用（通过`vscode.extension.getExtension(extensionName).exports`），因此会在激活时返回一些 API。如果这些插件都在同一环境（都是 UI 插件，或者都是工作区插件时）下工作不会出什么问题，但是如果一个是 UI 插件，一个是工作区插件就会出问题了。

如果你的插件需要彼此产生交互，使用私有命令暴露功能可以避免一些问题。不过记住一点，所有你传入的对象参数都会被字符串化（`JSON.stringify`），因此这些对象不可以有循环引用，这会导致接受方只收到一个"字符串化的 object 类型"。

示例：

```typescript
import * as vscode from "vscode";

export async function activate(context: vscode.ExtensionContext) {
  // 注册私有命令
  const echoCommand = vscode.commands.registerCommand(
    "_private.command.called.echo",
    (value: string) => {
      return value;
    }
  );
  context.subscriptions.push(echoCommand);
}
```

使用命令的更多细节，请参考[命令 API 指南](/extension-guides/command.md)

## 使用 Webview API

---

就像剪贴板 API，[Webview API](/extension-guides/webview.md)也总是运行在本地环境，即使是 _工作区插件_ 调用的。也就是说大部分基于 webview 的插件都可以正常工作，但是还有些注意事项需要交代一下。

#### 访问 localhost

默认情况下，webview 中的`localhost`会解析到用户本地机器上，也就是说，远程运行的插件所启动的服务在 webview 里是无法访问的。即使你访问远程机器的 ip，云主机或容器中的端口还是默认被拦截的。我们来看一下示意图

![webview to remote](https://code.visualstudio.com/assets/api/advanced-topics/remote-extensions/webview-problem.png)

你可以用 webview 的[message passing](/extension-guides/webview?id=脚本和信息传递)API 绕过各种限制，你还可以 **添加端口映射** 告诉 webview 哪些端口可以直接转发到远程机器上。

端口映射可以将 webview 所使用的 localhost 端口映射到远程插件启动的任意端口上。如果你的 _工作区插件_ 运行在远程，而且你也定义了端口映射，那么这些流量会自动、安全地转发到远程机器上。如果你的插件只是运行在本地，端口映射则会将一个 localhost 端口重新映射到另一个端口上。Webview 端口映射同时支持*UI 插件*和*工作区插件*，也同时支持本地和远程环境。

这项功能自 1.34 开始支持，请修改你的`package.json`添加该支持。

使用端口映射，只要在你创建的 webview 中添加传入一个`portMapping`对象即可：

```typescript
const STATIC_PORT = 3000;
const dynamicServerPort = getExpressServerPort();
const webviewPort = STATIC_PORT;

// 创建webview然后传入portMapping
const panel = vscode.window.createWebviewPanel(
  "remoteMappingExample",
  "Remote Mapping Example",
  vscode.ViewColumn.One,
  {
    portMapping: [
      // 这里映射了 webview 的 localhost:3000 到远程主机的 express 服务器端口
      { webviewPort: webviewPort, extensionHostPort: dynamicServerPort },
    ],
  }
);

// 你可以在HTML中使用"webviewPort"查看端口
panel.webview.html = `<!DOCTYPE html>
    <body>
        <!-- This will resolve to the dynamic server port on the remote machine -->
        <img src="http://localhost:${webviewPort}/canvas.png">
    </body>
    </html>`;
```

现在 webview 前往`localhost:3000`的流量都会通过 VS Code 的安全信道直接走到远程机器上。

![Access to remote](https://code.visualstudio.com/assets/api/advanced-topics/remote-extensions/webview-solution.png)

## 使用原生 Node.js 模块

---

和插件打包（或动态引入的包）的原生 node 包会被[Electorn 的`electron-rebuild`](https://electronjs.org/docs/tutorial/using-native-node-modules)重新编译。但是 VS Code Server 运行在一个标准的（非 Electron）的 Node.js 中，因此可能造成远程二进制库失效问题。

解决这个问题需要：

1. 同时引入 Node.js 和 Elctron 标准的两种二进制包（别忘了动态引入的包）。
2. 检查`vscode.extensions.getExtension('your.extensionId').extensionKind === vscode.ExtensionKind.Workspace`是否根据环境使用了正确的包。
3. 如果你想支持非 x86_64 构建目标和 Alpine Linux 则遵循[下述类似逻辑](#为非 x86_64 主机或 Apline Linux 容器提供支持)。

使用 VS Code 的 **Help > Developer Tools**然后在控制台（console）中打印`process.versions.modules`可以找到 VS Code 使用的模块（modules）类型。如果你想要确保原生模块在各个 Node.js 环境中都能无缝运行，你可能把所有可能支持的平台（Electron Node.js, 官方 Node.js Windows/Darwin/Linux 的全部版本）相关的包全部引入。[node-tree-sitter](https://github.com/tree-sitter/node-tree-sitter/releases/tag/v0.14.0)包在这方面是个非常好的例子。

## 为非 x86_64 主机或 Apline Linux 容器提供支持

---

如果你的插件只是用 JavasSript/TypeScript 写的，你的插件可能什么都不用做就能支持其他进程架构或基于`musl`的 Apline Linux。

但是如果你的插件可以运行在 Debian 9+, Ubuntu 16.04+, 或者基于 RHEL / CentOS 7+ 的远程 SSH 主机、容器或 WSL 上，却无法支持非 x86_64(比如 ARMv7l)或 Alpine Linux 容器，插件可能需要包含了 x86_64 的`glibc`特定机器码或运行时，所以导致了这些架构/操作系统上出现问题。

比如，你的插件坑包含了 x86_64 编译的原生模块或运行时版本。对于 Alpine Linux 来说就是因[基础架构差异](https://wiki.musl-libc.org/functional-differences-from-glibc.html)而无法运行这样的插件。

为了解决这个问题：

1. 如果你是动态引入编译码，你可以用`process.arch`检测环境，然后根据对应架构下载对应架构下的依赖。如果你已经在插件中直接使用了二进制包，你也可以用同样的逻辑使用正确的包。
2. 对于 Alpine Linux 来说，你可以用`await fs.exists('/etc/alpine-release')`检测操作系统，然后下载或者使用基于`musl`的正确的二进制包。
3. 如果你不想支持这些平台，你也可以用同样的逻辑提供良好的错误提示。

你要非常注意一些第三方包可能依赖了导致这个问题的源码包。所以有时候你需要联系 npm 包作者提供额外的编译版本。

## 避免使用 Electron 模块

---

虽然依赖未暴露的内置 Electron 或者 VS Code 模块非常方便，但是你必须知道 VS Code Server 运作在标准的（非 Electron）Node.js 环境中，当插件运行在远程时就会丢失这些包。除了少数个例，比如[keytar](#保留密钥)，用了特殊的实现所以在所有环境中都能正常工作。

使用基于 Node.js 的模块从而避免这些问题。如果你一定要用 Electron 模块，那就要确保如果包丢失的时候提供合适的后备方案。

下面的例子使用了 Electron 的`original-fs`包，缺失时则使用 Node.js 的`fs`模块。

```typescript
function requireWithFallback(electronModule: string, nodeModule: string) {
  try {
    return require(electronModule);
  } catch (err) {}
  return require(nodeModule);
}

const fs = requireWithFallback("original-fs", "fs");
```

但是不论何时，你都应该避免这些问题。

## 已知问题

---

目前我们还有些影响 工作区插件 功能的问题亟待解决。下表是已知的问题列表：

| 问题                              | 描述                                                                                                                                                                                                       |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 端口拦截                          | 当使用 Docker 容器或者 SSH 服务器开发时端口不会自动转发，而插件中也没有可以程序性转发端口的 API。虽然在[使用 Webview API](#使用 Webview API)中已经适配了 webview，但是其他场景下还需要插件作者手动暴露端口 |
| 无法访问/传输远程工作区文件到本地 | 插件通过外部应用打开工作区文件会遇到错误，因为外部应用无法直接访问远程文件。我们正在调查插件怎样才能从远程工作区传输文件的相关方案。                                                                       |
| 无法从工作区插件访问关联设备      | 关联本地设备的插件无法在远程运行时关联对应设备，我们正在调查相关问题的最佳方案。                                                                                                                           |

## FAQ

---

- 查看[提示和解决方法](https://code.visualstudio.com/docs/remote/troubleshooting)或者[FAQ](https://code.visualstudio.com/docs/remote/faq)
- 在 [Stack Overflow](https://stackoverflow.com/questions/tagged/vscode-remote)上查找答案
- [支持或者新建一项功能](https://aka.ms/vscode-remote/feature-requests)，查看[已知问题](https://aka.ms/vscode-remote/issues)，或者[报告问题](https://aka.ms/vscode-remote/issues/new)
- 贡献一个[开发容器配置](https://aka.ms/vscode-dev-containers)方便大家使用
- 贡献[文档](https://github.com/Microsoft/vscode-docs)或者[VS Code](https://github.com/Microsoft/vscode)
- 查看我们的[贡献](https://aka.ms/vscode-remote/contributing)指南查看更多详情
