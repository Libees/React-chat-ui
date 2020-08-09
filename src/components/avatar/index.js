import React from 'react'
import PropTypes from 'prop-types'
import {StyledAvatar,StatusIcon,AvatarClip,AvatarImg} from "./style"

function Avatar({src,size="48px",status,statusIconSize="8px",...item}) {
  return (
    <StyledAvatar>
        { status &&(<StatusIcon status={status} statusIconSize={statusIconSize}></StatusIcon>)}
        <AvatarClip size={size}>
          <AvatarImg src={src}></AvatarImg>
        </AvatarClip>
    </StyledAvatar>
  )
}

Avatar.propTypes = {
  src:PropTypes.string.isRequired,
  size:PropTypes.string,
  status:PropTypes.oneOf(['online','offline']),
  statusIconSize:PropTypes.string
}

export default Avatar

