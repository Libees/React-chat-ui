import styled,{css} from "styled-components"

const circleMixinFunc= (color,statusIconSize="8px")=>css`
  content:"";
    display:block;
    position:absolute;
    width:${statusIconSize};
    height:${statusIconSize};
    border-radius:50%;
    background-color:${color};
`

const StyledAvatar = styled.div`
  position:relative;
`

const StatusIcon = styled.div`
  position:absolute;
  left:4px;
  top:4px;

  ::before {
    ${({statusIconSize})=>circleMixinFunc("white",statusIconSize)}
    transform:scale(2)
  }

  ::after {
    /* ${(props)=>circleMixinFunc(props.theme.green)}; */
    ${({theme,status,statusIconSize})=>{
        if(status=='online'){
          return circleMixinFunc(theme.green,statusIconSize)
        }else if(status== "offline"){
          return circleMixinFunc(theme.gray,statusIconSize)
        }
      }
    }
  }

`

const AvatarClip =styled.div`
  width:${({size})=>size};
  height:${({size})=>size};
  border-radius:50%;
  overflow: hidden;
`

const AvatarImg = styled.img`
  width:100%;
  height:100%;
  object-fit:cover;
  object-position:center;
`

export {StyledAvatar,StatusIcon,AvatarClip,AvatarImg}