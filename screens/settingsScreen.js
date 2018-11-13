import React, { Component } from 'react';
import { Platform, StyleSheet, Text, Button, View, TextInput, ImageBackground } from 'react-native';
import { Icon, Header, Left } from 'native-base';
import backgroundImage from "../assets/background.jpg";

class SettingsScreen extends Component {
    static navigationOptions = {
        header:null,
        drawerIcon: ({ tintColor }) => (
            <Icon name="ios-cafe" style={{ fontSize:24, color: tintColor}}/>
          )
    };
    state ={
      text:""
          }
  render() {
   return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
    <Header>
    <Left style={{marginLeft:"-40%"}}>
              <Icon name='menu' style={{paddingRight:50}}
                onPress={() => this.props.navigation.openDrawer() }/>
          </Left>
    </Header>
      <View>
         
          <Button style={{paddingTop:100}} title="Go to Home Screen" onPress={() => this.props.navigation.navigate('Home')}/>
      </View>
      </ImageBackground>
    );
  }
}
export default SettingsScreen;
const styles = StyleSheet.create({
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
});
