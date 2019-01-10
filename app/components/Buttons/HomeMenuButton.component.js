import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text, Icon } from 'native-base';
import style from './HomeMenuButton.component.style';
import PropTypes from 'prop-types';	

export default class HomeMenuButton extends React.Component {
  render() {
    return (
    	  <TouchableOpacity onPress={this.props.action}>
          <View style={style.card}>
              <View style={style.icon}>
                <Icon style={style.iconButton} name={this.props.icon} />
              </View>
            <View>
              <Text>
                {this.props.text}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
    );
  }
}


HomeMenuButton.propTypes = {
  text: PropTypes.string.isRequired,
  action : PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  // content: PropTypes.array.isRequired,
  // size: PropTypes.number.isRequired,
  // styles: PropTypes.object.isRequired,
  // isReady: PropTypes.bool.isRequired,
}