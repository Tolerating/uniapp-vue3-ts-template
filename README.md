# 说明
这是一个vue3 + Typescript 的uni-app快速开始模板。
已经安装的依赖：
* `pinia`，版本为`2.0.35`，安装`2.1`版本以上需要`vue`版本为`3.3`
* `sass`
* 扩展组件`uni-ui`

==包管理器是:==`pnpm`

# 安装依赖
```shell
pnpm install
```

# 运行
运行到网页：`pnpm dev:h5`
运行到APP：`pnpm dev:app-android`，将`dist/dev/app`导入到HbuilderX中运行，这样更新代码没有热更新，需要手动重启，
> 可以将整个项目导入到HbuilderX中运行，使用别的编辑器编写。

# 更新uni-app编译器依赖到最新版本，与HbuilderX保持一致
```shell
npx @dcloudio/uvm@latest
```


