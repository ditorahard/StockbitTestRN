import React from 'react';
import { View, Text } from 'react-native';
import { Item, Icon, Input } from 'native-base'; 
import styles from './Searchbar.component.style';
import PropTypes from 'prop-types';	

export default class Searchbar extends React.PureComponent {
  render() {
    return (
    <View style={styles.searchbar}>
      	<View style={styles.searchbarContent}> 
  		    <Item rounded>
  	            <Icon active name='ios-search' />
  	            <Input 
                style={styles.searchInput} 
                placeholder='Search . . .' 
                value={this.props.query} 
                onChangeText={this.props.onChangeText}
                />
  	        </Item>
          </View>
  	</View>
    );
  }
}


Searchbar.propTypes = {
   query: PropTypes.string,
   onChangeText: PropTypes.func.isRequired
}