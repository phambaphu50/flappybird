import React from "react";
import PipeBg from '../asset/images/pipe.png'

const Pipe = () => {
  return (
    <div>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 150,
          width: 52,
          height: 200,
          background: `url(${PipeBg})`,
          backgroundPosition: 'bottom'
        }}
      ></div>

      <div
        style={{
          position: 'absolute',
          top: 300,
          left: 150,
          width: 52,
          height: 200,
          background: `url(${PipeBg})`
        }}
      ></div>
    </div>
  );
};

export default Pipe;
