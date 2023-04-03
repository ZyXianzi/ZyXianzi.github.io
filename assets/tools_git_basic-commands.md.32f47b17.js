import{_ as e,c as i,o as c,d as o}from"./app.1791ff5c.js";const b=JSON.parse('{"title":"Git","description":"","frontmatter":{},"headers":[{"level":2,"title":"Git基本概念","slug":"git基本概念","link":"#git基本概念","children":[]},{"level":2,"title":"Git常用命令","slug":"git常用命令","link":"#git常用命令","children":[]}],"relativePath":"tools/git/basic-commands.md","lastUpdated":1680172921000}'),d={name:"tools/git/basic-commands.md"},t=o('<h1 id="git" tabindex="-1">Git <a class="header-anchor" href="#git" aria-hidden="true">#</a></h1><h2 id="git基本概念" tabindex="-1">Git基本概念 <a class="header-anchor" href="#git基本概念" aria-hidden="true">#</a></h2><ul><li><p>工作区：仓库的目录。工作区是独立于各个分支的。</p></li><li><p>暂存区：数据暂时存放的区域，类似于工作区写入版本库前的缓存区。暂存区是-独立于各个分支的。</p></li><li><p>版本库：存放所有已经提交到本地仓库的代码版本。</p></li><li><p>版本结构：树结构，树中每个节点代表一个代码版本。</p></li></ul><h2 id="git常用命令" tabindex="-1">Git常用命令 <a class="header-anchor" href="#git常用命令" aria-hidden="true">#</a></h2><ol><li><code>git config --global user.name xxx：设置全局用户名，信息记录在</code>~/.gitconfig`文件中</li><li><code>git config --global user.email xxx@xxx.com</code>：设置全局邮箱地址，信息记录在<code>~/.gitconfig</code>文件中</li><li><code>git init</code>：将当前目录配置成git仓库，信息记录在隐藏的.git文件夹中</li><li><code>git add XX</code>：将XX文件添加到暂存区</li><li><code>git add .</code>：将所有待加入暂存区的文件加入暂存区</li><li><code>git rm --cached XX</code>：将文件从仓库索引目录中删掉</li><li><code>git commit -m &quot;给自己看的备注信息&quot;</code>：将暂存区的内容提交到当前分支</li><li><code>git status</code>：查看仓库状态</li><li><code>git diff XX</code>：查看XX文件相对于暂存区修改了哪些内容</li><li><code>git log</code>：查看当前分支的所有版本</li><li><code>git reflog</code>：查看HEAD指针的移动历史（包括被回滚的版本）</li><li><code>git reset --hard HEAD^ </code>或 <code>git reset --hard HEAD~</code>：将代码库回滚到上一版本</li><li><code>git reset --hard HEAD^^</code>：往上回滚两次，以此类推</li><li><code>git reset --hard HEAD~100</code>：往上回滚100个版本</li><li><code>git reset --hard 版本号</code>：回滚到某一特定版本</li><li><code>git checkout — XX</code>或<code>git restore XX</code>：将XX文件尚未加入暂存区的修改全部撤销</li><li><code>git remote add origin git@git.acwing.com:xxx/XXX.git</code>：将本地仓库关联到远程仓库</li><li><code>git push -u (第一次需要-u以后不需要)</code>：将当前分支推送到远程仓库</li><li><code>git push origin branch_name</code>：将本地的某个分支推送到远程仓库</li><li><code>git clone git@git.acwing.com:xxx/XXX.git</code>：将远程仓库XXX下载到当前目录下</li><li><code>git checkout -b branch_name</code>：创建并切换到<code>branch_name</code>这个分支</li><li><code>git branch</code>：查看所有分支和当前所处分支</li><li><code>git checkout branch_name</code>：切换到<code>branch_name</code>这个分支</li><li><code>git merge branch_name</code>：将分支<code>branch_name</code>合并到当前分支上</li><li><code>git branch -d branch_name</code>：删除本地仓库的<code>branch_name</code>分支</li><li><code>git branch branch_name</code>：创建新分支</li><li><code>git push --set-upstream origin branch_name</code>：设置本地的<code>branch_name</code>分支对应远程仓库的<code>branch_name</code>分支</li><li><code>git push -d origin branch_name</code>：删除远程仓库的<code>branch_name</code>分支</li><li><code>git pull</code>：将远程仓库的当前分支与本地仓库的当前分支合并</li><li><code>git pull origin branch_name</code>：将远程仓库的<code>branch_name</code>分支与本地仓库的当前分支合并</li><li><code>git branch --set-upstream-to=origin/branch_name1 branch_name2</code>：将远程的<code>branch_name1</code>分支与本地的<code>branch_name2</code>分支对应</li><li><code>git checkout -t origin/branch_name</code>：将远程的<code>branch_name</code>分支拉取到本地</li><li><code>git stash</code>：将工作区和暂存区中尚未提交的修改存入栈中</li><li><code>git stash apply</code>：将栈顶存储的修改恢复到当前分支，但不删除栈顶元素</li><li><code>git stash drop</code>：删除栈顶存储的修改</li><li><code>git stash pop</code>：将栈顶存储的修改恢复到当前分支，同时删除栈顶元素</li><li><code>git stash list</code>：查看栈中所有元素</li></ol>',5),a=[t];function l(n,r,g,h,s,m){return c(),i("div",null,a)}const p=e(d,[["render",l]]);export{b as __pageData,p as default};