
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Dimensions, SafeAreaView,Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import HomeScreen from './screens/homeScreen';
import SettingsScreen from './screens/settingsScreen';
import FeedScreen from './screens/feedScreen';
import { createMaterialTopTabNavigator } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
class App extends Component {
  render() {
    return (
      <AppDrawerNav style={{ backgroundColor: "red" }} />
    );
  }
}
const Drawer = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={{ height: 150, backgroundColor: 'white', alignItems: "center", justifyContent: "center" }}>
      <Image source={require("./assets/sb.png")} style={{ height: 120, width: 120, borderRadius: 60 }} />

    </View>
    <ScrollView>

      <DrawerItems {...props} />

    </ScrollView>
  </SafeAreaView>
)

const AppDrawerNav = createDrawerNavigator({
  Home: HomeScreen,
  'Capture it!': FeedScreen,
  'Shared Drinks': SettingsScreen
}, {
    contentComponent: Drawer,

    //drawerWidth: width,
    contentOptions: {
      activeTintColor: 'blue',

    }
  }
)

export default App;









