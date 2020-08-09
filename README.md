# 提交测试

# 2020/08/09 
react 回顾
父向子传值 传onClick 方法
hook
标签中传递字符传 使用""包裹 widht="100px"
标签中传入方法使用{} 包裹 如 onClick={onClick}

# styled-components 用法
用组件的方式定义css 生成对应的标签。
代替标签中的class

### 安装 npm install sytled-compoents 
使用主题
  定义主题的js文件，js文件默认导出一个对象
  在入口文件（index.js）中 导入主题js文件
  导入styled-component的 ThemeProvider 
  使用 <ThemeProvider  theme={theme}> 包裹主标签 传入 theme 属性

### 使用
  在js中导入styled-components
  import styled from "styled-components"
  在js中定义css `` 包裹css
     const StyledButton = styled.button`
    width: ${({width})=>width || "80px"};
    color:red;
    font-size:${props => props.fontSize || "18px"};
    `