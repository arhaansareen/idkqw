import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import BottomTabNavigator from './components/BottomTabNavigator';
import LoginScreen from './screens/Login';
import { Rajdhani_600SemiBold } from '@expo-google-fonts/rajdhani';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import SearchScreen from './screens/Search';
import db from './config';
import * as Font from 'expo-font';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { fontLoaded: false };
  }

  async loadFonts() {
    await Font.loadAsync({
      Rajdhani_600SemiBold: Rajdhani_600SemiBold,
    });
    this.setState({
      fontLoaded: true,
    });
  }
  componentDidMount() {
    this.loadFonts();
  }
  render() {
    const { fontLoaded } = this.state;
    if (fontLoaded) {
      return <AppContainer />;
    }
    return null;
  }
}

const AppSwitchContainer = createSwitchNavigator({
  Login:{
    screen:LoginScreen
  },
  Search:{
    screen:SearchScreen
  }
},
{initialRouteName:'Login'}
)
const AppContainer = createAppContainer(AppSwitchContainer)

