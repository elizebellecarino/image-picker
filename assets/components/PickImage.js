import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button, ImageBackground, ScrollView, Image, Dimensions } from 'react-native';
import { Icon, Header, Left } from 'native-base';
import backgroundImage from "../../assets/background.jpg";
import ImagePicker from 'react-native-image-picker';

class PickImage extends Component {
    static navigationOptions = {
        header:null,
        drawerIcon: ({ tintColor }) => (
            <Icon name="ios-cafe" style={{ fontSize:24, color: tintColor}}/>
          )
    }; 

    state= {
     pickedImage:null
     }

     pickImageHandler = () => {
         ImagePicker.showImagePicker({title: 'Pick an Image'}, res => {
             if (res.didCancel) {
                 console.log('User cancelled');
             } else if (res.error) {
               console.log('Error', res.error);
             } else {
                this.setState({
                    pickedImage: { uri: res.uri }
                });
                this.props.passImage(this.state.pickedImage)
            }
       });
    }
    render() {
        return (
          <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
          <ScrollView> 
         <View style={styles.container}>
         <View style={styles.placeholder}>
          <Image source= {this.state.pickedImage} style={styles.previewImage}  />
        </View>
        <View style={styles.button}>
          <Button title= "Pick Image" onPress={this.pickImageHandler} />
        </View>
        </View>
        </ScrollView>
        </ImageBackground>
    )}
}

export default PickImage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  placeholder: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
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

