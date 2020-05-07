import React from 'react'
import { connect } from 'react-redux'

import BirdIcon from '../asset/images/bird.png'

const Bird = ({y, r}) => {
    return (
        <div style={{
            position: 'absolute',
            top: y,
            left: 120,
            width: 34,
            height: 24,
            background: `url(${ BirdIcon })`,
            transform: `rotate(${r}deg)`
        }}></div>
    )
}

const mapStateToProps = ({bird}) => ({y: bird.y, r: bird.r});
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Bird);