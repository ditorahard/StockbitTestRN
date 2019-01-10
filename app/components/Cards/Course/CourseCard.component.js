import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Container, /*Header,*/ Content,  Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import styles from './CourseCard.component.style';
import PropTypes from 'prop-types';
import SCREEN_IMPORT from 'Dimensions'
  
const SCREEN_WIDTH = SCREEN_IMPORT.get('window').width;

export default class CourseCard extends Component {
  render() {
    return (
          <Card style={this.props.page=='Home' ? {width:SCREEN_WIDTH-50} : {width:SCREEN_WIDTH}}>
            <TouchableOpacity
              onPress={this.props.action}>
              <CardItem cardBody>
                <Image source={this.props.image ? {uri: this.props.image} : {uri: 'https://i1.wp.com/wowjapan.asia/wp-content/uploads/2016/06/123042593.jpg'}} style={styles.cardImage}/>
              </CardItem>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={this.props.action}>
            <CardItem>
              {/*<Left>*/}
                {/*<Thumbnail source={{uri: 'Image URL'}} /> */}
                <Body>
                  <Text>{this.props.title}</Text>
                  <Text note>{this.props.subtitle}</Text>
                </Body>
              {/*</Left>*/}
            </CardItem>
            </TouchableOpacity>
            {/*<CardItem>
                <Left>
                  <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                  </Button>
                </Left>
                <Body>
                  <Button transparent>
                    <Icon active name="chatbubbles" />
                      <Text>4 Comments</Text>
                    </Button>
                  </Body>
                  <Right>
                    <Text>11h ago</Text>
                  </Right>
                </CardItem>*/}
          </Card>
    );
  }
}

CourseCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  subtitle: PropTypes.string,
  action : PropTypes.func,
  page: PropTypes.string
}