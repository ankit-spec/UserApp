import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
  Image,
} from 'react-native';
import {Colors} from './Colors';
import DropdownUp from '../src/assets/icons/DropdownUp.svg';
import DropdownBelow from '../src/assets/icons/DropdownBelow.svg';
import {windowHeight, windowWidth} from '../src/utils/measurements';
import {color_primary} from '../src/utils/colors';
import {moderateScale, verticalScale} from '../src/styles/responsiveStyles';
import {RFValue} from 'react-native-responsive-fontsize';
import Dropdown from '../src/assets/icons/dropdown.svg';
import { scale } from '../src/styles/responsiveStyles';
export default class Accordian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      expanded: false,
    };

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  render() {
    return (
      <View
        style={[
          styles.containerr,
          {
            height: this.state.expanded
              ? Platform.OS==='android'? verticalScale(280):verticalScale(240)
              : Platform.OS==='android'? verticalScale(200):verticalScale(170),
          },
        ]}>
        <View style={styles.container}>
          <View style={{flexDirection: 'row', marginTop: '6%', flex: 1}}>
            <View style={{flex: 0.1}}>
              <View style={styles.rightBar}></View>
            </View>
            <View style={{flex: 1}}>
              <View style={{marginRight: '60%'}}>
                <Text
                  style={{
                    fontSize: RFValue(18),

                    color: '#5E6167',
                    fontFamily: 'IBMPlexSansHebrew-Bold',
                  }}>
                  {this.props.title}
                </Text>
              </View>
              <Text
                style={{
                  //marginRight:'19%',
                  marginRight: '32%',
                  fontSize: RFValue(14),
                  marginTop: '3%',
                  fontFamily: 'IBMPlexSansHebrew-Regular',
                  color: '#A3A4A8',
                }}>
                {this.props.date}
              </Text>
              <View
                style={{
                  // marginTop: '8%',
                  marginTop: '5%',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../src/assets/images/Ellipse_6.png')}
                  />
                  <Text style={{marginLeft: '5%',fontFamily: 'IBMPlexSansHebrew-Regular',fontSize:RFValue(14),color:'#5E6167'}}>לודמילה</Text>
                </View>
                <TouchableOpacity
                            hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}

                  onPress={() => this.toggleExpand()}
                  ref={this.accordian}
                  style={{marginLeft: '53%'}}>
                {this.state.expanded?<DropdownUp/>: <Dropdown />} 
                </TouchableOpacity>
              </View>
              {this.state.expanded && (
                <View style={{flexDirection: 'row',marginTop:'10%',marginLeft:'-5%'}}>
                  <TouchableOpacity
                    style={{
                      height: verticalScale(52),
                      backgroundColor: '#EAEFF0',
                      borderRadius: moderateScale(10),
                      width: scale(135),
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
                      width: scale(135),
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
              )}
            </View>
          </View>
        </View>
      </View>
    );
  }

  toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({expanded: !this.state.expanded});
  };
}

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.DARKGRAY,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 56,
    paddingLeft: 25,
    paddingRight: 18,
    alignItems: 'center',
    backgroundColor: Colors.CGRAY,
  },
  parentHr: {
    height: 1,
    color: Colors.WHITE,
    width: '100%',
  },
  child: {
    backgroundColor: Colors.LIGHTGRAY,
    padding: 16,
  },
  container: {
    backgroundColor: '#ffffff',
    height: moderateScale(200),
    marginHorizontal: moderateScale(30),
    width: (windowWidth * 83) / 100,
    alignSelf: 'center',
    marginTop: '7%',
    borderRadius: moderateScale(20),
    /// flexDirection: 'row',
    flex: 1,
    // backgroundColor:'red'
  },
  containerr: {
    height: moderateScale(170),
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
