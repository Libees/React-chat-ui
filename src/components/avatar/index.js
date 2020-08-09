import React from 'react'
import PropTypes from 'prop-types'
import face from "../../assets/images/face-male-1.jpg"

function Avatar(props) {
  return (
    <div>
        <div>我是头像</div>
        <div>
          <img src={face}></img>
        </div>
    </div>
  )
}

Avatar.propTypes = {

}

export default Avatar

