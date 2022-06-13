/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { useNavigation, useTheme } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  View,
  RefreshControl
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { COLORS, FONTS, icons, SIZES } from '../../constants';
import EmptyView from '../UI/EmptyView';
import { getNews, SearchFunction } from './Services/Services';
import styles from './Styles';
import I18n from '../../Localization/i18n';
import NewsCard from '../UI/NewsCard';




const MainScreen = () => {
  const navigation = useNavigation()
  const [news, setNews] = useState([])
  const [valid, setValid] = useState(true)
  const [loading, setLoading] = useState(true)
  const { colors } = useTheme();

  useEffect(() => {
    if (loading) {
      GetNews()
    }

  }, [])
  const GetNews = () => {
    getNews().then(res => {
      console.log({ res })
      if (res) {
        setNews(res)
      } else {
        setNews([])
      }
      setLoading(false)
    })
  }
  const searchFunction = (search: any) => {
    SearchFunction(search).then(res => {
      console.log({ res })
      setNews(res)
    })
  }

  // const manualSearch = (search: string) => {
  //   let arr: React.SetStateAction<never[]> = [];
  //   let i;
  //   let n;
  //   console.log('search function')
  //   for (i = 0; i < news.length; i++) {

  //     console.log("index1", i)

  //     if (news[i]?.title?.toLowerCase().includes(search.toLowerCase()) ||
  //       news[i]?.description?.toLowerCase().includes(search.toLowerCase())) {
  //       console.log("index", i)
  //       console.log("true", news[i])
  //       let x = news[i]
  //       arr.push(x)
  //     } else {
  //       n = false
  //       // console.log("false")
  //     }
  //     console.log({ arr })
  //     if (arr?.length > 0) {
  //       setNews(arr)
  //     } else if (arr?.length == 0 && search != '') {
  //       setNews([])

  //     } else {
  //       GetNews()
  //     }
  //   }
  // }
  // ----------------------------------------------------------------
  function SearchView() {
    return <View style={{ backgroundColor: colors.card }}>
      <Text
        style={{
          ...styles?.header,
          color: colors.text
        }}>
        {I18n.t('TOPNEWS')}
      </Text>
      <View
        style={{
          ...styles?.searchRow,
          // backgroundColor:colors.card
        }}>
        <Image
          source={icons?.search}
          style={{ ...styles?.smallIcon }}
        />
        <TextInput
          style={{ color: '#333', height: 50 }}
          placeholder={I18n.t('Search')}
          onChangeText={(val) => {
            if (val != '') {
              searchFunction(val)
              // manualSearch(val)
            } else {
              GetNews()
            }
          }}
        />
      </View>

    </View>
  }

  function newsView() {
    type news = {
      item: object;
      index: number;
    };
    const renderItem: React.FC<news> = ({ item, index }) => {
      return (
        <NewsCard item={item} index={index} />
      )
    }
    return (
      <FlatList
        renderItem={renderItem}
        data={news}
        ListEmptyComponent={() => {
          return <EmptyView
            img={icons?.news}
            title={'there is no news'}
            imgstyle={{ marginTop: 100 }}
            txtstyle={{
              color: COLORS?.darkgray,
              textTransform: 'uppercase'
            }}
          />
        }}
        refreshControl={<RefreshControl
          enabled={true}
          refreshing={loading}
          onRefresh={() => GetNews()} />}
        showsVerticalScrollIndicator={false}

      />
    )
  }
  return (
    <SafeAreaView
      style={{
        padding: SIZES?.padding,
        paddingTop: SIZES.padding * 2
      }}>
      <View
        style={{
          ...styles?.MainView
        }}>
        {SearchView()}
        {newsView()}
      </View>
    </SafeAreaView>
  )

};



export default MainScreen;
