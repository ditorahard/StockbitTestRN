import React from 'react';
import {View, Text} from 'react-native';
import HomeScreen from '../../components/Screens/Home/Home.component';
import * as action from '../../redux/actions/home/home.actions';
import {connect} from 'react-redux';
import NavigationService from '../../routes/NavigationService';

class Home extends React.Component {
 	
  render() {
    return (
      <HomeScreen 
      movies={this.props.movies} 
      onChangeSearchQuery={(event) => {this.props.onChangeSearchQuery(event); this.props.getMovies(event,1);}} 
      searchQuery={this.props.searchQuery}
      getMovies={this.props.getMovies}
      openModal={this.props.openModal}
      closeModal={this.props.closeModal}
      />
    );
  }
}


const mapStateToProps = (state) => ({
  movies: state.home.movies,
  searchQuery: state.home.searchQuery,
  imageModal: state.home.imageModal,
});

const mapDispatchToProps = (dispatch) => {
	return{
    getMovies: (searchQuery, page) => dispatch(action.getMovies(searchQuery, page)),
    onChangeSearchQuery: () => dispatch(action.onChangeSearchQuery()),
    openModal: (image) => dispatch(action.openModal(image)),
    closeModal: () => dispatch(action.closeModal())
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);