import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import LottieView from 'lottie-react-native';
import Anime from './AnimateScreen';
import { Button, Icon } from 'react-native-elements';
import {createStackNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation';

import HomeScreen from './HomeScreen';
import EchoScreen from './EchoScreen';
import GuidelineScreen from './GuidelineScreen';
import Severe1Screen from './as/Severe1Screen';
import Severe2Screen from './ar/Severe2Screen';
import Severe3Screen from './mr/Severe3Screen';
import Severe4Screen from './ms/Severe4Screen';
import Severe5Screen from './tr/Severe5Screen';

import AstreatScreen from './as/AstreatScreen';
import ArtreatScreen from './ar/ArtreatScreen';
import MstreatScreen from './ms/MstreatScreen';
import MrtreatScreen from './mr/MrtreatScreen';
import TrtreatScreen from './tr/TrtreatScreen';


const App = createStackNavigator({


  Home:           {screen: HomeScreen}, 
  Echo:           {screen: EchoScreen},
  Guideline:      {screen: GuidelineScreen},
  Astreat:        {screen: AstreatScreen},
  Artreat:        {screen: ArtreatScreen},
  Mstreat:        {screen: MstreatScreen},
  Mrtreat:        {screen: MrtreatScreen},
  Trtreat:        {screen: TrtreatScreen},

  Severe1:        {screen: Severe1Screen},
  Severe2:        {screen: Severe2Screen},
  Severe3:        {screen: Severe3Screen},
  Severe4:        {screen: Severe4Screen},
  Severe5:        {screen: Severe5Screen},


}, {
  defaultNavigationOptions: {
    title: '弁膜症 アプリ',
    headerStyle: { backgroundColor : 'rgb(114,95,70)'},
    headerTitleStyle: {color: '#fff'},
    headerTintColor: "#fff",
    headerBackTitle: null,
    headerTitleStyle: {
      width: '92%',
      textAlign: 'center',
     },
  },
});



const Echo = createStackNavigator({
  Echo:           {screen: EchoScreen},
});

const Guideline = createStackNavigator({
  Guideline:      {screen: GuidelineScreen},
});



const Tabs = createBottomTabNavigator({
App:  {
  screen: App, 
  navigationOptions: {
    tabBarLabel: 'Home',
    tabBarIcon: () => (
      <Icon 
            name= {"home"} 
            size={22} 
      />
    )
  }     
},
Echo:  {
  screen: Echo,
  navigationOptions: {
    tabBarIcon: () => (
      <Icon 
        name= {"highlight"} 
        size={22} 
      />
    )
  }     
},
Guideline:{
  screen: Guideline,
  navigationOptions: {
    tabBarIcon: () => (
      <Icon name="import-contacts" size={20} />
    )
  }     
}

}, {
tabBarOptions: { 
activeTintColor: 'black', 
inactiveTintColor: 'black',
activeBackgroundColor: '#fff',
inactiveBackgroundColor: '#fff',
labelStyle: {} }
});

export default createAppContainer(Tabs);
    
    


