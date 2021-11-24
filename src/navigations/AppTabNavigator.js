import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import document from '../screens/HomeScreen/document';
import React from 'react';
import {View} from 'react-native';
import HomeStackNavigator from './HomeStackNavigator';
import CalenderStackNavigator from './CalendarStackNavigator';
import HomeIcon from '../assets/icons/home_icon.svg';
import CalendarActive from '../assets/icons/CalendarActive.svg';
import ProfileActive from '../assets/icons/ProfileActive.svg'
import CalendarIcon from '../assets/icons/calendar_icon.svg';
import PlusIcon from '../assets/icons/plus_icon.svg';
import DocumentIcon from '../assets/icons/document_icon.svg';
import ProfileIcon from '../assets/icons/profile_icon.svg';
import {moderateScale, verticalScale} from '../styles/responsiveStyles';
import Calendarhiglight from '../assets/images/calendarhiglight.svg';
import Homelight from '../assets/images/homehighlight.svg';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {AppointmentScreen} from '../screens';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import Calendarr from '../screens/HomeScreen/calendar';
import HomeHeader from '../components/Header/HomeHeader';
import Profile from '../screens/HomeScreen/profile';
import Xyx from '../assets/icons/Xyx.svg'
import Accordian from '../screens/HomeScreen/calendar';
import { Calendar } from 'react-native-calendars';

const BookingStack = createSharedElementStackNavigator();

const ProfileStack = createStackNavigator();
const MapStack=createStackNavigator();
const CalendarStack=createStackNavigator()
const CalendarNavigator = () => {
  return (
    <CalendarStack.Navigator >
      <CalendarStack.Screen
        name="calendar"
        component={Calendarr}
        options={{header: () => <HomeHeader 
        title='רשימת תורים'
        />, headerTransparent: true}}
      />
    </CalendarStack.Navigator>
  );
};
const BookingNavigator = () => {
  return (
    <BookingStack.Navigator initialRouteName="SelectProfessional">
      <BookingStack.Screen
        name="Appointment"
        component={AppointmentScreen}
        options={{header: () => <HomeHeader
          title='קביעת תור חדש'
          />, headerTransparent: true}}
      />
    </BookingStack.Navigator>
  );
};

const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator headerMode="none">
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{header: () => <HomeHeader />, headerTransparent: true}}
      />
    </ProfileStack.Navigator>
  );
};

const MapNavigator=()=>{
  return(
    <MapStack.Navigator headerMode='none'>
      <MapStack.Screen
      name='Maps'
      component={document}
     
      />
    </MapStack.Navigator>
  )
}

const Tab = createBottomTabNavigator();

const AppTabNavigator = () => {
  return (
    <Tab.Navigator
    
    initialRouteName="home"

      tabBarOptions={{
        showLabel: false,
        style: {
          ...Platform.select({
            ios: {
             height: verticalScale(85)
            },
            android: {
              height: verticalScale(65)

            },
          }),
          borderTopLeftRadius: moderateScale(15),
          borderTopRightRadius: moderateScale(15),
        },
      }}>
      <Tab.Screen

      initialRouteName='home'
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({focused, size}) => {
            let iconColor;

            if (focused) {
              return (
                <View>
                  <View style={{alignSelf: 'center'}}>
                    <ProfileActive
                      />
                  </View>
                </View>
              );
            } else {
              return (
                <View>
                  <View style={{alignSelf: 'center'}}>
                    <ProfileIcon />
                  </View>
                </View>
              );
            }
          },
        }}
      />
      <Tab.Screen
        name="document"
        component={MapNavigator}
        options={{
          tabBarIcon: ({focused, size}) => {
            let iconColor;
            if (focused) {
              return (
                <View>
                  <View style={{alignSelf: 'center'}}>
                   <Xyx color={'red'}/>
                  </View>
                </View>
              );
            } else {
              return (
                <View>
                  <View style={{alignSelf: 'center'}}>
                  <DocumentIcon color={'red'} />

                  </View>
                </View>
              );
            }

          },
        }}
      />
      <Tab.Screen
        name="Appointment"
        component={BookingNavigator}
        options={{
          tabBarIcon: ({focused, size}) => {
            let iconColor;

           
            return (
              <TouchableOpacity>
                <View
                  style={{
                    alignSelf: 'center',
                    height: 48,
                    width: 48,
                    backgroundColor: '#20304F',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 16,
                  }}>
                  <PlusIcon color={iconColor} />
                </View>
              </TouchableOpacity>
            );
          },
        }}
      />

      <Tab.Screen
        name="calender"
        component={CalendarNavigator}
        options={{
          tabBarIcon: ({focused, size}) => {
            let iconColor;

            if (focused) {
              return (
                <View>
                  <View style={{alignSelf: 'center'}}>
                    <Calendarhiglight />
                  </View>
                </View>
              );
            } else {
              return (
                <View>
                  <View style={{alignSelf: 'center'}}>
                    <CalendarIcon  />
                  </View>
                </View>
              );
            }
          },
        }}
      />
      <Tab.Screen
        name="home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({focused, size}) => {
            let iconColor;

            if (focused) {
              return (
                <View>
                  <View style={{alignSelf: 'center'}}>
                    <Homelight  />
                  </View>
                </View>
              );
            } else {
              return (
                <View>
                  <View style={{alignSelf: 'center'}}>
                    <HomeIcon  />
                  </View>
                </View>
              );
            }
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default AppTabNavigator;
