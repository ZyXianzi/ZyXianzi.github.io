## 配置Golang环境

### 安装Golang

```shell
wget https://go.dev/dl/go1.19.linux-amd64.tar.gz
sudo rm -rf /usr/local/go && tar -C /usr/local -xzf go1.19.linux-amd64.tar.gz
export PATH=$PATH:/usr/local/go/bin # add to .bash_profile
go version
export GO111MODULE=on  # Enable the go modules feature
export GOPROXY=https://mirrors.aliyun.com/goproxy/  # Set the GOPROXY environment variable
```

### 配置Golang项目依赖

```shell
go mod tidy  # need go.mod
```