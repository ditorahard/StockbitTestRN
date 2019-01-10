import React from 'react';
import { View } from 'react-native';
import styles from './MaterialListItem.component.style';
import PropTypes from 'prop-types';	
import { Container, Header, Content, List, ListItem, Text, Left, Right, Body, Icon } from 'native-base';

export default class MaterialListItem extends React.Component {
	render() {
    	return (
			<ListItem icon>
	            <Left>
	                <Icon active name={this.props.icon} />
	            </Left>
	            <Body>
	                <Text>
	              		{this.props.title}
	              	</Text>
	            </Body>
	            <Right>
	              <Text>
	                5:00
	              </Text>
	            </Right>
	        </ListItem>
	          )
    }
}

MaterialListItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}