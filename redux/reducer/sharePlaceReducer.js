import { ADD_CAPTION, ADD_IMAGE } from '../actions/actionTypes';

initialState = {
    placeName: null,
    placeImage:null
}

export default reducer = (state = initialState, action) => {
    switch(action.type){

        case ADD_CAPTION:
        console.log(action.placeName)
        return{
            ...state,
            placeName: action.placeName
        }
        
        case ADD_IMAGE: 
        return {
            ...state,
            placeImage: action.placeImage
        }
        default:
        return state;
    }
    
       

}