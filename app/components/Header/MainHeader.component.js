import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { StackNavigator } from "react-navigation";
import PropTypes from 'prop-types';
import style from './MainHeader.component.style.js';

export default class MainHeader extends Component {
  render() {
    return (
        <Header style={style.whiteHeader} androidStatusBarColor="#014BAD">
          <Left>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon style={style.iconButton} name='menu' />
            </Button>
          </Left>
          <Body>
            <View style={style.logoContainer}>
              <Image
              style={style.ajardiaLogo}
              source={require('../../assets/img/logo.png')}>
              </Image>
            </View>
          </Body>
          <Right>
            <Button transparent>
              <Icon style={style.iconButton} name='ios-notifications-outline' />
            </Button>
          </Right>
        </Header>
    );
  }
}

MainHeader.propTypes = {
  openDrawer: PropTypes.func,
};