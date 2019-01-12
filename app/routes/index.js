import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../containers/Home/Home.container';
import Detail from '../containers/Detail/Detail.container';


const Router = createStackNavigator(
   {
   	Home: {
      screen: Home,
      navigationOptions:{
        title:'StockbitTest - Home'
      },
    },
    Detail:{
      screen: Detail,
      navigationOptions:{
        title:'StockbitTest - Detail'
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(Router);

// Now AppContainer is the main component for React to render

export default AppContainer;