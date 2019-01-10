import React from 'react';
import { View, ImageBackground } from 'react-native';
import styles from './CourseHero.component.style';
import PropTypes from 'prop-types';	
import { Button, Text } from 'native-base';

export default class CourseHero extends React.Component {
  render() {
    return (
    <ImageBackground style={styles.hero} source={this.props.image? {uri:this.props.image} : {uri: 'https://i1.wp.com/wowjapan.asia/wp-content/uploads/2016/06/123042593.jpg'}}> 
      <View style={styles.heroContent}>
  	    <Text style={styles.whitetext}>
  	        {this.props.title}
  	    </Text>
        <Text style={styles.whitetextSubtitle}>
            {this.props.subtitle}
        </Text>
      </View>
      <View style={styles.heroContent}>
        <Button primary>
          <Text>
            Start Learning
          </Text>
        </Button>
      </View>
	  </ImageBackground>
    );
  }
}


CourseHero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  // action : PropTypes.func.isRequired,
  // content: PropTypes.array.isRequired,
  // size: PropTypes.number.isRequired,
  // styles: PropTypes.object.isRequired,
  // isReady: PropTypes.bool.isRequired,
}