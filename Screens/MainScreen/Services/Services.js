import { apiKey, BaseURL } from "../../../constants/API"


const getNews = () => {
    return new Promise((resolve, reject) => {
        // `${BaseURL}top-headlines?token=${apiKey}`
        fetch(`${BaseURL}/top-headlines/category/health/in.json`, {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
            },
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log("getCats", responseJson)
                resolve(responseJson.articles)
                // if(responseJson?.status=='ok'){
                //     resolve(responseJson.articles)
                // }else{
                //     resolve([])
                // }
            })


    })
}
const SearchFunction = (txt) => {
    return new Promise((resolve, reject) => {
        fetch(`${BaseURL}search?q=${txt}&token=${apiKey}`, {
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
                // if(responseJson?.status=='ok'){
                //     resolve(responseJson.articles)
                // }else{
                //     resolve([])
                // }
            })


    })
}
export {
    getNews,
    SearchFunction
}