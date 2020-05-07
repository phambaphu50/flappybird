import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Bird from './Bird'
import Pipe from './Pipe'
import Foreground from './Foreground'
import BgImage from '../asset/images/bg.png'

const Game = ({status, start, fly}) => {
    const handlePress = (e) => {
        if(e.keyCode === 32) {
            fly()
        }

        if(status !== 'playing') {
            start()
        }
    }
    useEffect(() => {
        document.addEventListener('keypress', handlePress);
    })

    return (
        <div style={{
            position: 'relative',
            width: 288,
            height: 512,
            background: `url(${ BgImage })`,
            overflow: 'hidden'
        }}    
        >
            <Bird/>
            <Pipe/>
            <Foreground/>
        </div>
    )
}

const fly = (e) => {
    return (dispatch) => {
        dispatch({type: 'FLY'})
    }
}

const start = (e) => {
    return (dispatch, getState) => {
        const { status } = getState().game;
        if(status !== 'playing') {
            setInterval(() => {
                dispatch({type: 'FALL'}) 
                dispatch({type: 'RUNNING'}) 
            }, 300)

            setInterval(() => {
                dispatch({type: 'GENERATE'})
            }, 3000)

            dispatch({type: 'START'})
        }
    }
}

const mapStateToProps = ({game}) => ({
    status: game.status
})
const mapDispatchToProps = {start, fly}

export default connect(mapStateToProps, mapDispatchToProps) (Game);