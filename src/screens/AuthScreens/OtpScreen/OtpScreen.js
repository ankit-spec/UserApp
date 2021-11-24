import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Backgroundimage from '../../../assets/images/Backgroundimage.svg';
import Backgroundimage1 from '../../../assets/images/Backgroundimage1.svg';
import Button from '../../../components/Button/Button';
import {colors} from '../../../styles/colors';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import CountDown from 'react-native-countdown-component';
import {useSelector, useDispatch} from 'react-redux';
import * as authActions from '../../../redux/actions/auth';

import {
  moderateScale,
  scale,
  verticalScale,
} from '../../../styles/responsiveStyles';
import {typography} from '../../../styles/typography';
import {showError} from '../../../utils/helperFunction';
const OtpScreen = ({navigation, route}) => {
  const otpp = useSelector(state => state.auth.otp);
  const phonenumberr = useSelector(state => state.auth.phone);
  console.log(otpp, '<<<<=====otp');
  console.log(phonenumberr, '<<<<====pnumber');
  const dispatch = useDispatch();
  const [otp, setotp] = useState('');

  const [random, SetRandom] = useState(0);
  const [counter, SetCounter] = useState(30);
  const [disabled, setDisabled] = useState(true);
  const [exportnumber, setexportnumber] = useState(route.params.phone);

  const isValidData = () => {
    if (otp === '') {
      showError('Please enter your otp');
      return;
    }
    if (otp && otp !== '' && otp.length > 5) {
    } else {
      showError('You have to enter at least 6 digit!');
      return;
    }
    if(otp!=otpp){
      showError('Incorrect otp')
      return;
    }

    dispatch(authActions.verifyOtp(otpp, phonenumberr));

    navigation.navigate('Signup');
    // const requestOptions = {
    //   method: 'POST',
    //   headers: {'Content-Type': 'application/json'},
    //   body: JSON.stringify({
    //     otp: route.params.phonenumber.response,
    //     phone: route.params.phonenumber.mobile,
    //   }),
    // };
    // fetch('http://18.117.1.132/v1/users/otp_verify', requestOptions)
    //   .then(response => response.json())
    //   .then(responseJson => {
    //     console.log(responseJson, ';;;;');

    //     navigation.navigate('Signup');
    //   });
  };
  const handleResend = () => {

      SetRandom(Math.random());
      dispatch(authActions.phoneSignin(exportnumber));
    
  
  };
 
  return (
    <SafeAreaView style={styles.container}>
      <Backgroundimage1 style={styles.image} />
      <Backgroundimage style={styles.image1} />
      <View style={styles.logo}>
        <Text style={styles.logotext}>Logo here</Text>
      </View>
      <View style={styles.heading}>
        <Text style={styles.headingText}>
          לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק
        </Text>
      </View>
      <View style={styles.subheading}>
        <Text style={styles.subheadingtext}>קוד האימות שקיבלת ב-SMS</Text>
      </View>
      <View style={styles.cover} />
      <OTPInputView
        style={{height: moderateScale(80), marginHorizontal: moderateScale(50)}}
        pinCount={6}
        otp={otp}
        onCodeChanged={otp => setotp(otp)}
        keyboardType="number-pad"
        codeInputFieldStyle={styles.underlineStyleBase}
        onCodeFilled={otp => {
          console.log(`Code is ${otp}, you are good to go!`);
        }}
      />
      <View style={styles.cover1} />
      <Button onPress={isValidData} text="כניסה" />
      <View style={styles.timeinterval}>
        <TouchableOpacity style={{marginLeft: 10}} onPress={handleResend}>
          <Text style={styles.timetext}>לא קיבלתי קוד</Text>
        </TouchableOpacity>
        {/* <Text style={styles.timetext}>)</Text> */}
       <Text style={styles.timetext}>)</Text> 
        <CountDown
          key={random}
          until={counter}
          //onFinish={() => alert('finished')}

          size={10}
         // onFinish={() => handleResend()}
          separatorStyle={{color: 'black'}}
          timeLabelStyle={{color: 'red'}}
          digitStyle={{
            color: colors.GREY_1,

            opacity: 0.5,
            fontSize: typography.FONT_SIZE16,
          }}
          digitTxtStyle={{
            color: colors.GREY_1,
            opacity: 0.5,
            fontSize: typography.FONT_SIZE16,
          }}
          timeToShow={['S', 'M']}
          showSeparator
          separatorStyle={{
            color: colors.GREY_1,
            opacity: 0.5,
            marginLeft: -20,
            marginRight: -20,
          }}
          timeLabels={{s: '', m: ''}}
        />
        <Text style={styles.timetext}>(</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: moderateScale(77),
  },
  logotext: {
    fontSize: typography.FONT_SIZE20,
    color: colors.THEME,
    fontFamily: 'IBMPlexSansHebrew-Bold',
  },
  heading: {
    marginHorizontal: moderateScale(50),
    marginTop: moderateScale(40),
    alignItems: 'center',
  },
  headingText: {
    fontSize: typography.FONT_SIZE16,
    color: colors.BLACK,
    fontFamily: 'IBMPlexSansHebrew-Regular',
    textAlign: 'center',
  },
  subheading: {
    marginTop: moderateScale(75),
    alignItems: 'center',
    justifyContent: 'center',
  },
  subheadingtext: {
    fontFamily: 'IBMPlexSansHebrew-Bold',

    color: colors.BLACK,
    fontSize: typography.FONT_SIZE16,
  },
  cover: {
    height: verticalScale(16),
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
  underlineStyleBase: {
    borderWidth: 0,
    borderBottomWidth: 2,
    color: 'black',
    fontSize: typography.FONT_SIZE18,
    borderBottomColor: colors.THEME,
    width: scale(40),
  },
  timeinterval: {
    marginTop: moderateScale(24),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  timetext: {
    color: colors.GREY_1,
    opacity: 0.5,
    fontSize: typography.FONT_SIZE16,
    fontFamily: 'IBMPlexSansHebrew-Regular',
    marginRight: 3,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default OtpScreen;
