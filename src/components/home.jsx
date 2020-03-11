import React from 'react';
import Clock from 'react-live-clock';
import ReactFitText from 'react-fittext';

const home = () => {
  return(
    <div>
    <br/>
    Clock is ticking... what should you be working on?
    <ReactFitText compressor={0.5}>
      <h1>
        <Clock format="h:mm:ss" interval={1000} ticking={true} />
      </h1>
    </ReactFitText>

    </div>
  )
}
 export default home;
