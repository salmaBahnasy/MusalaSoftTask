/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import RNRestart from 'react-native-restart'; // Import package from node modules

import {
  Linking,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { FONTS, SIZES } from '../../constants';
import I18n from '../../Localization/i18n';
import { EventRegister } from 'react-native-event-listeners'
import { useTheme } from '@react-navigation/native';

const MainScreenURL = "demo://app/home"

const Settings = () => {
  const [isEnabled, setisEnabled] = useState()
  const [darkMode, setDarkMode] = useState()
  const { colors } = useTheme();

  useEffect(() => {
    AsyncStorage.getItem('lang').then(res => {
      if (res == 'en') {
        setisEnabled(true)
      } else {
        setisEnabled(false)
      }

    })
    AsyncStorage.getItem('isDark').then(res => {
      if (res == 'true') {
        setDarkMode(true)
      } else {
        setDarkMode(false)
      }
    })
  }, [])

  const changeLanguage = (lang:string, enable:boolean) => {
    AsyncStorage.setItem('lang', lang, () => {
      setisEnabled(!enable)
      I18n.locale = 'bul'
      RNRestart.Restart();

    })
  }

  return (
    <SafeAreaView style={{ ...styles?.container,backgroundColor:colors.card  }}>

      <TouchableOpacity
        onPress={() => {
          changeLanguage(isEnabled ? 'bul' : 'en', isEnabled)
        }}
        style={{ ...styles?.row}}>
        <Text style={{
          ...FONTS?.body4, color: colors.text
        }}>{I18n.t('language')}  {isEnabled ? 'en' : 'bul'}</Text>
        <Switch
          // trackColor={{ false: "#767577", true: "#81b0ff" }}
          // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          // ios_backgroundColor="#3e3e3e"
          onValueChange={() => {
            changeLanguage(isEnabled ? 'bul' : 'en', isEnabled)
          }}
          value={isEnabled}
        />
      </TouchableOpacity>
      <View style={{ ...styles?.row }}>
        <Text style={{
          ...FONTS?.body4, color: colors.text
        }}>{I18n.t('darkMode')}</Text>
        <Switch
          onValueChange={(value) => {
            setDarkMode(value)
            AsyncStorage.setItem("isDark", JSON.stringify(value))
            EventRegister.emit('ChangeThemeListener', value)

          }}
          value={darkMode}
        />
      </View>
      {/* <Text 
      style={{color: colors.text}}
      onPress={() => {
        // alert("press")
        console.log("MainScreenURL",MainScreenURL)
        Linking.openURL(MainScreenURL)
      }}>MainScreenURL----:-{MainScreenURL}</Text> */}
    </SafeAreaView>
  );
};



export default Settings;

const styles = StyleSheet.create({
  container: {
    width: SIZES?.width,
    height: SIZES?.height,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})