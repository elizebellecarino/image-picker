
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TextInput, ImageBackground, Image } from 'react-native';
import  { Header, Left, Right, Icon } from 'native-base';
import DefaultInput from "../assets/components/UI/DefaultInput/DefaultInput"
import ButtonWithBackground from "../assets/components/UI/ButtonWithBackground/ButtonWithBckground";
import backgroundImage from "../assets/background.jpg";
import SettingsScreen from './settingsScreen';
import text from "../assets/text.png"
import validate from '../src/utility/Validation';


class HomeScreen extends Component {
  state = {
    controls: {
      email: {
        value: "",
        valid: false,
        validationRules: {
          isEmail: true
        }
      },
      password: {
        value: "",
        valid: false,
        validationRules: {
          minLength: 6
        }
      },
      confirmPassword: {
        value: "",
        valid: false,
        validationRules: {
          equalTo: 'password'
        }
      },
    }
  }

  static navigationOptions= {
    drawerIcon: ({ tintColor }) => (
      <Icon name="home" style={{ fontSize:24, color: tintColor}}/>
    )
  }

  loginHandler = () => {
      LoginScreen ();
  }

  updateInputState = (key, value) => {
    let connectedValue = {};
    if (this.state.controls[key].validationRules.equalTo) {
      const equalControl = this.state.controls[key].validationRules.equalTo
      const equalValue = this.state.controls[equalControl].value;
      connectedValue = {
        ...connectedValue,
        equalTo: equalValue
      };
    }
    if (key === 'password') {
        connectedValue = {
        ...connectedValue,
        equalTo: value
      };
    }
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,  
            confirmPassword: {
            ...prevState.controls.confirmPassword,
            valid: key === 'password' ? validate(
              prevState.controls.confirmPassword.value, 
              prevState.controls.confirmPassword.validationRules, connectedValue) 
            : prevState.controls.confirmPassword.valid
          },
          [key]: {
            ...prevState.controls[key],
            value: value,
            valid: validate(
              value, prevState.controls[key].validationRules, 
              connectedValue)
          },
      
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
    <View style={styles.container}>
    <Image source={text} />
      
        <View style={styles.inputContainer} >
          <DefaultInput 
             placeholder="Your Email Address" 
             style={styles.input} 
             value={this.state.controls.email.value}
             onChangeText= {(val) => this.updateInputState('email', val)}
             />
          <DefaultInput 
             placeholder="Password" 
             style={styles.input}  
             value= {this.state.controls.password.value}
             onChangeText= {val => this.updateInputState('password', val)}
             />
          <DefaultInput 
             placeholder="Confirm Password" 
             style={styles.input} 
             value= {this.state.controls.confirmPassword.value}
             onChangeText= {val => this.updateInputState('confirmPassword', val)}
             />
        </View>
        
        <ButtonWithBackground color="white" onPress={() => this.props.navigation.navigate('Capture it!')}>Submit</ButtonWithBackground>
    </View>
    </ImageBackground>      
    );
  }
}
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
      flex: 1,
       justifyContent: "center",
       alignItems:"center"
    },
    backgroundImage: {
       width: "100%",
       flex: 1
    },

    inputContainer: {
        width: "80%"
    },

  input: {
    color: "black",
    fontFamily: 'Baskerville-BoldItalic'


  }

});
