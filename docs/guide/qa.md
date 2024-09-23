# 疑难解答

本文收录了各种常见问题，请使用浏览器内建页面搜索功能以快速查找问题及解决方法。若本文缺少部分内容，欢迎提交Pull Request以完善本文。

## 左上角的信息框怎么关闭？

按键盘上的H键即可关闭。

## 有没有连锁模组？

本整合包均不附带连锁模组，请自行安装。

## 添加/删除了一些模组之后游戏崩溃

除非您知道自己在做什么，否则请不要随意修改整合包。

您可以在群里详细描述问题，可能会有热心群友提供帮助，但不一定会有（

## 手机上不能用

本整合包没有兼容手机的计划。

## 有没有服务端？

Arcomua Modpack均为原版整合，使用原版服务端（如Paper）开服即可。

若您选择使用Fabric服务端，请考虑使用[Relentleserver](https://modrinth.com/modpack/relentleserver)。

## 打不开Modrinth

请尝试更换网络环境（比如连WiFi打不开的时候，换成热点后重试），或者使用虚拟专用网连接。

部分地区对国外网站的屏蔽力度不相同，如果实在无法下载，可以到我们的QQ群文件或官网下载。

## 如何在官方启动器里安装？

官方启动器不支持管理第三方内容（比如不支持镜像源下载、不支持安装模组加载器等），因此极力不推荐使用官方启动器。

我们推荐您使用HMCL、PCL2或BakaXL作为首选，使用第三方启动器可以更方便地安装整合包。

## 游戏画面顶部的方块信息怎么打开？

按下小键盘1键以打开方块信息显示。

通常我们会取消掉按键绑定以避免意外关闭，如果您想把它关掉，可在“选项”>“控制”>“按键绑定”中，找到“Jade”分类，在“显示叠加层”一处为其绑定按键或将其重置，然后在游戏里按下绑定的按键即可关闭。

## 出现日志占用空间过大/打不开游戏（可能的一种问题）

在任务管理器寻找到RivaTuner Statistics Server (RTSS)，右键那一栏并点击右键菜单中的“打开文件所在的位置”，在弹出的文件管理器窗口里找到uninstall.exe并双击执行，把RTSS完全卸载掉即可（如果无法卸载，请先选中RTSS并点击结束任务）。
Sodium与RTSS不兼容，而Sodium是整合包中非常重要的优化模组，因此只能做出取舍。

## 怎么把准星改成原版的样子？

找到整合包的模组文件夹，把Dynamic Crosshair和Dynamic Crosshair Compact（如果存在）都删掉。

## 点到聊天栏里的坐标后，出现一个红色的圆圈，怎么关掉？

按C键即可清除坐标高亮。

## 初次打开游戏显示“Controlify本地库”等字样要怎么办？

如果你要用手柄玩游戏就点“是”，不用就点“否”。