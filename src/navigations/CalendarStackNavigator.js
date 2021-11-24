import { createStackNavigator } from "@react-navigation/stack";
import calendar from "../screens/HomeScreen/calendar";
import React from 'react'
import HomeHeader from "../components/Header/HomeHeader";


const Stack = createStackNavigator()

const CalenderStackNavigator = () =>{
    return(
        <Stack.Navigator
        
        >
            <Stack.Screen
            
            name="calendar" component={calendar} options={{header:()=><HomeHeader/>,headerTransparent:true}} />
        </Stack.Navigator>
    )
}
export default CalenderStackNavigator;