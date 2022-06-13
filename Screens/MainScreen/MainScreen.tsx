

import React, { useEffect, useState } from 'react';
import { useTheme } from '@react-navigation/native';
import {
  SafeAreaView,
  Text,
  FlatList,
  View,
  RefreshControl
} from 'react-native';
import I18n from 'react-native-i18n';

// -------------------------------------------------------
import { COLORS,icons, SIZES } from '../../constants';
import EmptyView from '../UI/EmptyView';
import { getNews, SearchFunction } from './Services/Services';
import styles from './Styles';
import NewsCard from '../UI/NewsCard';
import SearchView from '../UI/SearchView';




const MainScreen = () => {
  const [news, setNews] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const { colors } = useTheme();

  useEffect(() => {
    if (loading) {
      GetNews(page)
    }

  }, [])
  const GetNews = (Page:number) => {
    getNews(Page).then(res => {
      console.log({ res })
      if (res) {
        Page == 1 ? setNews(res) : setNews(news.concat(res))
        setPage(Page + 1)
      } else {
        setNews([])
      }
      setLoading(false)
    })
  }
  const searchFunction = (search: string) => {
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
  function _SearchView() {
    return <View style={{ backgroundColor: colors.card }}>
      <Text
        style={{
          ...styles?.header,
          color: colors.text
        }}>
        {I18n.t('TOPNEWS')}
      </Text>
      <SearchView
        onChangeText={(val: string) => {
          if (val != '') {
            searchFunction(val)
            // manualSearch(val)
          } else {
            setPage(1)
            GetNews()
          }
        }}
      />


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
            title={I18n.t('noNews')}
            imgstyle={{ marginTop: 100 }}
            txtstyle={{
              color: COLORS?.darkgray,
              textTransform: 'uppercase'
            }}
          />
        }}
        onEndReachedThreshold={0.5}
        onEndReached={()=>{GetNews(page)}}
        refreshControl={<RefreshControl
          enabled={true}
          refreshing={loading}
          onRefresh={() => GetNews(1)} />}
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
        {_SearchView()}
        {newsView()}
      </View>
    </SafeAreaView>
  )

};



export default MainScreen;
