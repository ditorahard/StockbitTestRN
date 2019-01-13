import React from 'react';
import {View, Text} from 'react-native';
import HomeScreen from '../../components/Screens/Home/Home.component';
import * as action from '../../redux/actions/home/home.actions';
import {connect} from 'react-redux';
import NavigationService from '../../routes/NavigationService';

class Home extends React.Component {
 	
  searchMovies = (event) => {
    this.props.onChangeSearchQuery(event); 
    this.props.getMovies(event,1);
  }
  
  render() {
    return (
      <HomeScreen 
      movies={this.props.movies} 
      onChangeSearchQuery={this.searchMovies} 
      searchQuery={this.props.searchQuery}
      getMovies={this.props.getMovies}
      />
    );
  }
}


const mapStateToProps = (state) => ({
  movies: state.home.movies,
  searchQuery: state.home.searchQuery,
});

const mapDispatchToProps = (dispatch) => {
	return{
    getMovies: (searchQuery, page) => dispatch(action.getMovies(searchQuery, page)),
    onChangeSearchQuery: () => dispatch(action.onChangeSearchQuery()),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);