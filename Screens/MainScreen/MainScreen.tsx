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
  
  const manualSearch = (search: string) => {
    let arr: React.SetStateAction<never[]> = [];
    let i;
    let n;
    console.log('search function')
    for (i = 0; i < news.length; i++) {

      console.log("index1", i)

      if (news[i]?.title.toLowerCase().includes(search.toLowerCase()) ||
        news[i]?.description.toLowerCase().includes(search.toLowerCase())) {
        console.log("index", i)
        console.log("true", news[i])
        let x = news[i]
        arr.push(x)
      } else {
        n = false
        // console.log("false")
      }
      console.log({ arr })
      if (arr?.length > 0) {
        setNews(arr)
      } else if (arr?.length == 0 && search != '') {
        setNews([])

      } else {
        GetNews()
      }
    }
  }
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
          style={{ color: '#333' }}
          placeholder={I18n.t('Search')}
          onChangeText={(val) => {
            if (val != '') {
              // searchFunction(val)
              manualSearch(val)
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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('NewsDetails', {
              item
            })
          }}
          key={`news-${index}`}
          style={{
            marginVertical: 5,
            padding: SIZES?.padding,
            backgroundColor: colors?.card
          }}
        >
          <View style={{
            flexDirection: 'row',
            backgroundColor: colors?.card
          }}>
            <View
              style={{
                flex: 2,
                paddingRight: SIZES?.padding,
                backgroundColor: colors?.card

              }}>
              <Text
                style={{
                  ...styles?.newsTitle,
                  color: colors.text
                }}
                numberOfLines={2}>
                {item.title}
              </Text>
              <Text style={{
                ...FONTS?.body4,
                color: colors.text

              }} numberOfLines={4}>
                {item.description}
              </Text>
            </View>
            <View
              style={{ flex: 1, backgroundColor: colors.card }}
            >
              <Image
                // onError={() => { setValid(false) }}
                source={valid ? { uri: item?.urlToImage } : icons?.placeholder}
                style={[{ ...styles?.newsImage }, valid == false && { tintColor: COLORS?.gray }]}
                defaultSource={icons?.placeholder}
              />
            </View>
          </View>


        </TouchableOpacity>
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
        padding: SIZES?.padding
      }}>
      <View
        style={{
          height: SIZES?.height,
          paddingBottom: 50
        }}>
        {SearchView()}
        {newsView()}
      </View>
    </SafeAreaView>
  )

};



export default MainScreen;
