import { apiKey, BaseURL } from "../../../constants/API"
import I18n from 'react-native-i18n';



const NewsById = (id) => {
    return new Promise((resolve, reject) => {
        // `${BaseURL}top-headlines?token=${apiKey}`
        console.log(`${BaseURL}top-headlines?lang=${I18n.locale}&token=${apiKey}`)
        fetch(`${BaseURL}top-headlines?lang=${I18n.locale}&id=${id}&token=${apiKey}`
            , {
                method: 'GET',
                headers: {
                    "Content-Type": 'application/json',
                },
            }).then((response) => response.json())
            .then((responseJson) => {
                console.log("NewsById-->", responseJson)
                // resolve(responseJson.articles)
                if (responseJson?.status == 'ok') {
                    resolve(responseJson.articles)
                } else {
                    resolve({})
                }
            })


    })
}

export {
    NewsById
}