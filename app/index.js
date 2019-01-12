import React from 'react';
import App from './App.container';
import {Provider} from 'react-redux';
import {store} from './redux/store';

export default class StockbitTestRN extends React.Component {
  render() {
    return (
    	<Provider store={store}>
    		<App />
    	</Provider>
    );
  }
}