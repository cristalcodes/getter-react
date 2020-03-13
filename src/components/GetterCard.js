import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';


// class GetterCard extends React.Component{
//   render(){
//     return (
//       <Card style={styles.eachCardContainer}>
//         <Typography color="textSecondary" gutterBottom>
//
//         {this.props.card.title}
//         </Typography>
//       </Card>
//     )
//   }
// }
//
// const styles = {
//   eachCardContainer:{
//     marginBottom: 8
//   }
// };
//
// export default GetterCard;

const GetterCard =({title}) => {
  return(
    <Card style={styles.cardContainer}>

        <Typography gutterBottom>
          {title}
        </Typography>

    </Card>
  )
}

const styles = {
  cardContainer: {
    marginBottom: 8
  }
};

export default GetterCard;
