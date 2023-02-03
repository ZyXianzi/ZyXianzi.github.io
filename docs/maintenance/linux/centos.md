# CantOS 8 最小安装 配环境实录

#### 查看CPU与MEM信息

``` shell
cat /proc/cpuinfo
cat /proc/meminfo
```

#### 新建用户并给予sudo权限

```shell
adduser zyxianzi
passwd zyxianzi
usermod -aG wheel zyxianzi
```

#### 安装基础软件包

```shell
yum check-update
sudo yum install tmux vim git
```