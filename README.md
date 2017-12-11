### 增量打包 dll
1.第3方包打dll `npm run build:vue-dll`
2.以文件夹为单位打包 dll `npm run build:com1-dll`

### 打包后的index文件在build中
http://localhost:9527/build/index.html

### 打包顺序
> 参考package.json中命令
`num run build:all-dell` 更新全部dll
`npm run build` 组装dll
单独更新模块请先执行 对应的 dll,再组装.
比如只更新 components 中的vue文件,

`npm run build:com1-dll` 
`npm run build:vue-dll`




