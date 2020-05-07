import React from "react"
import { connect } from 'react-redux'

import PipeTop from '../asset/images/pipe-top.png'
import PipeBottom from '../asset/images/pipe.png'

const Pipe = ({ x, pipes }) => {
  return (
    <div style={{ position: 'relative' }}>
      {
        pipes.map(({ topHeight }, i) => (
          <div style={{ position: 'relative' }} key={`pipe-${i}`}>
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: x + i * 200,
                width: 52,
                height: topHeight,
                background: `url(${PipeTop})`,
                backgroundPosition: 'bottom',
                transition: 'left 200ms'
              }}
            ></div>

            <div
              style={{
                position: 'absolute',
                top: topHeight + 100,
                left: x + i * 200,
                width: 52,
                height: topHeight,
                background: `url(${PipeBottom})`,
                transition: 'left 200ms'
              }}
            ></div>
          </div>
        ))
      }
    </div>
  );
};

const mapStateToProps = ({ pipe }) => ({ x: pipe.x, pipes: pipe.pipes });
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Pipe);
