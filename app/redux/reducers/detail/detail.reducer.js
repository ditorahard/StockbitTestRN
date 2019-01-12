export function detailMovie(state = {}, action) {
  switch (action.type) {
    case 'GET_DETAIL_MOVIE': {
    console.warn("Ini detail redux", action.payload)
      return {
        ...state,
        movie : action.payload
      };
    }
    default:
      return state;
    }
}