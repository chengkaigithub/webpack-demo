#!/usr/bin/expect

set timeout -1
spawn ssh root@47.91.157.69
expect "*password:" { send "Chengkai92\n" }
expect "Welcome*" { send "pwd\r" }
expect "*root" { send "cd /usr/chengkai/test-project/webpack-demo\r" }
expect "*webpack-demo" { send "sh product.sh\r" }
expect "*Done" { send "exit\r" }
interact

# 手动输入密码脚本
# #!/usr/bin/env bash
# ssh root@47.91.157.69 "cd /usr/chengkai/test-project/webpack-demo; pwd; sh product.sh;"