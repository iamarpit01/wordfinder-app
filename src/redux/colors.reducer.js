import colorsConstant from './colors.constants';

const initialState = {
    colorsList: [],
    loading: false,
    error: null
}

export default function colorsReducer(state = initialState, action) {
    switch (action.type) {
      case colorsConstant.FETCH_STARTED:
        return {
          ...state,
          loading: true
        };
      case colorsConstant.FETCH_SUCCESSFULL:
        return {
          ...state,
          loading: false,
          error: null,
          colorsList: [...action.payload]
        };
      case colorsConstant.FETCH_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      default:
        return state;
    }
  }