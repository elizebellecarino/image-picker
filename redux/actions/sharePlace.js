import { ADD_CAPTION, ADD_IMAGE} from './actionTypes';

export const addPlace = (placeName) => {
 return dispatch => {
     const placeData = {
         name: placeName
     }; 
     //fetch("https://project-map-222301.firebaseio.com/sharePlaces.json", {
      //   method: "POST",
        // body: JSON.stringify(placeData)
     //})
    //.catch(err => console.log(err))
    //.then(res => res.json())
    //.then(parsedRes => {
      //  console.log(parsedRes);
    //})
  };
};

export const addImage = (placeImage) => {
    return {
        type: ADD_IMAGE,
        placeImage: placeImage
    }
}
