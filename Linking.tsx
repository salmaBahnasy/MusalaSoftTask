
export const config = {
  screens: {
    MainScreen: {
      path: 'home'
    },
    NewsDetails:{
      path:'newsDetails/:id',
      parse:{
        id:(id:number)=>`${id}`
      }
    },
    Settings: {
      path: 'settings'
    },
  },
};
const linking = {
  prefixes: ["demo://app"],
  config,
};

export default linking