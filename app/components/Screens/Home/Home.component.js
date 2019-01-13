import React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import Modal from 'react-native-modal';
import Searchbar from '../../Searchbar/Searchbar.component';
import MovieList from '../../List/Movie/MovieList.component';
import styles from './Home.component.style';
import PropTypes from 'prop-types';
import MovieCard from '../../Cards/Movie/MovieCard.component.js';
import NavigationService from '../../../routes/NavigationService.js';
import Subheader from '../../Subheader/Subheader.component';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      isModalVisible:false,
      modalImage:null,
    };
  }

  openModal(image){
    this.setState({
      isModalVisible:true,
      modalImage:image
    });
  }

  closeModal = () => {
    this.setState({
      isModalVisible:false,
      modalImage: null,
    })
  }

  _renderMovieList = () => {
    var content = null;
    if(this.props.movies){
      content = (
         <FlatList 
        data={this.props.movies}
        renderItem={({item}) => 
            <MovieCard 
            id={item.imdbID ? item.imdbID : null}
            title={item.Title ? item.Title : null} 
            subtitle={item.Year} 
            action={() => { NavigationService.navigate('Detail', {idMovie:item.imdbID}); }}
            actionImage={() => {this.openModal(item.Poster)}} 
            image={item.Poster}
            />
        }
        keyExtractor={(item, index) => index.toString()}
        />
      );
    }
    else{
      content = (
        <Text>
          Film tidak ditemukan. Silakan cari lagi dengan mengetik minimal 2 huruf.
        </Text>
      );
    }
    return content;
  }

  render() {
    return (
      <View>
       
        <Modal isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1 }}>
            <Image
              style={styles.imageModal}
              source={{uri: this.state.modalImage}}
            />
            
            <TouchableOpacity onPress={this.closeModal}>
              <Text style={styles.modalText}>Close Modal</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Subheader title="MOVIES" />
  	    <Searchbar 
        query={this.props.searchQuery} 
        onChangeText={this.props.onChangeSearchQuery}
        />
        <View style={styles.container}>
          {this._renderMovieList()}
        </View>
      </View>
    );
  }
}

HomeScreen.propTypes = {
  movies: PropTypes.array,
  onChangeSearchQuery: PropTypes.func.isRequired,
  searchQuery: PropTypes.string,
  modal: PropTypes.bool,
  getMovies: PropTypes.func.isRequired
};