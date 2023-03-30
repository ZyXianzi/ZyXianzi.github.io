# Git常用开发规范

## Commit 规范参考

> 注：该规范非硬性要求

目前使用较多的是 Conventional Commits specification规范。Commit Message结构如下所示：

```shell
<type>(<scope>): <subject>
# 例:
feat: add login page
feat(login): add Login and Registration function
fix: xxxxx bug
```

### Commit Message Type类型：

| type     | 功能          | 英文                            | 描述                                                       | 图标 | emoji |
| -------- | ------------- | ------------------------------- | ---------------------------------------------------------- | ---- | ----- |
| feat     | 增加新功能    | A new features                  |                                                            | ✨    | ✨     |
| fix      | 修复bug       | Fixing a bug                    |                                                            | 🐛    | 🐛     |
| docs     | 修改文档      | Writing docs                    | 仅文档更改                                                 | 📝    | 📝     |
| ui       | 更新UI        | Updating the UI and style files | 更新用户界面和样式文件                                     | 💄    | 💄     |
| refactor | 代码重构      | Refactoring code                | 既不修复错误也不添加功能的代码更改                         | ♻️    | ♻️     |
| release  | 发布          | Releasing / Version tags        |                                                            | 🔖    | 🔖     |
| deploy   | 部署          | Deploying stuff                 |                                                            | 🚀    | 🚀     |
| test     | 增删测试      | Updating tests                  | 不涉及生产环境的代码                                       | ✅    | ✅     |
| chore    | 更改配置文件  | Changing configuration files    | 构建过程或辅助工具的变动，包配置文件，不涉及生产环境的代码 | 🔧    | 🔧     |
| del      | 删除代码/文件 | Removing code or files          |                                                            | 🔥    | 🔥     |
| init     | 初始提交      | Initial commit                  |                                                            | 🎉    | 🎉     |
| add      | 添加依赖      | Adding a dependency             |                                                            | ➕    | ➕     |
| minus    | 删除依赖      | Removing a dependency           |                                                            | ➖    | ➖     |
| docker   | 使用docker    | Work about Docker               |                                                            | 🐳    | 🐳     |

## Commit 规范参考

> 注：该规范非硬性要求

目前使用较多的是 Conventional Commits specification规范。Commit Message结构如下所示：

```shell
<type>(<scope>): <subject>
# 例:
feat: add login page
feat(login): add Login and Registration function
fix: xxxxx bug
```

### Commit Message Type类型：

| type     | 功能          | 英文                            | 描述                                                       | 图标 | emoji |
| -------- | ------------- | ------------------------------- | ---------------------------------------------------------- | ---- | ----- |
| feat     | 增加新功能    | A new features                  |                                                            | ✨    | ✨     |
| fix      | 修复bug       | Fixing a bug                    |                                                            | 🐛    | 🐛     |
| docs     | 修改文档      | Writing docs                    | 仅文档更改                                                 | 📝    | 📝     |
| ui       | 更新UI        | Updating the UI and style files | 更新用户界面和样式文件                                     | 💄    | 💄     |
| refactor | 代码重构      | Refactoring code                | 既不修复错误也不添加功能的代码更改                         | ♻️    | ♻️     |
| release  | 发布          | Releasing / Version tags        |                                                            | 🔖    | 🔖     |
| deploy   | 部署          | Deploying stuff                 |                                                            | 🚀    | 🚀     |
| test     | 增删测试      | Updating tests                  | 不涉及生产环境的代码                                       | ✅    | ✅     |
| chore    | 更改配置文件  | Changing configuration files    | 构建过程或辅助工具的变动，包配置文件，不涉及生产环境的代码 | 🔧    | 🔧     |
| del      | 删除代码/文件 | Removing code or files          |                                                            | 🔥    | 🔥     |
| init     | 初始提交      | Initial commit                  |                                                            | 🎉    | 🎉     |
| add      | 添加依赖      | Adding a dependency             |                                                            | ➕    | ➕     |
| minus    | 删除依赖      | Removing a dependency           |                                                            | ➖    | ➖     |
| docker   | 使用docker    | Work about Docker               |                                                            | 🐳    | 🐳     |

## Git常用分支规范

### master分支

- master 为主分支，也是用于部署生产环境的分支，确保master分支稳定性
- master 分支一般由develop以及hotfix分支合并，任何时间都不能直接修改代码

### develop分支

- develop为开发分支，始终保持最新完成以及bug修复后的代码
- 一般开发的新功能时，feature分支都是基于develop分支下创建的

### feature分支

- 开发新功能时，以develop为基础创建feature分支
- 分支命名: feature/ 开头的为特性分支， 命名规则: feature/user_module、 feature/cart_module

### release分支

- release为预上线分支，发布提测阶段，会release分支代码为基准提测

### hotfix分支

- 分支命名: hotfix/ 开头的为修复分支，它的命名规则与 feature 分支类似
- 线上出现紧急问题时，需要及时修复，以master分支为基线，创建hotfix分支，修复完成后，需要合并到master分支和develop分支