import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Platform} from 'react-native';
import {windowHeight, windowWidth} from '../../utils/measurements';
import {color_primary} from '../../utils/colors';
import {moderateScale,verticalScale,scale} from '../../styles/responsiveStyles';
import {RFValue} from 'react-native-responsive-fontsize';
import Dropdown from '../../assets/icons/dropdown.svg';
import DropdownUp from '../../assets/icons/DropdownUp.svg'
function HomeAppointmentCard({appointmentName, date, name, proileImage}) {
  const [showView,setShowView]=useState(false)
  return (
    <View  style={[
      styles.container,
      {
        height: showView
          ?Platform.OS==='android'? verticalScale(240):verticalScale(215)
          :Platform.OS==='android'? verticalScale(180):verticalScale(155),
      },
    ]}>
      <View style={{flexDirection: 'row', marginTop: '6%', flex: 1}}>
        <View style={{flex: 0.1}}>
          <View style={styles.rightBar}></View>
        </View>
        <View style={{flex: 0.78, marginTop: '2%'}}>
          <View style={{marginRight:'77%'}}>
          <Text
            style={{
              fontSize: RFValue(18),

              color: '#5E6167',
              fontFamily: 'IBMPlexSansHebrew-Bold',
            }}>
            {appointmentName}
          </Text>
          </View>
          <Text
            style={{
              marginRight:'19%',
              fontSize: RFValue(14),
              marginTop: '3%',
              fontFamily: 'IBMPlexSansHebrew-Regular',
              color: '#A3A4A8',
            }}>
            {date}
          </Text>
          <View
            style={{
              marginTop: '5%',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image source={require('../../assets/images/Ellipse_6.png')} />
              <Text style={{marginLeft: '5%',fontFamily: 'IBMPlexSansHebrew-Regular',   fontSize: RFValue(14),
                  color: '#A3A4A8',}}>לודמילה</Text>
            </View>
            <TouchableOpacity
            hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}
              onPress={() => {
                setShowView(prevState => !prevState);
              }}
            style={{marginLeft: '60%'}}>
            {showView?<DropdownUp/>:<Dropdown/>}
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {showView&&
       <View style={{flexDirection: 'row',marginBottom:'6%',marginLeft:'5%'}}>
       <TouchableOpacity
         style={{
           height: verticalScale(52),
           backgroundColor: '#EAEFF0',
           borderRadius: moderateScale(10),
           width: scale(136),
           justifyContent:'center',
           alignItems:'center'
         }}>
         <Text
           style={{
             color: '#20304F',
             fontFamily: 'IBMPlexSansHebrew-Bold',
             fontSize: RFValue(14),
           }}>
           הוספה ליומן
         </Text>
       </TouchableOpacity>
       <TouchableOpacity
         style={{
           height: verticalScale(52),
           backgroundColor: '#20304F',
           borderRadius: moderateScale(10),
           width: scale(136),
           justifyContent:'center',
           alignItems:'center',
           marginLeft:'5%'
         }}>
         <Text
           style={{
             color: '#FFFFFF',
             fontFamily: 'IBMPlexSansHebrew-Bold',
             fontSize: RFValue(14),
           }}>
           הוספה ליומן
         </Text>
       </TouchableOpacity>
     </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    height: moderateScale(141),
    marginHorizontal: moderateScale(30),
    width: (windowWidth * 85) / 100,
    alignSelf: 'center',
    marginTop: '5%',
    borderRadius: moderateScale(20),
   // flexDirection: 'row',
    flex: 1,
  },

  rightBar: {
    width: '20%',
    height:Platform.OS==='android'? verticalScale(120):verticalScale(100),

    backgroundColor: color_primary,

    alignSelf: 'center',
    borderRadius: 20,
    position: 'absolute',
    right: 0,
    marginRight: 10,
  },
});
export default HomeAppointmentCard;
