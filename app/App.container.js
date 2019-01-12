import React, {Component} from 'react';
import Router from './routes';
import NavigationService from './routes/NavigationService';

class App extends Component {
  render () {
    return (
      <Router 
    	ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
        }} 
        />
    );
  }
}

export default App;