import React from 'react';
import { View, Text } from 'react-native';
import { Item, Form, Picker } from 'native-base'; 
import styles from './Filterbar.component.style';
import PropTypes from 'prop-types';	

export default class filterbar extends React.Component {
  render() {
    return (
    <View style={styles.filterbar}>
    	<View style={styles.filterbarContent}> 
		    <Form>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.props.selected}
                onValueChange={this.props.onSelectedChange.bind(this)}
              >
                <Picker.Item label="Wallet" value="key0" />
                <Picker.Item label="ATM Card" value="key1" />
                <Picker.Item label="Debit Card" value="key2" />
                <Picker.Item label="Credit Card" value="key3" />
                <Picker.Item label="Net Banking" value="key4" />
              </Picker>
            </Item>
          </Form>
        </View>
	</View>
    );
  }
}

Filterbar.propTypes = {
  onSelectedChange : PropTypes.func,
  selected: PropTypes.object,
}