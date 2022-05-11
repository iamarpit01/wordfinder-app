import axios from 'axios';
import colorsConstant from './colors.constants'

export const fetchColors = word => async (dispatch, getState) => {
    dispatch(fetchColorsStarted())
    
    axios
      .post(`https://api.color.pizza/v1/names/?name=${word}`)
      .then(res => {
        dispatch(fetchColorsSuccessfull(res.data.colors));
      })
      .catch(err => {
        dispatch(fetchColorsError(err.message));
      });
}

export  const fetchColorsStarted = () => {
    return { 
        type: colorsConstant.FETCH_STARTED,
    }
}

export const fetchColorsSuccessfull = colorsList => {
    return {
        type: colorsConstant.FETCH_SUCCESSFULL,
        payload: colorsList
    }
}

export const fetchColorsError = error => {
    return {
        type: colorsConstant.FETCH_ERROR,
        payload: error
    }   
}

