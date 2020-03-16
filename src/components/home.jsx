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
      <center>
        <h1>
          <Clock format="h:mm:ss" interval={1000} ticking={true} />
        </h1>
        <h3>
          Clock is ticking... what should you be working on?
        </h3>
      </center>
    </Container>
    </div>
  )
}
 export default home;
