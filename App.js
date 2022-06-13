import React, { useEffect, useState } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { EventRegister } from 'react-native-event-listeners'

import Tabs from './navigation/tabs';
import Splash from './Screens/Splash/Splash';
import NewsDetails from './Screens/NewsDetails/NewsDetails';
import AsyncStorage from '@react-native-async-storage/async-storage';
import linking from './Linking';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent"
  }
}
const config={
  screens:{
    MainScreen:'home',
    NewsDetails:'newsDetails'
  }
}
const Stack = createStackNavigator();

const App = () => {
  const [darkApp, setDarkApp] = useState()
  const AppTheme = darkApp ? DarkTheme : DefaultTheme
  useEffect(() => {
    AsyncStorage.getItem('isDark').then(res => {
      if (res == 'true') {
        setDarkApp(true)
      } else {
        setDarkApp(false)

      }
    })
  }, [])
  useEffect(() => {
    let listener = EventRegister.addEventListener('ChangeThemeListener', (data) => {
      setDarkApp(data)
    })
    return () => {
      true
      EventRegister.removeEventListener(listener)
    }
  }, [])
  return (
    <NavigationContainer
      // linking={{
      //   prefixes: ["demo://app"],
      //   config,
      // }}
      linking={linking}
      theme={AppTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'Splash'}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="MainScreen" component={Tabs} />
        <Stack.Screen name="NewsDetails" component={NewsDetails} />


      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;