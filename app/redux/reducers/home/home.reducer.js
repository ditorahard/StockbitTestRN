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
    case 'OPEN_MODAL':{
      console.warn("action modal open", action.modal, action.payload)
      return {
        ...state,
        imageModal: action.payload,
        modal:action.modal,
      };
    }
    case 'CLOSE_MODAL':{
      console.warn("action modal close", action.modal, action.payload)
      return {
        ...state,
        imageModal: null,
        modal:action.modal, 
      };
    }
    default:
      return state;
    }
}