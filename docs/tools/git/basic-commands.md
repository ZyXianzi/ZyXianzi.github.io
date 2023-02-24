# Git

## Git基本概念

- 工作区：仓库的目录。工作区是独立于各个分支的。

- 暂存区：数据暂时存放的区域，类似于工作区写入版本库前的缓存区。暂存区是-独立于各个分支的。
- 版本库：存放所有已经提交到本地仓库的代码版本。
- 版本结构：树结构，树中每个节点代表一个代码版本。

## Git常用命令

1. `git config --global user.name xxx：设置全局用户名，信息记录在`~/.gitconfig`文件中
2. `git config --global user.email xxx@xxx.com`：设置全局邮箱地址，信息记录在`~/.gitconfig`文件中
3. `git init`：将当前目录配置成git仓库，信息记录在隐藏的.git文件夹中
4. `git add XX`：将XX文件添加到暂存区
5. `git add .`：将所有待加入暂存区的文件加入暂存区
6. `git rm --cached XX`：将文件从仓库索引目录中删掉
7. `git commit -m "给自己看的备注信息"`：将暂存区的内容提交到当前分支
8. `git status`：查看仓库状态
9. `git diff XX`：查看XX文件相对于暂存区修改了哪些内容
10. `git log`：查看当前分支的所有版本
11. `git reflog`：查看HEAD指针的移动历史（包括被回滚的版本）
12. `git reset --hard HEAD^ `或 `git reset --hard HEAD~`：将代码库回滚到上一版本
13. `git reset --hard HEAD^^`：往上回滚两次，以此类推
14. `git reset --hard HEAD~100`：往上回滚100个版本
15. `git reset --hard 版本号`：回滚到某一特定版本
16. `git checkout — XX`或`git restore XX`：将XX文件尚未加入暂存区的修改全部撤销
17. `git remote add origin git@git.acwing.com:xxx/XXX.git`：将本地仓库关联到远程仓库
18. `git push -u (第一次需要-u以后不需要)`：将当前分支推送到远程仓库
19. `git push origin branch_name`：将本地的某个分支推送到远程仓库
20. `git clone git@git.acwing.com:xxx/XXX.git`：将远程仓库XXX下载到当前目录下
21. `git checkout -b branch_name`：创建并切换到`branch_name`这个分支
22. `git branch`：查看所有分支和当前所处分支
23. `git checkout branch_name`：切换到`branch_name`这个分支
24. `git merge branch_name`：将分支`branch_name`合并到当前分支上
25. `git branch -d branch_name`：删除本地仓库的`branch_name`分支
26. `git branch branch_name`：创建新分支
27. `git push --set-upstream origin branch_name`：设置本地的`branch_name`分支对应远程仓库的`branch_name`分支
28. `git push -d origin branch_name`：删除远程仓库的`branch_name`分支
29. `git pull`：将远程仓库的当前分支与本地仓库的当前分支合并
30. `git pull origin branch_name`：将远程仓库的`branch_name`分支与本地仓库的当前分支合并
31. `git branch --set-upstream-to=origin/branch_name1 branch_name2`：将远程的`branch_name1`分支与本地的`branch_name2`分支对应
32. `git checkout -t origin/branch_name`：将远程的`branch_name`分支拉取到本地
33. `git stash`：将工作区和暂存区中尚未提交的修改存入栈中
34. `git stash apply`：将栈顶存储的修改恢复到当前分支，但不删除栈顶元素
35. `git stash drop`：删除栈顶存储的修改
36. `git stash pop`：将栈顶存储的修改恢复到当前分支，同时删除栈顶元素
37. `git stash list`：查看栈中所有元素



## Git分支开发规范

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



## 常见任务

### 增加新功能

```shell
(dev)$: git checkout -b feature/xxx            # 从dev建立特性分支
(feature/xxx)$: blabla                         # 开发
(feature/xxx)$: git add xxx
(feature/xxx)$: git commit -m 'commit comment'
(dev)$: git merge feature/xxx --no-ff          # 把特性分支合并到dev
```



### 修复紧急bug

```shell
(master)$: git checkout -b hotfix/xxx         # 从master建立hotfix分支
(hotfix/xxx)$: blabla                         # 开发
(hotfix/xxx)$: git add xxx
(hotfix/xxx)$: git commit -m 'commit comment'
(master)$: git merge hotfix/xxx --no-ff       # 把hotfix分支合并到master，并上线到生产环境
(dev)$: git merge hotfix/xxx --no-ff          # 把hotfix分支合并到dev，同步代码
```



#### 测试环境代码

```shell
(release)$: git merge dev --no-ff             # 把dev分支合并到release，然后在测试环境拉取并测试
```



### 生产环境上线

```shell
(master)$: git merge release --no-ff          # 把release测试好的代码合并到master，运维人员操作
(master)$: git tag -a v0.1 -m '部署包版本名'  #给版本命名，打Tag
```

