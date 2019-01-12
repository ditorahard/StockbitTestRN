import axios from "axios";
import api from "../../../services/api";

export function onChangeSearchQuery(searchQuery) {
  return {   
      type: 'CHANGE_SEARCH_QUERY',
      payload : searchQuery
  }
}

export function getMovies(searchQuery, page){
	return (dispatch, getState) =>{
		axios
			.get(api.GET_URL() + '?apikey=' + api.GET_API_KEY() + '&s='+ searchQuery + '&page=' + page)
			.then((response) => {
				dispatch({
					type:'GET_MOVIES',
					payload:response.data,
				});
				console.warn("Ini get movies", response.data.Search)
			})
			.catch((error) =>{
				console.warn(error);
			})
   		return;
	}
}

export function openModal(image){
	return{
		type: 'OPEN_MODAL',
		payload: image,
		modal: true,
	}
}

export function closeModal(){
	return{
		type: 'CLOSE_MODAL',
		payload: null,
		modal: false,
	}
}