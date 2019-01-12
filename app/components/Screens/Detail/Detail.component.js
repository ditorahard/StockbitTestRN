import React from 'react';
import {View, Text, Image} from 'react-native';
import {Spinner, Container, Content} from 'native-base';
import PropTypes from 'prop-types';
import styles from './Detail.component.style';

export default class DetailScreen extends React.PureComponent {
  
  _renderMovieDetail = () => {
  	let content = null;
  	if(this.props.movieDetail){
  		content = (
  			<View>
          <Image
            style={styles.imageDetail}
            source={{uri: this.props.movieDetail.Poster}}
          />
          
	  			<Text>{this.props.movieDetail.Title}</Text>
	  			<Text>{this.props.movieDetail.Year}</Text>
	  			<Text>{this.props.movieDetail.Rated}</Text>
	  			<Text>{this.props.movieDetail.Released}</Text>
	  			<Text>{this.props.movieDetail.Runtime}</Text>
	  			<Text>{this.props.movieDetail.Genre}</Text>
	  			<Text>Director : {this.props.movieDetail.Director}</Text>
	  			<Text>Writer : {this.props.movieDetail.Writer}</Text>
	  			<Text>Actors : {this.props.movieDetail.Actors}</Text>
  			</View>
  		)
  	}
    else{
      content=(
        <Spinner />
      )
    }
  	return content;
  }

  render() {
  	return (
      <Container style={styles.container}>
        <Content>
      	{this._renderMovieDetail()}
        </Content>
      </Container>
    );
  }
}

DetailScreen.propTypes = {
  movieDetail: PropTypes.object
};