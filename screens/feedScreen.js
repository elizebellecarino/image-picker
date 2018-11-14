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
import { addPlace, addImage } from '../redux/actions/sharePlace';
import { connect } from 'react-redux'

class FeedScreen extends Component {
    static navigationOptions = {
        header:null,
        drawerIcon: ({ tintColor }) => (
            <Icon name="ios-camera" style={{ fontSize:24, color: tintColor}}/>
          )
    }; 

    state= {
      placeName: '',
      img: null
    }

    changePlaceName = (val) => {
      this.setState({
        placeName: val
      })
    }

    shareButton = () => {
      console.log('Button Clicked')
      this.props.addPlaceName(this.state.placeName)
      this.props.addPlaceImage(this.state.img)
      this.props.navigation.navigate('Shared Drinks')

    }

   imagePickedHandler = image => {
     this.setState({
       img: image
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
        <PickImage passImage={this.imagePickedHandler}/>
        <LocateMe />
          <DefaultInput placeholder="Place Caption"
          value={this.state.placeName}
          onChangeText={val => this.changePlaceName(val)}
          />
        </View>
      </ScrollView>
      <Button title="Share It!" onPress={this.shareButton}></Button>
    </ImageBackground>  
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPlaceName: (placeName) => dispatch(addPlace(placeName)),
    addPlaceImage: (placeImage) => dispatch(addImage(placeImage))
  }
}



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

export default connect(null, mapDispatchToProps)(FeedScreen);