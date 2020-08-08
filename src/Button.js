import React from "react"


function Button({label,onClick}){
  function handleOnClick() {
    alert("我是"+label+"按钮")
  }
  return <button onClick={onClick}>{label}</button>
}

export default Button