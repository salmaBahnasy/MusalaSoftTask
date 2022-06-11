/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image
} from 'react-native';
import { images, SIZES } from '../../constants';
import I18n from 'react-native-i18n';


const Splash = () => {
  const navigation = useNavigation()
  useEffect(() => {
    setTimeout(() => {
      AsyncStorage.getItem('lang').then(lang => {
        console.log({ lang })
        if (lang) {
          I18n.locale = lang;
        } else {
          AsyncStorage.setItem('lang', 'en')
        }
      })
      navigation.navigate('MainScreen')
    }, 3000);
  }, [])
  return (
    <SafeAreaView
      style={{ ...styles.container }}
    >
      <Image
        source={images?.logo}
        style={{
          ...styles.images
        }}
      />
    </SafeAreaView>
  );
};



export default Splash;

const styles = StyleSheet.create({
  container: {
    width: SIZES?.width,
    height: SIZES?.height,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  images: {
    width: '50%',
    height: SIZES?.height / 4,
    resizeMode: 'contain'
  }
})
