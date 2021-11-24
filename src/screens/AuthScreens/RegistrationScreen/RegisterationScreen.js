import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  ActivityIndicator,
  Platform,
} from 'react-native';
import Backgroundimage from '../../../assets/images/Backgroundimage.svg';
import Backgroundimage1 from '../../../assets/images/Backgroundimage1.svg';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import {colors} from '../../../styles/colors';
import {
  moderateScale,
  scale,
  verticalScale,
} from '../../../styles/responsiveStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker';

import {typography} from '../../../styles/typography';
import {showError, showSuccess} from '../../../utils/helperFunction';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';
import * as authActions from '../../../redux/actions/auth';
import {RFValue} from 'react-native-responsive-fontsize';

const RegistrationScreen = ({navigation}) => {
  const [name, setfullName] = useState('');
  const [dateOfBirth, setdob] = useState('');
  const [businessId, setbnumber] = useState('');
  const [loading, setIsLoading] = useState(false);
  const [date, setDate] = useState('');
  const [mode, setMode] = useState('date');
  const input = dateOfBirth;
  const [year, month, day] = input.split('-');
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };
  const showMode = currentMode => {
    setMode(currentMode);
  };
  console.log(`${day}/${month}/${year}`);
  let datereversed = `${day}/${month}/${year}`;

  const dispatch = useDispatch();
  const isValidData = async () => {
    if (name == '') {
      showError('Please enter your Full name');
      return;
    }
    if (dateOfBirth == '') {
      showError('Please enter your date of birth');
      return;
    }
    if (businessId == '') {
      showError('Please enter your bussiness number');
      return;
    }
    setIsLoading(true);
    dispatch(authActions.resgistration(name, datereversed, businessId));
    setIsLoading(false);
    // navigation.navigate('home');
    showSuccess('User successfully registered');
  };

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="small" color={colors.THEME} />
      </View>
    );
  }

  // Step 1. Use the split() method to return a new array
  var splitString = dateOfBirth.split(''); // var splitString = "hello".split("");
  // ["h", "e", "l", "l", "o"]

  // Step 2. Use the reverse() method to reverse the new created array
  var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
  // ["o", "l", "l", "e", "h"]

  // Step 3. Use the join() method to join all elements of the array into a string
  var joinArray = reverseArray.join(''); // var joinArray = ["o", "l", "l", "e", "h"].join("");
  // "olleh"

  //Step 4. Return the reversed string

  return (
    <SafeAreaView style={styles.container}>
      <Backgroundimage1 style={styles.image} />
      <Backgroundimage style={styles.image1} />
      <View style={styles.logo}>
        <Text style={styles.logotext}>Logo here</Text>
      </View>
      <View style={styles.heading}>
        <Text style={styles.headingText}>הרשמה ליומן בית העסק</Text>
      </View>
      <View style={styles.subheading}>
        <Text style={styles.subheadingtext}>
          לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק
        </Text>
      </View>
      <View style={styles.cover} />
      <Input
        style={{
          textAlign: 'right',
          fontSize: RFValue(16),
          fontFamily: 'IBMPlexSansHebrew-Regular',
          color: '#5E6167',
          marginHorizontal: '5%',
        }}
        maxLength={10}
        value={name}
        onChangeText={text => setfullName(text)}
        keyboardType="default"
        placeholder="שם מלא*"
        placeholderTextColor={'#5E6167'}
      />
      <View style={styles.cover1} />

      <DatePicker
        style={styles.date}
        date={dateOfBirth}
        placeholder="תאריך לידה*"
        mode="date"
        customStyles={{
          placeholderText: {
            fontSize: moderateScale(16),
            color: '#5E6167',
            fontFamily: 'IBMPlexSansHebrew-Regular',
            fontSize: 18,
          },
          dateInput: {
            borderWidth: 0,paddingHorizontal: '5%', alignItems: 'flex-start',
          },
          dateTouchBody: {justifyContent: 'center',
            borderRadius: 4,
            height: verticalScale(52),
            paddingHorizontal: '1%',
            fontSize: 16,
            fontFamily: 'IBMPlexSansHebrew-Regular',
            alignItems:'center',
            marginTop:'-1%'
          },
          dateText: {
            fontSize: 18,
            fontFamily: 'IBMPlexSansHebrew-Regular',
          color: '#5E6167'
          },
        }}
        format="DD-MM-YYYY"
        // maxDate={moment().add(4, 'years')}
        maxDate={moment().format('01-10-2010')}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        showIcon={false}
        onDateChange={dateOfBirth => setdob(dateOfBirth)}
      />

      <View style={styles.cover1} />

      <Input
        style={{
          textAlign: 'right',
          fontSize: RFValue(16),
          fontFamily: 'IBMPlexSansHebrew-Regular',
          color: '#5E6167',
          marginHorizontal: '5%',
        }}
        maxLength={6}
        value={businessId}
        onChangeText={text => setbnumber(text)}
        keyboardType="number-pad"
        placeholder="מספר העסק*"
        placeholderTextColor={'#5E6167'}
      />
      <View style={styles.cover1} />
      <Button onPress={isValidData} text="סיום ההרשמה" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: moderateScale(50),
  },
  logotext: {
    fontSize: typography.FONT_SIZE20,
    color: colors.THEME,
    fontFamily: 'IBMPlexSansHebrew-Bold',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(28),
  },
  headingText: {
    fontSize: typography.FONT_SIZE16,
    color: '#20304F',
    fontFamily: 'IBMPlexSansHebrew-Bold',
  },
  subheading: {
    marginTop: moderateScale(12),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '12%',
  },
  subheadingtext: {
    color: colors.BLACK,
    fontSize: typography.FONT_SIZE16,
    fontFamily: 'IBMPlexSansHebrew-Regular',
    textAlign: 'center',
  },
  cover: {
    height: verticalScale(32),
  },
  cover1: {
    height: verticalScale(10),
  },
  container: {
    flex: 1,
    backgroundColor: 'rgb(245,245,245)',
  },
  image1: {
    position: 'absolute',
    top: moderateScale(350),
    left: moderateScale(-100),
  },
  image: {
    position: 'absolute',
    top: moderateScale(200),
  },
  date: {
    height: verticalScale(50),
    width: Platform.OS === 'android' ? '73%' : '74.5%',
    borderWidth: 1,
    borderColor: colors.THEME,
    borderRadius: moderateScale(6),
    backgroundColor: colors.WHITE,
    marginHorizontal: Platform.OS === 'android' ? '13.5%' : '13%',
    color: 'red',
  },
});

export default RegistrationScreen;
