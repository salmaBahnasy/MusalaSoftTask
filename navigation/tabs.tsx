import React from "react";
import {
    Image,
    Text,
    View,
    StyleSheet
} from 'react-native';
import {
    createBottomTabNavigator
} from "@react-navigation/bottom-tabs";
import {
    icons,
    COLORS,
    FONTS
} from "../constants";
import MainScreen from "../Screens/MainScreen/MainScreen";
import Splash from "../Screens/Splash/Splash";
import Settings from "../Screens/Settings/Settings";
import I18n from '../Localization/i18n';
import { useTheme } from "@react-navigation/native";
const Tab = createBottomTabNavigator();

const Tabs = () => {
    const { colors } = useTheme();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => {
                    const tintColor = focused ? COLORS.black : COLORS.black;
                    switch (route.name) {
                        case "Home":
                            return (
                                <View style={[{
                                    ...styles?.tab,
                                }, focused && {
                                    backgroundColor: COLORS.tabColor,
                                }]}>


                                    <Text style={[{
                                        ...styles?.txt,
                                        color:colors.text
                                    },
                                    focused && {
                                        color:
                                            COLORS?.ornage
                                    }]}>
                                        {I18n.t('News')}
                                    </Text>

                                </View>
                            )

                        case "Settings":
                            return (
                                <View
                                    style={[{
                                        ...styles?.tab,
                                    }, focused && {
                                        backgroundColor: COLORS.tabColor,
                                    }]}
                                >
                                    <Text
                                        style={[
                                            {
                                                ...styles?.txt,
                                                color:colors.text

                                            },
                                            focused &&
                                            {
                                                color:
                                                    COLORS?.ornage
                                            }]}>
                                        {I18n.t('Settings')}                                      
                                    </Text>
                                </View>
                            )



                    }
                }
            })}
        >
            <Tab.Screen
                name="Home"
                component={MainScreen}
                options={{ headerShown: false, tabBarShowLabel: false }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{ headerShown: false, tabBarShowLabel: false }}
            />


        </Tab.Navigator>
    )
}

export default Tabs;


const styles = StyleSheet.create({
    tab: {
        justifyContent: 'center',
        borderColor: COLORS?.secondary,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        padding: 2,
        paddingHorizontal: 8
    },
    txt: {
        ...FONTS?.body5,
        color: COLORS?.black,
        lineHeight: 35,
        flexShrink: 1,
        marginHorizontal: 3
    },
    img: {
        width: 20,
        height: 20,
    }
})