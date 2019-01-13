export function home(state = {}, action) {
  switch (action.type) {
    case 'GET_MOVIES': {
      return {
        ...state,
        movies : action.payload.Search,
      };
    }
    case 'CHANGE_SEARCH_QUERY':{
      return {
        ...state,
        searchQuery : action.payload
      };
    }
    default:
      return state;
    }
}