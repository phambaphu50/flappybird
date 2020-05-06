import React from 'react'
import BirdIcon from '../asset/images/bird.png'

const Bird = () => {
    return (
        <div style={{
            position: 'absolute',
            top: 250,
            left: 120,
            width: 34,
            height: 24,
            background: `url(${ BirdIcon })`
        }}></div>
    )
}

export default Bird;