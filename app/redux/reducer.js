
const initialState = {
    movies: [],
    loading: true,
		itemLength: 10,
    errorMessage: '',
}

const GET_MOVIES = 'GET_MOVIES';
const GET_MOVIES_FULFILLED = 'GET_MOVIES_FULFILLED';
const GET_MOVIES_REJECTED = 'GET_MOVIES_REJECTED';
const SET_ITEM_LENGTH = 'SET_ITEM_LENGTH';


export default reducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_MOVIES:
    return {...state, loading: action.payload};
    case GET_MOVIES_FULFILLED:
    return {...state, movies: action.payload, loading: action.loading};
    case GET_MOVIES_REJECTED:
    return {...state, errorMessage: action.payload, loading: action.loading};
		case SET_ITEM_LENGTH:
		return {...state, itemLength:action.payload};
    default:
    return state;
  }
}

export const fetchData = (bool) => {
  return {
    type: GET_MOVIES,
    payload: bool,
  };
}

export const fetchDataFulfilled = (data) => {
  return {
    type: GET_MOVIES_FULFILLED,
    payload: data,
    loading: false,
  };
}

export const fetchDataRejected = (error) => {
  return {
    type: GET_MOVIES_REJECTED,
    payload: error,
    loading: false,
  };
}

export const setItemLength = (number) => {
  return {
    type: SET_ITEM_LENGTH,
    payload: number,
  };
}
