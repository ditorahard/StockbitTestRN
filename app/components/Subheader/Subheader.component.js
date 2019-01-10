import React from 'react';
import { View, Text } from 'react-native';
import styles from './Subheader.component.style';
import PropTypes from 'prop-types';	

export default class Subheader extends React.Component {
  render() {
    return (
    <View style={styles.hero}> 
	    <Text style={styles.whitetext}>
	        {this.props.title}
	    </Text>
	</View>
    );
  }
}


Subheader.propTypes = {
  title: PropTypes.string.isRequired,
  // action : PropTypes.func.isRequired,
  // content: PropTypes.array.isRequired,
  // size: PropTypes.number.isRequired,
  // styles: PropTypes.object.isRequired,
  // isReady: PropTypes.bool.isRequired,
}