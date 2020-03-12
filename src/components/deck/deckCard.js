import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


class DeckCard extends React.Component{
  render(){
    return(
      <Card >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          A card
        </Typography>

      </CardContent>
    </Card>
    )
  }
}

export default DeckCard;
