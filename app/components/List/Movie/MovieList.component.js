import React from 'react';
import { FlatList } from 'react-native';
import styles from './MovieList.component.style';
import PropTypes from 'prop-types';
import MovieCard from '../../Cards/Movie/MovieCard.component.js';
import NavigationService from '../../../routes/NavigationService.js';

export default class MovieList extends React.PureComponent {
  render() {
    return (
          <FlatList 
		    data={this.props.data}
		    renderItem={({item}) => 
		        <MovieCard 
		        id={item.imdbID}
		        title={item.Title} 
		        subtitle={item.Year} 
		        action={() => { NavigationService.navigate('Detail', {idMovie:item.imdbID}); }}
		        actionImage={() => {this.props.actionImage(item.Poster)}} 
		        image={item.Poster}
		        />
		    }
		    keyExtractor={(item, index) => index.toString()} 
		    />
    );
  }
}

MovieList.propTypes = {
  data: PropTypes.array,
  actionImage: PropTypes.func,
  page: PropTypes.func,
}