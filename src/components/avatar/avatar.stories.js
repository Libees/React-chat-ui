import React from "react"
import Avatar from ".";

import face1 from "assets/images/face-female-1.jpg"
import face2 from "assets/images/face-female-2.jpg"

import "story.css"

export default {
  title:"Avatar", 
  component:Avatar
}

export const Default = ()=>{
  return <div> 
    <Avatar status="online" src={face1}></Avatar>
  </div>
}

export const withAvatar= () =>{
  return <div className="row-element">
    <Avatar src={face1} ></Avatar>
    <Avatar src={face1} status="online"></Avatar>
    <Avatar src={face2} status="offline" ></Avatar>
    <Avatar src={face1} status="online"></Avatar>
    <Avatar src={face2} status="offline" size="72px" statusIconSize="12px"></Avatar>
  </div> 
}