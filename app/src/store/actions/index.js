import axios from "axios"

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchData = () => dispatch => {
    dispatch({ type: FETCH_DATA_START })
    axios.get('https://www.anapioficeandfire.com/api/houses?pageSize=25')
        .then(res => dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FETCH_DATA_FAILURE, payload: err.message }))
}