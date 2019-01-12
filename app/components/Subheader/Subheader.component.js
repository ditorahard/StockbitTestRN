import React from 'react';
import { View, Text } from 'react-native';
import styles from './Subheader.component.style';
import PropTypes from 'prop-types';	

export default class Subheader extends React.PureComponent {
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
}