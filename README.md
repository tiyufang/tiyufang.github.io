# 个人主页

## 日常更新

绝大多数内容都集中在 `data.js`：个人简介、研究方向、论文、项目、教育经历与荣誉均可直接增删。页面结构在 `index.html`，视觉样式在 `styles.css`。

个人照片和 PDF 简历放在 `assets/` 目录，替换时请保留文件名：

- `assets/photo.jpg`

## 发布为 `XXX.github.io`

1. 在 GitHub 新建公开仓库，仓库名必须为 `你的GitHub用户名.github.io`。
2. 将本目录下所有文件上传到仓库的 `main` 分支。
3. 打开仓库的 **Settings → Pages**，在 **Build and deployment** 中选择 **Deploy from a branch**，分支选择 `main`，目录选择 `/ (root)`，保存。
4. 等待约 1–3 分钟，即可访问 `https://你的GitHub用户名.github.io/`。

主页为纯静态文件，无需安装环境或执行构建命令。本地预览时，可直接打开 `index.html`。
