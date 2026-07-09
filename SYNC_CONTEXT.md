# Session Sync Context

## Current Session
**Session ID:** 019f4806-69fa-7561-a69e-b8ab5a6c9e5c  
**Focus:** 前端 UI - 算法文档编辑与项目管理  
**Root:** D:\system\doc\TRY2

## Git Repository
**Remote:** https://github.com/xixililiOo/TRY2.git  
**Branch:** master

## Version History
| Version | Description |
|---------|-------------|
| v1.0.0 | 初始版本: 项目管理后台基础功能（添加项目、上传文档与代码、版本界面） |
| v1.0.1 | 添加全局错误捕获调试 |
| v1.0.2 | 修复 window.onerror 语法错误导致空白页 |

## Current Features (this session)
1. 项目添加/删除 - 支持选择本地目录，自动创建 code/sf 子目录
2. 算法文档上传 - 仅支持 .xlsx，需格式校验（hex 值、数量匹配等）
3. 算法文档编辑界面 - IP组概念，新增/编辑/删除 IP组，全部字段可编辑
4. Code上传 - 需关联算法文档 + 父版本
5. Code版本界面 - 展示版本树，显示 base 版本及其关联文档
6. 算法文档浏览 - 展示 sf/ 目录下所有 xlsx 文件
7. 配置文件 upload_config.json - 记录代码与文档的关联关系
8. 全局错误捕获 - window.onerror 弹出 JS 错误详情

## Index.html (48KB) - 单页应用
**技术栈:** HTML + CSS + JavaScript + SheetJS (xlsx解析)

## How to Sync
```bash
git pull origin master
```
After syncing, update this file with your session info.
