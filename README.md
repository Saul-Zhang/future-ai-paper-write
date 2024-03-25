<div align="center">

  # 神笔AI写作
  神笔AI写作助手是一个基于AI大模型的文本生成能力实现的论文写作工具，通过神笔AI写作可完成毕业论文、期刊论文、课程设计等多种格式的论文写作，同时支持生成超过11000字的超长文本，并引用真实的参考文献，从而轻松搞定论文写作！
</div>

## 🛸 在线使用
- [futureai.infra.thisonegpt.com](http://futureai.infra.thisonegpt.com/)

|                                     |                                      |                                     |
|-------------------------------------|--------------------------------------|-------------------------------------|
| ![image_1.png](https://future-ai-write.oss-cn-beijing.aliyuncs.com/images/image_1.png) | ![image_2.png](https://future-ai-write.oss-cn-beijing.aliyuncs.com/images/image_2.png)  | ![image_3.png](https://future-ai-write.oss-cn-beijing.aliyuncs.com/images/image_3.png) |
| ![image_6.png](https://future-ai-write.oss-cn-beijing.aliyuncs.com/images/image_6.png) | ![image_4.png](https://future-ai-write.oss-cn-beijing.aliyuncs.com/images/image_4.png)  | ![image_5.png](https://future-ai-write.oss-cn-beijing.aliyuncs.com/images/image_5.png) |



## 💡 RoadMap
`1` 基于DDD(领域驱动设计)的后端架构
 - [x] 独立于框架：不依赖某个外部的库或框架，不被框架的结构所束缚。
 - [x] 独立于UI：前台展示的样式可能会随时发生变化（今天可能是网页、明天可能变成console、后天是独立app），但是底层架构不应该随之而变化。
 - [x] 独立于底层数据源：无论是MySQL、Oracle还是MongoDB、CouchDB，甚至使用文件系统，软件架构不应该因为不同的底层数据储存方式而产生巨大改变。
 - [x] 独立于外部依赖：无论外部依赖如何变更、升级，业务的核心逻辑不应该随之而大幅变化。

`2` 基于Nuxt3(SSR)的前端实现
- [x] 搜索引擎友好：基于SSR的服务端渲染方式，更容易SEO检索及优化
- [x] 使用Naive UI，界面美观
- [x] 响应式布局，同时适配PC端、平板、移动端

`3` 易于扩展的论文结构设计
- [x] 可定制不同类型、不同结构的论文，并自由配置论文结构及模型

`4` 运营设计
- [x] 免登录，及与Key配置的用户识别




## 👨‍💻 开发
项目技术栈：SpringBoot + TS + Naive UI + mysql

- **⚡ 快速部署**
  
  - Docker部署
  1. 下载 [docker-compose.yml](https://github.com/futureai-write/future-ai-paper-write/blob/master/docker-compose.yml)文件和[future_ai_write_init.sql](https://github.com/futureai-write/future-ai-paper-write/blob/master/future_ai_write_init.sql)
  2. 执行以下命令：
     ``` shell
     docker-compose up -d
     ```
  3. 在浏览器输入 `http://ip:3000`即可访问
  
  


## 🏘️ 社区交流群
[![](https://write-wy.oss-cn-beijing.aliyuncs.com/write/20240320/mmqrcode1711198103484.png)](https://write-wy.oss-cn-beijing.aliyuncs.com/write/20240320/mmqrcode1711198103484.png)
