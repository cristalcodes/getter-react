import React from 'react';
import Clock from 'react-live-clock';
import ReactFitText from 'react-fittext';

const home = () => {
  return(
    <div>
    <br/>
    Clock is ticking... what should you be working on?
        <h1>
        <ReactFitText compressor={0.4}>
          <Clock format="h:mm:ssa" interval={1000} ticking={true} />
          </ReactFitText>
        </h1>

    </div>
  )
}
 export default home;
