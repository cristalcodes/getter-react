import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';


const Container = styled.div`
  padding-bottom: 8px;
`;

const GetterCard =({title}) => {
  return(
    <Container>
      <Card >
        <Typography gutterBottom>
          {title}
        </Typography>
      </Card>
    </Container>
  )
}



export default GetterCard;
