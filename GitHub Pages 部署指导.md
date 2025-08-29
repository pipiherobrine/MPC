# GitHub Pages 部署指导

## 概述

本指导将详细介绍如何将您的学术论文展示网站部署到GitHub Pages，使其能够通过互联网公开访问。GitHub Pages是GitHub提供的免费静态网站托管服务，非常适合展示学术研究成果。

## 前期准备

### 1. GitHub账户准备
- 如果您还没有GitHub账户，请访问 https://github.com 注册
- 确保您的账户已经验证邮箱地址
- 建议设置一个专业的用户名，因为它将出现在您的网站URL中

### 2. 文件结构检查
确保您的网站文件结构如下：
```
paper-website/
├── index.html          # 主页面文件
├── styles.css          # 样式文件
├── script.js           # JavaScript交互文件
└── assets/             # 资源文件夹（图片、视频等）
    ├── images/
    └── videos/
```

## 部署步骤

### 第一步：创建GitHub仓库

1. **登录GitHub**
   - 访问 https://github.com 并登录您的账户

2. **创建新仓库**
   - 点击右上角的"+"号，选择"New repository"
   - 仓库名称建议使用有意义的名称，如：`my-research-paper` 或 `论文标题-website`
   - 选择"Public"（公开），这样GitHub Pages才能正常工作
   - 勾选"Add a README file"
   - 点击"Create repository"

### 第二步：上传网站文件

#### 方法一：通过GitHub网页界面上传

1. **上传主要文件**
   - 在仓库页面点击"uploading an existing file"
   - 将 `index.html`、`styles.css`、`script.js` 拖拽到上传区域
   - 在页面底部的提交信息中填写："Add initial website files"
   - 点击"Commit changes"

2. **创建assets文件夹**
   - 点击"Create new file"
   - 在文件名输入框中输入 `assets/images/.gitkeep`
   - 这将创建assets/images文件夹结构
   - 提交更改

3. **上传资源文件**
   - 进入assets/images文件夹
   - 上传您的图片文件
   - 对videos文件夹重复相同操作

#### 方法二：使用Git命令行（推荐）

如果您熟悉Git，可以使用命令行：

```bash
# 克隆仓库到本地
git clone https://github.com/您的用户名/仓库名.git
cd 仓库名

# 复制网站文件到仓库文件夹
cp -r /path/to/paper-website/* .

# 添加所有文件
git add .

# 提交更改
git commit -m "Add academic paper website"

# 推送到GitHub
git push origin main
```

### 第三步：启用GitHub Pages

1. **进入仓库设置**
   - 在仓库页面点击"Settings"标签

2. **配置Pages设置**
   - 在左侧菜单中找到"Pages"
   - 在"Source"部分选择"Deploy from a branch"
   - 选择"main"分支
   - 文件夹选择"/ (root)"
   - 点击"Save"

3. **等待部署完成**
   - GitHub会自动构建和部署您的网站
   - 通常需要几分钟时间
   - 部署完成后，您会看到绿色的成功提示

### 第四步：访问您的网站

部署成功后，您的网站将可以通过以下URL访问：
```
https://您的用户名.github.io/仓库名/
```

例如：`https://johnsmith.github.io/my-research-paper/`

## 内容更新指导

### 替换占位符内容

您的网站目前包含占位符内容，需要替换为实际的论文信息：

#### 1. 更新基本信息
编辑 `index.html` 文件，替换以下内容：
- 页面标题（`<title>`标签）
- 论文标题和副标题
- 作者信息和机构
- 发表信息

#### 2. 添加摘要内容
在摘要区域替换"【待填充】"文本为您的实际论文摘要。

#### 3. 完善方法部分
- 更新方法概述
- 修改步骤描述
- 添加方法流程图（如有）

#### 4. 添加实际图片
使用网站提供的工具函数添加真实图片：
```javascript
// 在script.js中使用
addRealImage(0, 'assets/images/result1.jpg', '实验结果图1', '详细描述');
```

#### 5. 嵌入视频
替换视频占位符为实际视频：
```javascript
addRealVideo(0, 'assets/videos/demo.mp4', '实验演示', '视频描述');
```

#### 6. 设置下载链接
添加实际的下载文件：
```javascript
addRealDownload(0, 'assets/files/paper.pdf', 'research-paper.pdf');
```

### 更新网站的步骤

1. **本地修改**
   - 在本地编辑文件
   - 在浏览器中测试修改效果

2. **上传更改**
   - 通过GitHub网页界面上传修改后的文件
   - 或使用Git命令推送更改

3. **自动重新部署**
   - GitHub Pages会自动检测更改
   - 几分钟后新版本就会生效

## 高级配置

### 自定义域名

如果您有自己的域名，可以配置自定义域名：

1. **添加CNAME文件**
   - 在仓库根目录创建名为 `CNAME` 的文件
   - 文件内容为您的域名，如：`www.yourpaper.com`

2. **配置DNS**
   - 在您的域名提供商处设置CNAME记录
   - 指向 `您的用户名.github.io`

### 搜索引擎优化

为了让您的论文网站更容易被搜索引擎发现：

1. **添加meta标签**
   在 `index.html` 的 `<head>` 部分添加：
   ```html
   <meta name="description" content="您的论文摘要简述">
   <meta name="keywords" content="关键词1,关键词2,关键词3">
   <meta name="author" content="作者姓名">
   ```

2. **创建sitemap.xml**
   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://您的用户名.github.io/仓库名/</loc>
       <lastmod>2024-01-01</lastmod>
       <priority>1.0</priority>
     </url>
   </urlset>
   ```

### 性能优化

1. **图片优化**
   - 使用WebP格式的图片以减少文件大小
   - 为图片添加适当的alt属性

2. **启用压缩**
   - GitHub Pages自动启用gzip压缩
   - 确保CSS和JavaScript文件结构清晰

## 常见问题解决

### 网站无法访问
- 检查仓库是否为Public
- 确认Pages设置中选择了正确的分支
- 等待几分钟让部署完成

### 样式不显示
- 检查CSS文件路径是否正确
- 确保文件名大小写匹配

### 图片不显示
- 确认图片文件已正确上传
- 检查图片路径是否正确
- 验证图片格式是否支持

### 更新不生效
- 清除浏览器缓存
- 等待GitHub Pages重新部署（通常5-10分钟）

## 维护和更新

### 定期维护
- 定期检查链接是否有效
- 更新联系信息
- 添加新的研究成果

### 版本控制
- 使用Git的分支功能进行版本管理
- 为重要更新创建标签
- 保持提交信息的清晰和有意义

### 备份
- GitHub本身就是很好的备份
- 建议在本地也保留一份完整副本
- 重要文件可以额外备份到其他云服务

## 总结

通过以上步骤，您就可以成功将学术论文展示网站部署到GitHub Pages。这个网站具有专业的设计、响应式布局和良好的用户体验，能够有效地展示您的研究成果。

记住要定期更新内容，保持网站的活跃度，这样不仅能更好地展示您的研究工作，还能提高在学术界的可见度。

