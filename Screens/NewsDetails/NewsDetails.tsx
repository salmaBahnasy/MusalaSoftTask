/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { useNavigation, useRoute, useTheme } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  View,
  ScrollView,
  RefreshControl
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { COLORS, FONTS, icons, SIZES } from '../../constants';
import EmptyView from '../UI/EmptyView';
import MainHeader from '../UI/MainHeader';
import styles from './Styles';
import moment from 'moment';
import I18n from 'react-native-i18n';



const NewsDetails = () => {
  const route = useRoute()
  const navigation = useNavigation()

  const demoNews = {
    "source": {
      "id": null,
      "name": "Thestatesman.com"
    },
    "author": "SNS Web",
    "title": "‘Olympics in 2021 unrealistic unless COVID-19 vaccine found’ - The Statesman",
    "description": "Olympics is not the only sporting tournament to be pushed back because of the dreaded coronavirus pandemic and high-profile tournaments including the cash-rich Indian Premier League (IPL) have been affected.",
    "url": "https://www.thestatesman.com/sports/olympics-in-2021-unrealistic-unless-covid-19-vaccine-found1502879079-1502879079.html",
    "urlToImage": "https://www.thestatesman.com/wp-content/uploads/2020/03/Tokyo2020.jpg",
    "publishedAt": "2020-04-19T14:41:24Z",
    "content": "Holding the Tokyo Olympics any time before a vaccine is found will be “very unrealistic,” according to a leading global health expert. Professor Devi Sridhar said that the development of the vaccine will be key to when the Olympics can be held.\r\nSridhar, howe… [+1886 chars]"
  }
  const [valid, setValid] = useState(true)
  const [loading, setLoading] = useState(true)
  const [newsDetailsData, setNewsDetailsData] = useState(demoNews)   //route.params?.item
  const { colors } = useTheme();
  // ----------------------------------------------------------------
  useEffect(() => {
    setNewsDetailsData(route.params?.item?route.params?.item:demoNews)
  }, [])
  return (
    <SafeAreaView
      style={{
        padding: SIZES?.padding,
        ...styles?.container,
        backgroundColor: colors.card,
      }}>
      <MainHeader
        leftAction={() => {  navigation.navigate('MainScreen'); }}
        img={icons?.back}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          width:'90%',
          alignSelf:'center'
        }}
      >
        <View style={{ ...styles.row_between }}>
          <Text
            style={{
              ...styles.bgtxt,
              color: colors.text,
            }}>
            {newsDetailsData?.source?.name}
          </Text>
          <Text
            style={{
              ...FONTS?.body5,
              color: colors.text

            }}>

            {moment(newsDetailsData?.publishedAt).locale(I18n.locale).format(
              'D MMM YYYY hh:mm a',
            )}
          </Text>
        </View>
        <View>
          <Text numberOfLines={2} style={{
            ...FONTS?.h2, color: colors.text
          }}>
            {newsDetailsData?.title}
          </Text>
          <Text numberOfLines={1} style={{
            ...FONTS?.body5,
            marginVertical: SIZES.padding,
            color: colors.text
          }}>
            {newsDetailsData?.author}
          </Text>
        </View>
        <View>
          <Image
            source={{ uri: newsDetailsData?.urlToImage }}
            style={{
              width: '100%',
              alignSelf: 'center',
              height: SIZES.height / 3,
              backgroundColor: 'red',
              borderRadius: SIZES?.radius
            }}
          />
        </View>
        <Text style={{
          ...FONTS?.h3,
          marginVertical: SIZES.padding,
          color: colors.text


        }}>
          {newsDetailsData?.title}
        </Text>
        <Text style={{
          ...FONTS?.body3,
          marginVertical: SIZES.padding,
          color: colors.text


        }}>
          {newsDetailsData?.description}
        </Text>


      </ScrollView>
    </SafeAreaView>
  )

};



export default NewsDetails;
