import React from "react"
import styled from "styled-components"

function Button({label,onClick,width,fontSize}){
  const StyledButton = styled.button`
    width: ${({width})=>width || "80px"};
    color:${({theme}) => theme.primaryColor};
    font-size:${props => props.fontSize || "18px"};
  `
  function handleOnClick() {
    alert("我是"+label+"按钮")
  }
  return (
    <StyledButton width={width} fontSize={fontSize} onClick={handleOnClick}>{label}</StyledButton>
  );
}

export default Button