import React from 'react'
import Bird from './Bird'
import Pipe from './Pipe'
import Foreground from './Foreground'
import BgImage from '../asset/images/bg.png'

const Game = () => {
    return (
        <div style={{
            position: 'relative',
            width: 288,
            height: 512,
            background: `url(${ BgImage })`
        }}>
            <Bird/>
            <Pipe/>
            <Foreground/>
        </div>
    )
}

export default Game;