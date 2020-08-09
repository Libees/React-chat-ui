# 笔记

# 2020/08/09 
## react 回顾
1. 父向子传值 传onClick 方法
2. hook
3. 标签中传递字符传 使用""包裹 widht="100px"
4. 标签中传入方法使用{} 包裹 如 onClick={onClick}

# styled-components 用法
1. 用组件的方式定义css 生成对应的标签。
代替标签中的class

## 安装 npm install sytled-compoents 
### 使用主题
1. 定义主题的js文件，js文件默认导出一个对象
2. 在入口文件（index.js）中 导入主题js文件
3. 导入styled-component的 ThemeProvider 
4. 使用 <ThemeProvider  theme={theme}> 包裹主标签 传入 theme 属性
5. 在组件总调用主题js的变量
`
${({theme}) => theme.primaryColor};
`

### 使用
1. 在js中导入styled-components
```
import styled from "styled-components"
```
2. 在js中定义css `` 包裹css
```
const StyledButton = styled.button`
width: ${({width})=>width || "80px"};
color:red;
font-size:${props => props.fontSize || "18px"};`
```
其中的 width 由父组件传入子组件中，再从子组件通过属性传入道styled中

### styled-components获得值得方式
使用${} 包裹变量
1. 通过解构赋值
`
width: ${({width})=>width || "80px"};
`
2. 通过props获取
`
${props => props.fontSize || "18px"};
`