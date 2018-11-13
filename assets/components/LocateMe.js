import React, { Component } from 'react';
import { StyleSheet, View,  Button, ImageBackground, ScrollView, Image, Dimensions } from 'react-native';
import { Icon, Header, Left } from 'native-base';
import backgroundImage from "../../assets/background.jpg";
import MapView from 'react-native-maps';

class LocateMe extends Component {
    static navigationOptions = {
        header:null,
        drawerIcon: ({ tintColor }) => (
            <Icon name="ios-cafe" style={{ fontSize:24, color: tintColor}}/>
          )
    }; 
   

   state= {
     focusedLocation: {
       latitude: 13.771656,
       longitude: 121.064692,
       latitudeDelta: 0.0122,
       longitudeDelta: 
       Dimensions.get('window').width / 
       Dimensions.get('window').height * 
       0.0122
     },
     locationChosen: false
   }


   pickLocationHandler = event => {
      const coords = event.nativeEvent.coordinate;
      this.map.animateToRegion({
        ...this.state.focusedLocation,
        latitude: coords.latitude, 
        longitude: coords.longitude
      })
      
      this.setState(prevState => {
        return {
          focusedLocation: {
            ...prevState.focusedLocation,
            latitude: coords.latitude,
            longitude: coords.longitude
          },
          locationChosen: true
        };
      });
   
    }

 
   getLocationHandler = () => {
     navigator.geolocation.getCurrentPosition(pos => {
       const coordsEvent = {
         nativeEvent: {
           coordinate: {
             latitude: pos.coords.latitude,
             longitude: pos.coords.longitude
           }
         }
       };
       this.pickLocationHandler(coordsEvent);
     },
     err => {
       console.log(err);
       alert('Fetching the Position failed, please pick one manually!');
        
     })
   }
   render() {
    let marker = null;

    if (this.state.locationChosen) {
      marker = <MapView.Marker coordinate={this.state.focusedLocation} />;
    }
   return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
    <ScrollView> 
    <View style={styles.container}>
      <MapView
          initialRegion={this.state.focusedLocation}
          style={styles.map}
          onPress={this.pickLocationHandler}
          ref={ref => this.map = ref } >
          {marker}
        </MapView>
        <View style={styles.button}>
          <Button title="Locate Me" onPress={this.getLocationHandler} />
        </View>
       </View>
    </ScrollView> 
    </ImageBackground>    
    );
  }
}



export default LocateMe;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  placeholder: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'transparent',
    width:'80%',
    height: 150
  },
  button: {
     margin: 8
  },
  previewImage: {
     width: "100%",
     height: "100%"
  },

  backgroundImage: {
    width: "100%",
    flex: 1
 },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  map: {
    width: '100%',
    height: 250
  }
});

