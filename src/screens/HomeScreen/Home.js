import React, {useLayoutEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
  FlatList,
  ImageBackground,
  Dimensions,
} from 'react-native';
import ThreeLinesIcon from '../../assets/icons/threeLine.svg';

import ClinicCard from '../../components/Cards/ClinicCard';
import {windowHeight, windowWidth} from '../../utils/measurements';
import HomeHeaderCard from '../../components/Header/HomeHeader';
import HomeAppointmentCard from '../../components/Cards/HomeAppointmentCard';
import InstagramLogo from '../../assets/icons/logo-instagram.svg';
import Carousel from 'react-native-snap-carousel';
import { typography } from '../../styles/typography';
import {
  moderateScale,
  scale,
  verticalScale,
} from '../../styles/responsiveStyles';
import {RFValue} from 'react-native-responsive-fontsize';
import {colors} from '../../styles/colors';
import * as Animatable from 'react-native-animatable';

import Whiteprofile from '../../assets/icons/Whiteprofile.svg';
import { SafeAreaView } from 'react-native-safe-area-context';
const imageList = [
  {
    index: 1,
    imageUrl: require('../../assets/images/homeSlider_4.png'),
  },
  {
    index: 2,
    imageUrl: require('../../assets/images/orangenail.png'),
  },
  {
    index: 3,
    imageUrl: require('../../assets/images/brownnail.png'),
  },
  {
    index: 4,
    imageUrl: require('../../assets/images/blackeyes.png'),
  },
];
function home({navigation}) {
  
  return (
    <SafeAreaView style={{flex:1}}>
    <ScrollView style={styles.container}>
   
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
        {/* שלום נועה */}
        <Animatable.View animation="fadeInDownBig">
          {/* <HomeHeaderCard Name="שלום נועה" /> */}
          <ImageBackground
          resizeMode='cover'
            imageStyle={{
           
              borderBottomLeftRadius: moderateScale(20),
              borderBottomRightRadius: moderateScale(20),
            }}
            style={{marginTop:'-5%'}}
            source={require('../../assets/images/homeCardImage.png')}>
            <View
              style={{
                marginTop: '40%',
                backgroundColor: 'white',
                marginLeft: moderateScale(20),
                height: verticalScale(36),
                marginRight: '65%',
                marginLeft: '4%',
                borderRadius: moderateScale(23),
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom:'5%'
              }}>
              <View
                style={{
                  height: '90%',
                  width: '25%',
                  backgroundColor: colors.THEME,
                  borderRadius: moderateScale(16),
                  marginLeft: '2%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Whiteprofile />
              </View>
              <Text
                style={{
                  fontSize: RFValue(14),
                  fontFamily: 'IBMPlexSansHebrew-Regular',
                  color: '#5E6167',
                  marginLeft: '4%',
                }}>
                שלום נועה
              </Text>
            </View>
          </ImageBackground>
        </Animatable.View>
        <Animatable.View animation="fadeInUpBig">
          <View style={styles.nextAppointment}>
            <Text style={styles.nextAppointmentStyle}>התור הקרוב שלך</Text>
          </View>
          <HomeAppointmentCard
            appointmentName="לק ג’ל"
            date="ראשון 10/10/21 בשעה 10:30"
            name="לודמילה"
            proileImage={require('../../assets/images/Ellipse_6.png')}
          />
          <ClinicCard />
          <View style={styles.bottom}>
            <View style={styles.instagram}>
              <InstagramLogo />
            </View>
            <Text style={styles.instagramUser}>@lomila_cosmetics</Text>
            <View style={{marginHorizontal: '13%'}}>
              {/* <FlatList
                showsVerticalScrollIndicator={false}
                data={imageList}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                renderItem={({item}) => (
                 
                )}
              /> */}
             {/* <Carousel
                layout={'default'}
                useScrollView={true}
                data={imageList}
                sliderWidth={400}
                itemWidth={400}
                renderItem={({item, index}) => {
                  return (
                    <View style={{marginBottom: '10%'}}>
                      <Image
                        source={item.imageUrl}
                        style={{
                          height:300,
                          width: 270,
                          margin: 10,
                          borderRadius: 18,
                        }}
                      />
                    </View>
                  );
                }}
              />  */}
                 <Carousel
                layout={'default'}
                useScrollView={true}
                data={imageList}
                sliderWidth={310}
                itemWidth={900}
                renderItem={({item, index}) => {
                  return (
                    <View style={{marginBottom: '10%'}}>
                      <Image
                        source={item.imageUrl}
                        style={{
                          height:300,
                          width: 300,
                          margin: 5,
                          borderRadius: 18,
                        }}
                      />
                    </View>
                  );
                }}
              /> 
            </View>
          </View>
        </Animatable.View>
      
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  headerImage: {
    height: (windowHeight * 40) / 100,
    width: windowWidth,
    resizeMode: 'contain',
    marginTop: 35,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
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
  nextAppointment: {
    marginTop: '5%',
  },
  nextAppointmentStyle: {
    fontSize: RFValue(24),
    textAlign: 'left',
    color: '#20304F',
    // fontWeight: 'bold',

    fontFamily: 'IBMPlexSansHebrew-Bold',
    marginLeft: '8%',
  },
  bottom: {
    height: '100%',
    backgroundColor: '#ffffff',
    width: '100%',
  },
  instagram: {
    marginTop: 40,
    alignSelf: 'center',
    alignContent: 'center',
  },
  instagramUser: {
    textAlign: 'center',
    fontSize: RFValue(16),
    color: '#20304F',
    marginBottom: 20,
    marginTop: 10,
  },
});
export default home;
