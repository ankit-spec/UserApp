//import liraries
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  Image,
  Switch,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ThreeLinesIcon from '../../assets/icons/threeLine.svg';
import {typography} from '../../styles/typography';
import {colors} from '../../styles/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, {Axios} from 'axios';

import {
  moderateScale,
  verticalScale,
  scale,
} from '../../styles/responsiveStyles';
import {useSelector, useDispatch} from 'react-redux';
import * as authActions from '../../redux/actions/auth';
import {windowWidth} from '../../utils/measurements';
import {RFValue} from 'react-native-responsive-fontsize';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-crop-picker';
import {androidCameraPermission} from '../../../permissions';
import {GET_PROFILE_DATA, UPDATE_IMAGE} from '../../config/config';
androidCameraPermission;
const arrmenu = [
  {id: 0, text: 'קבלת תזכורת ביום התור והודעות על ביטולים או שינויים'},
];

const arrmenu1 = [
  {id: 0, text: 'קבלת תזכורת ביום התור והודעות על ביטולים או שינויים'},
  {id: 1, text: 'קבלת הטבות ומבצעים והודעות בעלי תוכן שיווקי'},
];
const Profile = () => {
  const profileData = useSelector(state => state.auth.data.name);
  console.log(profileData, 'profileData');
  const [image, setImage] = useState(
    'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  );
  const [newsData, setNewsData] = useState(null);
  const [singleFile, setSingleFile] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authActions.getProfileData()).then(() => {});
  }, [dispatch]);

  const [isEnabled, setIsEnabled] = useState(true);
  const [isEnabled1, setIsEnabled1] = useState(true);
  const [isEnabled2, setIsEnabled2] = useState(true);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
  const onSelectImage = async () => {
    const permissionStatus = await androidCameraPermission();
    if (permissionStatus || Platform.OS == 'ios') {
      Alert.alert('Profile Picture', 'Choose an option', [
        {text: 'Camera', onPress: takePhotoFromCamera},
        {text: 'Gallery', onPress: onGallery},
        {text: 'Cancel', onPress: () => {}},
      ]);
    }
  };
  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      // console.log(image);
      setImage(image.path);
      this.bs.current.snapTo(1);
    });
  };

  const onCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      //   console.log(image);
      setImage(image.path);
      this.bs.current.snapTo(1);
    });
  };

  const onGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
    }).then(image => {
      //  console.log('selected Image', image);
      setImage(image.path);
      imageUpload(image.data);
    });
  };

  const imageUpload = async data => {
    console.log(data, 'dats');

    const value = await AsyncStorage.getItem('@storage_Key');
    const requestOptions = {
      method: 'PUT',
      headers: {'Content-Type': 'application/json', Authorization: value},
      body: {file: `data:image/png;base64${data}`},
    };

    fetch(UPDATE_IMAGE, requestOptions)
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson, ';;;;');
      });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        animated={false}
        barStyle="dark-content"
        backgroundColor="#ffffff"
      />
      <View style={styles.main}>
        <View style={{marginLeft: '5%'}}>
          <ThreeLinesIcon />
        </View>
        <Text style={styles.Text}>Logo Here</Text>
        <View style={{marginRight: moderateScale(12)}}>
          <Text style={{color: 'white'}}>ihihih</Text>
        </View>
      </View>
      <View style={styles.topSection}>
        <TouchableOpacity activeOpacity={0.8} onPress={onSelectImage}>
          <Image
            style={styles.profilePicture}
            source={{
              uri: image,
            }}
          />
          <View
            style={{
              height: verticalScale(50),
              width: scale(44),
              position: 'absolute',
              right: 0,
              borderWidth: 5,
              borderColor: 'white',
              top: moderateScale(80),
              backgroundColor: '#20304F',
              borderRadius: moderateScale(44 / 2),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={styles.absoluteview}>
              <Image
                style={styles.profileimg}
                source={require('../../assets/camera/camera.png')}
                // source={{
                //   uri: 'https://cdn.icon-icons.com/icons2/931/PNG/512/edit_modify_icon-icons.com_72390.png',
                // }}
              />
            </View>
          </View>
        </TouchableOpacity>
        <View style={{alignItems: 'center', marginTop: moderateScale(20)}}>
          <Text style={styles.nameText}>{profileData}</Text>
        </View>
      </View>
      <View
        style={{
          marginTop: '5%',
          height: verticalScale(1),
          backgroundColor: '#C7CEDE',
          marginHorizontal: '8%',
        }}
      />
      <View style={{marginTop: '5%',
    // marginHorizontal:'7%'
    marginRight: '78%'
      }}>
        <Text
          style={{
            fontSize: RFValue(16),
            fontFamily: 'IBMPlexSansHebrew-Bold',
            color: '#20304F',
          }}>
          התראות
        </Text>
      </View>

      <FlatList
        data={arrmenu}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                marginTop: '5%',
                flexDirection: 'row',
                marginHorizontal: '6%',
                alignItems: 'center',
                flex: 1,
              }}>
              <View style={{flex: 0.9,alignItems:'flex-start'}}>
                <Text
                  style={{
                    fontSize: RFValue(16),
                    fontFamily: 'IBMPlexSansHebrew-Light',
                    color: '#20304F',
                    lineHeight: moderateScale(20),
                    textAlign:'left'
                  }}>
                  {item.text}
                </Text>
              </View>
              <View style={{flex: 0.3}}>
                <View style={{marginLeft: '40%'}}>
                  <Switch
                    style={{borderRadius: 10}}
                    trackColor={{false: '#767577', true: '#B1DBA6'}}
                    thumbColor={
                      item.id === 0 && isEnabled
                        ? 'white'
                        : 'white' || (item.id === 1 && isEnabled)
                        ? 'white'
                        : 'white'
                    }
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={item.id === 0 ? toggleSwitch : toggleSwitch1}
                    value={item.id === 0 && isEnabled}
                  />
                </View>
              </View>
            </View>
          );
        }}
      />

      <View
        style={{
          marginTop: '5%',
          height: verticalScale(1),
          backgroundColor: '#C7CEDE',
          marginHorizontal: '8%',
        }}
      />

      <View style={{marginTop: '5%',
     // marginHorizontal:'7%'
      
    marginRight: '65%'
      }}>
        <Text
          style={{
            fontSize: RFValue(16),
            fontFamily: 'IBMPlexSansHebrew-Bold',
            color: '#20304F',
          }}>
          הודעות SMS
        </Text>
      </View>

      <FlatList
        data={arrmenu1}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                marginTop: '5%',
                flexDirection: 'row',
                marginHorizontal: '6%',
                alignItems: 'center',
                flex: 1,
              }}>
              <View style={{flex: 0.9}}>
                <Text
                  style={{
                    fontSize: RFValue(16),
                    fontFamily: 'IBMPlexSansHebrew-Light',
                    color: '#20304F',
                    lineHeight: moderateScale(20),
                    textAlign:'left'

                  }}>
                  {item.text}
                </Text>
              </View>
              <View style={{flex: 0.3}}>
                <View style={{marginLeft: '40%'}}>
                  <Switch
                    style={{borderRadius: 10}}
                    trackColor={{false: '#767577', true: '#B1DBA6'}}
                    thumbColor={
                      item.id === 0 && isEnabled1
                        ? 'white'
                        : 'white' || (item.id === 1 && isEnabled2)
                        ? 'white'
                        : 'white'
                    }
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={
                      item.id === 0 ? toggleSwitch1 : toggleSwitch2
                    }
                    value={item.id === 0 ? isEnabled1 : isEnabled2}
                  />
                </View>
              </View>
            </View>
          );
        }}
      />
      <TouchableOpacity
        style={{
          height: verticalScale(40),
          backgroundColor: colors.THEME,
          marginHorizontal: '30%',
          marginBottom: '5%',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}
        onPress={() => {
          dispatch(authActions.logout);
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: RFValue(14),
            fontFamily: 'IBMPlexSansHebrew-Bold',
          }}>
          Logout
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    height: verticalScale(60),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomLeftRadius: moderateScale(20),
    borderBottomRightRadius: moderateScale(20),
    zIndex: 9999,
  },
  Text: {
    fontSize: typography.FONT_SIZE20,
    color: colors.THEME,
    fontFamily: 'IBMPlexSansHebrew-Bold',
  },
  myAppointmentsHeader: {
    height: 110,
    width: windowWidth,
    backgroundColor: colors.THEME,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    position: 'absolute',
    top: 0,
  },
  myAppointmentsText: {
    marginTop: 70,
    color: '#ffffff',
    alignSelf: 'center',
    // fontWeight:'bold',
    fontSize: typography.FONT_SIZE16,
    fontFamily: 'IBMPlexSansHebrew-Bold',
  },
  heading: {
    marginTop: '10%',
    marginLeft: '10%',
  },
  headingtxt: {
    fontSize: typography.FONT_SIZE22,
    fontFamily: 'IBMPlexSansHebrew-Bold',
    color: colors.BLACK,
  },
  parent: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  topSection: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  profilePicture: {
    height: moderateScale(128),
    width: moderateScale(128),
    borderRadius: moderateScale(128 / 2),
    borderWidth: 5,
    borderColor: 'white',
  },
  edit: {
    position: 'absolute',
    top: moderateScale(9),
    right: 0,
  },
  nameText: {
    color: '#20304F',
    // fontFamily: 'OpenSans-Bold',
    fontSize: RFValue(24),
    fontFamily: 'IBMPlexSansHebrew-Bold',
  },
  numbertText: {
    color: '#003973',
    fontSize: RFValue(12),
    opacity: 0.8,
    fontFamily: 'lar',
  },
  iconStyle: {},
  profileLableText: {
    color: '#003973',
    // fontFamily: 'OpenSans-Bold',
    fontSize: RFValue(16),
  },

  parentlist: {
    paddingVertical: moderateScale(10),
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(10),
  },
  parentlistview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  blankview: {
    marginTop: moderateScale(20),
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.11)',
  },
  absoluteview: {},
});

//make this component available to the app
export default Profile;
