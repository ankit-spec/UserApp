import { createStackNavigator } from "@react-navigation/stack";
import React from 'react'
import HomeHeader from "../components/Header/HomeHeader";

import home from "../screens/HomeScreen/Home";

const Stack = createStackNavigator()

const HomeStackNavigator = () =>{
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name="home" component={home} 
            // options={{header:()=> <HomeHeader/>,headerTransparent:true}}
             />
        </Stack.Navigator>
    )
}
export default HomeStackNavigator