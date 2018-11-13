import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button, ImageBackground, ScrollView, Image, Dimensions } from 'react-native';
import { Icon, Header, Left } from 'native-base';
import backgroundImage from "../assets/background.jpg";
import DefaultInput from '../assets/components/UI/DefaultInput/DefaultInput';
import MainText from '../assets/components/UI/MainText/MainText';
import HeadingText from '../assets/components/UI/HeadingText/HeadingText';
import imagePlaceholder from '../assets/starbucks.png';
import LocateMe from '../assets/components/LocateMe';
import PickImage from '../assets/components/PickImage';

class FeedScreen extends Component {
    static navigationOptions = {
        header:null,
        drawerIcon: ({ tintColor }) => (
            <Icon name="ios-camera" style={{ fontSize:24, color: tintColor}}/>
          )
    }; 

    state= {
      image: {
        value: null,
        valid: false 
      }
    }

    imagePickedHandler = image => {
     this.setState(prevState => {
       return {
         controls: {
           ...prevState.controls,
           image: {
             value: image,
             valid: true
           }
         }
       }
     })
    }
   
 render() {
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
    <Header style={{backgroundColor:'black'}}>
    <Left style={{marginLeft:"-40%"}}>
              <Icon name='menu' style={{paddingRight:50, color:'white'}}
                onPress={() => this.props.navigation.openDrawer() }/>
          </Left>
    </Header>
      <ScrollView> 
        <View style={styles.container}>
        <MainText>
          <HeadingText>Share a Drink with us!</HeadingText>
        </MainText>
        <PickImage onImagePicked={this.imagePickedHandler} />
        <LocateMe />
          <DefaultInput placeholder="Place Name"/>
        <View style={styles.button}>
          <Button title="Share It!" onPress={() => this.props.navigation.navigate('Shared Drinks')}></Button>
        </View> 
        </View>
      </ScrollView>
    </ImageBackground>  
    );
  }
}



export default FeedScreen;
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
