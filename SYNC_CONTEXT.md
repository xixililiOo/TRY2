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
| v1.5.4 | 新增十六进制对比展示界面 |
| v1.5.5 | 修复首版code开始解读无效 |
| v1.5.6 | 添加开始解读调试信息 |
| v1.5.7 | 按钮改为onclick绑定替代addEventListener |
| v1.5.8 | startInterpret首行加alert(1)调试 |
| v1.5.9 | startInterpret外层添加try-catch捕获异步错误 |
| v1.5.10 | 修复hexCompareSection空值导致classList报错 |
| v1.5.11 | 恢复hexCompareSection HTML并修复显示逻辑 |
| v1.5.12 | hex对比改为CUR左BASE右同行对齐 |
| v1.5.13 | 重新布局: sf面板移到算法文档下方, 代码区全宽 |
| v1.5.14 | 修复hex对比标红: CSS双点bug改为内联style |
| v1.5.15 | hex对比添加0-F列指示, 相同行跳过 |
| v1.5.16 | hex对比BASE半边加0-F列指示, 标题对齐 |
| v1.5.17 | code版本界面添加详情按钮和详情页 |
| v1.5.18 | 修复详情按钮+添加解读结果保存到配置 |
| v1.5.19 | 代码详情页展示解读结果 |
| v1.5.20 | 代码详情展示全部解读结果(含Base解读+hex对比) |
| v1.5.21 | 详情页左右对比+CUR/BASE同IP同行+标注算法文档名 |
| v1.5.22 | base版本列表显示关联算法文档名 |
| v1.5.23 | code版本表格Base列显示算法文档 |
| v1.5.24 | 修复loadCodeVersion未加载baseVersionDoc |
| v1.5.25 | 详情页base版本跳转按钮+导航链 |
| v1.5.26 | 修复_backAct暂存死区导致详情按钮无效 |
| v1.5.27 | CRC前添加IP参数地址范围(ps~pe); 回退纯HTML版本 |

## Current Features (this session)
1. 项目添加/删除 - 支持选择本地目录，自动创建 code/sf 子目录
2. 算法文档上传 - 仅支持 .xlsx，需格式校验（hex 值、数量匹配等）
3. 算法文档编辑界面 - IP组概念，新增/编辑/删除 IP组，全部字段可编辑
4. Code上传 - 需关联算法文档 + 父版本
5. Code版本界面 - 展示版本树，显示 base 版本及其关联文档
6. 算法文档浏览 - 展示 sf/ 目录下所有 xlsx 文件
7. 配置文件 upload_config.json - 记录代码与文档的关联关系
8. 代码解读与对比 - 解析IP开关寄存器状态, CRC校验, hex对比, 详情页CUR/BASE同IP同行展示
9. 全局错误捕获 - window.onerror 弹出 JS 错误详情

## Index.html (~62KB) - 单页应用
**技术栈:** HTML + CSS + JavaScript + SheetJS (xlsx解析)

## How to Sync
`ash
git pull origin master
`
After syncing, update this file with your session info.
