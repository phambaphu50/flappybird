import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Bird from './Bird'
import Pipe from './Pipe'
import Foreground from './Foreground'
import BgImage from '../asset/images/bg.png'

let gameLoop
let pipeGenerate

const Game = ({status, start, fly}) => {
    if(status === 'game-over') {
        clearInterval(gameLoop)
        clearInterval(pipeGenerate)
    }
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

const check = (dispatch, getState) => {
    const state = getState()
    const birdY = state.bird.y
    const pipes = state.pipe.pipes
    const x = state.pipe.x

    const challenge = pipes.map(({topHeight}, i) => {
        return {
            x1: x + i * 200,
            y1: topHeight,
            x2: x + i * 200,
            y2: topHeight + 100
        }
    }).filter(({x1}) => {
        if(x1 > 0 && x1 < 288) {
            return true;
        }
    })

    if(birdY > 512 - 100) {
        dispatch({type: 'GAME-OVER'})
    }

    if(challenge.length) {
        const {x1, y1, x2, y2} = challenge[0];
        if(x1 < 120 && 120 < x1 + 52 && birdY < y1 || 
          x2 < 120 && 120 < x2 + 52 && birdY > y2) {
            dispatch({type: 'GAME-OVER'}) 
          }
    }
}

const start = (e) => {
    return (dispatch, getState) => {
        const { status } = getState().game;
        if(status !== 'playing') {
            gameLoop = setInterval(() => {
                dispatch({type: 'FALL'}) 
                dispatch({type: 'RUNNING'}) 

                check(dispatch, getState)
            }, 300)

            pipeGenerate = setInterval(() => {
                dispatch({type: 'GENERATE'})
            }, 3000)

            dispatch({type: 'START'})
        }
    }
}

const mapStateToProps = ({game}) => ({status: game.status})
const mapDispatchToProps = {start, fly}

export default connect(mapStateToProps, mapDispatchToProps) (Game);