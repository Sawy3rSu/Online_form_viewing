# 北京大学外国语学院收发信息管理系统

## 项目简介

本项目是一个使用 **Node.js** 和 **Express** 框架开发的本地服务器应用，专门用于收发信息的管理。系统有两个主要功能：

1. **查看信息**：在网页上以表格的形式展示收发信息，支持搜索和排序。
2. **管理信息**：登录后可以对收发信息进行增、删、改的操作，实时保存修改后的数据。

本项目适合需要对简单表单数据进行管理的初学者。下文将详细介绍如何下载、安装和运行本项目。

## 目录结构说明

项目的目录结构如下：

```
/project-directory            <- 你的项目文件夹
│
├── /public                   <- 存放前端页面的文件夹
│   ├── 查看.html             <- 展示收发信息的页面
│   ├── 管理.html             <- 管理收发信息的页面，含登录功能
│   └── index.html            <- 首页，提供进入“查看”和“管理”页面的链接
│
├── /routes                   <- 存放服务器路由的文件夹
│   ├── api.js                <- 处理前端发来的数据请求
│   └── auth.js               <- 处理用户登录的验证
│
├── /data                     <- 数据文件存放文件夹
│   ├── test.json             <- 收发信息数据（如日期、收件人、类型）
│   └── user.json             <- 用户登录数据（用户名和密码）
│
├── app.js                    <- Node.js 主服务器文件
├── package.json              <- 依赖管理文件，用于记录所需的库
└── README.md                 <- 项目说明文件
```

### 安装与运行步骤

按照以下步骤操作，即可在本地运行这个项目：

### 1. 安装 Node.js

如果你还没有安装 **Node.js**，请前往 [Node.js官网](https://nodejs.org) 下载并安装适合你操作系统的版本。

### 2. 下载项目

首先将项目下载到你的电脑上。如果是从 GitHub 获取，可以使用以下命令：

```bash
git clone <repository-url>  # 使用项目仓库的实际 URL 替换 <repository-url>
cd <project-directory>      # 进入项目文件夹
```

### 3. 安装项目依赖

进入项目目录后，在终端中执行以下命令来安装项目依赖：

```bash
npm install
```

这会根据 `package.json` 文件安装所需的第三方库，例如 **Express**。

### 4. 启动本地服务器

安装完依赖后，执行以下命令来启动服务器：

```bash
node app.js
```

你会在终端中看到以下提示，表示服务器已经成功启动：

```
服务器在 http://localhost:3000 上运行
```

此时，你可以通过浏览器访问 `http://localhost:3000` 来查看你的项目。

### 页面功能说明

项目提供了三个主要的网页：

1. **首页 (`index.html`)**：显示“北京大学外国语学院收发查看”的标题，用户可以点击“查看数据”或“管理数据”按钮，分别进入查看页面和管理页面。
   
2. **查看页面 (`查看.html`)**：显示收发信息的表格，支持通过日期、收件人、收件类型等字段进行数据的搜索和排序。

3. **管理页面 (`管理.html`)**：提供用户登录功能。登录成功后，用户可以在表格中对收发信息进行增、删、改的操作，并实时保存到 `test.json` 文件中。

### 文件说明

- **`app.js`**：这是项目的核心文件，它启动了本地服务器并处理来自前端的请求。项目中有两个主要的路由文件：
    - **`/routes/api.js`**：处理与收发信息数据相关的操作，例如读取、修改、删除数据。
    - **`/routes/auth.js`**：处理用户登录验证，检查用户名和密码是否匹配。

- **`/public/`**：这个文件夹包含了前端网页文件，例如 `查看.html` 和 `管理.html`。它们分别负责展示和管理收发信息。

- **`/data/`**：存放项目的数据文件，主要是两个 JSON 文件：
    - **`test.json`**：存放收发信息的实际数据，包含收取日期、收件人和收件类型等信息。
    - **`user.json`**：存放用户名和密码，用于登录验证。

### 使用内网穿透进行访问

如果你希望其他人也能通过互联网访问你的本地服务器，可以使用内网穿透工具（如 [ngrok](https://ngrok.com)）来生成外网可访问的地址。具体步骤如下：

1. 安装并注册 ngrok。
2. 使用以下命令启动 ngrok：

    ```bash
    ngrok http 3000
    ```

3. ngrok 会生成一个外网地址，其他人可以通过这个地址访问你的本地服务器。
