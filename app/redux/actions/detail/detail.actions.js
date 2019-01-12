import axios from "axios";
import api from "../../../services/api";

export function getDetailMovie(idMovie){
	return (dispatch, getState) =>{
		axios
			.get(api.GET_URL() + '?apikey=' + api.GET_API_KEY() + '&i=' + idMovie)
			.then((response) => {
				dispatch({
					type:'GET_DETAIL_MOVIE',
					payload:response.data,
				});
				console.warn("Ini get detail", response.data)
			})
			.catch((error) =>{
				console.warn(error);
			})
   		return;
	}
}