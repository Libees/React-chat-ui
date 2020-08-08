import React, { useState } from 'react';
import './App.css';
import Button from "./Button"

import useColorSwitch from "./useColorSwitch"

function App() {
  const [color,setColor] = useColorSwitch();
  const [color1,setColor1] = useColorSwitch("blue","green")
  function onHandleClick() {
    alert("父组件方法")
  };

  return (
    <div> 
      <Button label="登录" onClick={onHandleClick}></Button>
      <span style={{color:color}}>我是一段文本</span>
      <Button onClick={setColor} label="注销"></Button>
      <div></div>
      <span style={{color:color1}}>我是文本二</span>
      <Button onClick={setColor1} label="点击改变文本二颜色"></Button>
    </div>
  );
}

export default App;
