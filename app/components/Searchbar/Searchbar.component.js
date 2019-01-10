import React from 'react';
import { View, Text } from 'react-native';
import { Item, Icon, Input } from 'native-base'; 
import styles from './Searchbar.component.style';
import PropTypes from 'prop-types';	

export default class Searchbar extends React.Component {
  render() {
    return (
    <View style={styles.searchbar}>
    	<View style={styles.searchbarContent}> 
		    <Item rounded>
	            <Icon active name='ios-search' />
	            <Input style={styles.searchInput} placeholder='Search . . .'/>
	        </Item>
        </View>
	</View>
    );
  }
}


// Searchbar.propTypes = {
//   // title: PropTypes.string.isRequired,
//   // action : PropTypes.func.isRequired,
//   // content: PropTypes.array.isRequired,
//   // size: PropTypes.number.isRequired,
//   // styles: PropTypes.object.isRequired,
//   // isReady: PropTypes.bool.isRequired,
// }