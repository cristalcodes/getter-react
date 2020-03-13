import React from 'react';
import AppRouter from '../routes/index.js';
import '@atlaskit/css-reset';


class App extends React.Component{
  render(){
    return(
      <div>
        <AppRouter />
      </div>

    )
  }
}


export default App;
