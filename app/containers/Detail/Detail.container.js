import React from 'react';
import {View, Text} from 'react-native';
import DetailScreen from '../../components/Screens/Detail/Detail.component';
import * as action from '../../redux/actions/detail/detail.actions';
import {connect} from 'react-redux';
import NavigationService from '../../routes/NavigationService';

class Detail extends React.Component {
 	
  componentDidMount(){
    const { navigation } = this.props;
    const idMovie = navigation.getParam('idMovie', 'NO-ID');
    this.props.getDetailMovie(idMovie);
    var movieDetail = this.props.movieDetail;
  }

  render() {
    return (
      <DetailScreen movieDetail={this.props.movieDetail} />
    );
  }
}


const mapStateToProps = (state) => ({
  movieDetail: state.detailMovie.movie,
});

const mapDispatchToProps = (dispatch) => {
	return{
    getDetailMovie: (idMovie) => dispatch(action.getDetailMovie(idMovie)),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);