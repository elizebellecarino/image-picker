import React, { Component } from 'react';
import { Platform, StyleSheet, Text, Button, View, TextInput, ImageBackground , Image} from 'react-native';
import { Icon, Header, Left } from 'native-base';
import backgroundImage from "../assets/background.jpg";
import { connect } from 'react-redux'
class SettingsScreen extends Component {
    static navigationOptions = {
        header:null,
        drawerIcon: ({ tintColor }) => (
            <Icon name="ios-cafe" style={{ fontSize:24, color: tintColor}}/>
          )
    };
  
  render() {
   return (
     <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
    <Header>
    <Left style={{marginLeft:"-40%"}}>
              <Icon name='menu' style={{paddingRight:50}}
                onPress={() => this.props.navigation.openDrawer() }/>
          </Left>
    </Header>
 
     
    <View style={styles.placeholder}>
      <Image source={this.props.placeImage} style={styles.previewImage} />
      
     
     <Text>{this.props.placeName}</Text>
     
      </View>
      </ImageBackground>
    );
  }
}
const mapStateToProps = state => {
  return {
  placeName: state.sharePlace.placeName,
    placeImage: state.sharePlace.placeImage
  }
}
const styles = StyleSheet.create({
  placeholder: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#d3d3d3',
    width: '80%',
    height: 150,
    alignSelf: 'center',

  },
  previewImage: {
    width: "100%",
    height: "100%"
    
 },
  container: {
    flex: 1,
    paddingTop:100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  backgroundImage: {
    width: "100%",
    flex: 1
 }
  
});


export default connect(mapStateToProps)(SettingsScreen);