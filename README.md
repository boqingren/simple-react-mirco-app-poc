一个基于 React 统一技术栈实现的前端微应用，本项目只是一个简单版本的微应用 POC。

集成启动  
yarn start  

集成打包  
yarn build  

启动子应用  
yarn start -m app1  
yarn start -m app2  

打包子应用作为一个单独的应用  
yarn build -m app1  
yarn build -m app2  

注意：
1. 子应用项目必选和 package.json 在同一级目录。
2. 子应用项目名必须以 package.json 的 name 开头。
3. 在 /example-common/configs/project.js 中配置子应用信息。
4. 在 /example-common/webpack/helper/alias.js 中配置子应用别名。
5. 在 /example-main/App.js 中注册子应用路由。 
