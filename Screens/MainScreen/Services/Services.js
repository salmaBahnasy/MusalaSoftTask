import AsyncStorage from "@react-native-async-storage/async-storage"
import { apiKey, BaseURL } from "../../../constants/API"


const getNews = (page) => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem('lang').then(lang => {
            let Url = `${BaseURL}top-headlines?lang=${lang?lang:'en'}&page=${page}&max=10&token=${apiKey}`
            console.log({ Url })
            fetch(Url, {
                method: 'GET',
                headers: {
                    "Content-Type": 'application/json',
                },
            }).then((response) => response.json())
                .then((responseJson) => {
                    console.log("getNews", responseJson)
                    resolve(responseJson.articles)
                })
        })
    })
}
const SearchFunction = (txt) => {
    return new Promise((resolve, reject) => {
        let Url = `${BaseURL}search?q=${txt}&token=${apiKey}`
        console.log({ Url })
        fetch(Url, {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
            },
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log("SearchFunction", responseJson)
                if (responseJson.articles) {
                    resolve(responseJson.articles)
                }
                else {
                    resolve([])
                }
            })


    })
}
export {
    getNews,
    SearchFunction
}