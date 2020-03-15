import React from 'react';
import Clock from 'react-live-clock';
import ReactFitText from 'react-fittext';
import styled from 'styled-components';

const Container= styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const home = () => {
  return(
    <div>
    <Container>
      <ReactFitText compressor={0.25}>
        <h1>
          <Clock format="h:mm:ss" interval={1000} ticking={true} />
        </h1>
      </ReactFitText>
      <h3>
        <center>
          Clock is ticking... what should you be working on?
        </center>
      </h3>
    </Container>
    </div>
  )
}
 export default home;
