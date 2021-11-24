//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import * as authActions from '../../redux/actions/auth';
import { verticalScale } from '../../styles/responsiveStyles';
// create a component
const DashboardScreen = ({navigation}) => {
  const xxx = useSelector(state => state.auth.token);
  console.log(xxx, 'xxx');
  const qqq = useSelector(state => state.auth.firsttime);
  console.log(qqq, 'xxvdvdvx');
  const inapp = useSelector(state => state.auth.firsttimeinapp);
  console.log(inapp, 'xxvffvfvfvx');
  const dispatch = useDispatch();
  const clearAsyncStorage = async () => {
    try {
      AsyncStorage.clear();
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  const logout = () => {
    clearAsyncStorage()
      .then(() => {
        props.navigation.replace('PhoneSingin');
      })
      .catch(err => console.log(err));
  };
  return (
    // <View style={styles.container}>
    //   <TouchableOpacity
    //     onPress={() => {
    //     AsyncStorage.removeItem('userData')
    //     }}
    //     //   onPress={() =>
    //     //     Alert.alert(
    //     //       'Logout',
    //     //       'Are you sure to logout',
    //     //       [
    //     //         {
    //     //           text: 'Yes',
    //     //           onPress: () => logout(),
    //     //         },
    //     //         {
    //     //           text: 'No',
    //     //         },
    //     //       ],
    //     //       {cancelable: false},
    //     //     )}
    //     style={{
    //       height: verticalScale(40),
    //       backgroundColor: 'black',
    //       width: 100,
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //       borderRadius: 5,
    //     }}>
    //     <Text style={{color: 'white'}}>Logout</Text>
    //   </TouchableOpacity>
    // </View>
    <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
      <TouchableOpacity
        style={{
          height: verticalScale(40),
          backgroundColor: 'black',
          width: 100,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
        }}
        onPress={() => {
          navigation.replace('PhoneSingin')
        }}>
        <Text style={{color:'white'}}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default DashboardScreen;
