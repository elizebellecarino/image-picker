import { ADD_CAPTION, ADD_IMAGE } from './actionTypes';

export const addPlace = (placeName) => {
 return {
     type: ADD_CAPTION,
     placeName: placeName
 }
}

export const addImage = (placeImage) => {
    return {
        type: ADD_IMAGE,
        placeImage: placeImage
    }
}

    
   