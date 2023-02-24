# Docker基本命令

## 镜像(image)相关命令
1. `docker pull ubuntu:22.04`：拉取一个镜像
2. `docker images`：列出本地所有镜像
3. `docker image rm ubuntu:22.04` 或 `docker rmi ubuntu:22.04`：删除镜像`ubuntu:22.04`
4. `docker [container] commit CONTAINER IMAGE_NAME:TAG`：创建某个`container`的镜像
5. `docker save -o ubuntu_22_04.tar ubuntu:22.04`：将镜像`ubuntu:22.04`导出到本地文件`ubuntu_22_04.tar`中
6. `docker load -i ubuntu_22_04.tar`：将镜像`ubuntu:22.04`从本地文件`ubuntu_22_04.tar`中加载出来

## 容器(container)相关命令
1. `docker [container] create -it ubuntu:22.04`：利用镜像`ubuntu:22.04`创建一个容器。
2. `docker ps -a`：查看本地的所有容器
3. `docker [container] start CONTAINER`：启动容器
4. `docker [container] stop CONTAINER`：停止容器
5. `docker [container] restart CONTAINER`：重启容器
6. `docker [contaienr] run -itd ubuntu:22.04`：创建并启动一个容器
7. `docker [container] attach CONTAINER`：进入容器
	- 先按Ctrl-p，再按Ctrl-q可以挂起容器
8. `docker [container] exec CONTAINER COMMAND`：在容器中执行命令
9. `docker [container] rm CONTAINER`：删除容器
10. `docker container prune`：删除所有已停止的容器
11. `docker export -o ctr.tar CONTAINER`：将容器CONTAINER导出到本地文件`ctr.tar`中
12. `docker import xxx.tar image_name:tag`：将本地文件`xxx.tar`导入成镜像，并将镜像命名为`image_name:tag`
::: tip
`docker export/import`与`docker save/load`的区别：
- `export/import`会丢弃历史记录和元数据信息，仅保存容器当时的快照状态
- `save/load`会保存完整记录，体积更大
:::
13. `docker top CONTAINER`：查看某个容器内的所有进程
14. `docker stats`：查看所有容器的统计信息，包括CPU、内存、存储、网络等信息
15. `docker cp a.txt CONTAINER:a.txt` 或 `docker cp CONTAINER:a.txt a.txt`：在本地和容器间复制文件
16. `docker rename CONTAINER1 CONTAINER2`：重命名容器
17. `docker update CONTAINER --memory 500MB`：修改容器限制

## 常用配置
为了避免每次使用`docker`命令都需要加上`sudo`权限，可以将当前用户加入安装中自动创建的`docker`用户组(可以参考[官方文档](https://docs.docker.com/engine/install/linux-postinstall/))：
```shell
sudo usermod -aG docker $USER
```
执行完此操作后需要重启当前shell才能使其生效，或者执行如下命令更新用户组设置：
```shell
newgrp docker # 更新docker用户组
```
