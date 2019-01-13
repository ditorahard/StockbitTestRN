import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Card, CardItem, Text, Button, Body } from 'native-base';
import styles from './MovieCard.component.style';
import PropTypes from 'prop-types';

export default class MovieCard extends React.PureComponent {
  render() {
    return (
          <Card style={styles.card}>
            <TouchableOpacity
              onPress={() => {this.props.actionImage(this.props.image)}}>
              <CardItem cardBody>
                <Image 
                source={{uri: this.props.image}} 
                style={styles.cardImage} />
              </CardItem>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={this.props.action}>
              <CardItem>
                <Body>
                  <Text>{this.props.title}</Text>
                  <Text note>{this.props.subtitle}</Text>
                </Body>
              </CardItem>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={this.props.action}>
              <CardItem>
                <Body>
                  <Text>DETAILS</Text>
                </Body>
              </CardItem>
            </TouchableOpacity>
          </Card>
    );
  }
}

MovieCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  subtitle: PropTypes.string,
  action : PropTypes.func,
  actionImage: PropTypes.func,
  page: PropTypes.string
}