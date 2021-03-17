import { FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from '../actions'

const initialState = {
    data: [],
    isLoading: false,
    errors: '',
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_DATA_START:
            return {
                ...state,
                isLoading: true,
                errors: ''
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                errors: '',
                data: action.payload
            }
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                errors: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}