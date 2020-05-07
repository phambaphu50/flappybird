import React from 'react'
import ForegroundImage from '../asset/images/base.png'

const Foreground = () => {
    return (
        <div style={{
            position: 'absolute',
            bottom: 0,
            width: 288,
            height: 100,
            background: `url(${ForegroundImage})`

        }}></div>
    )
}

export default Foreground;