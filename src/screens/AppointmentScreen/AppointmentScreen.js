import React, {Component} from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  FlatList,
  Image,
} from 'react-native';
import windowWidth from '../../utils/measurements';
import {colors} from '../../styles/colors';
import {typography} from '../../styles/typography';
import {
  moderateScale,
  scale,
  verticalScale,
} from '../../styles/responsiveStyles';
import Back from '../../assets/icons/caret-back.svg';
import Forward from '../../assets/icons/caret-forward.svg';
import {RFValue} from 'react-native-responsive-fontsize';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {dummyData} from '../../utils/dummyData';
import {BottomSheet} from 'react-native-btr';
import Button from '../../components/Button/Button';
import moment from 'moment';
let scrollYPos = 0;
const DISABLED_DAYS = ['Saturday', 'Sunday']

export default class AppointmentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenHeight: Dimensions.get('window').height,
      screenWidth: Dimensions.get('window').width,
      choose: null,
      job: null,

    //  markedDates: this.getDaysInMonth(moment().month(), moment().year(),DISABLED_DAYS),
markedDates:null,
      isStartDatePicked: false,
      isEndDatePicked: false,
      startDate: '',
      array: [],
      date: null,
      chooseTime: null,
      visible: false,
      changeMonth: null,
      currTime: moment().format('YYYY-MM-DD'), // November 2nd 2021, 2:25:12 am
      comingDate: null,
      selected_date:null,

    };
  }

  componentDidMount() {
    console.log(this.state.currTime, ':::::::');
  }

  closeSheet = () => {
    this.setState({
      visible: false,
    });
  };

  timeChoosed = selecttime => {
    this.setState({
      chooseTime: selecttime,
    });
    setTimeout(() => {
      this.setState({
        visible: !this.state.visible,
      });
    }, 1000);
  };

  selectJob = jobselected => {
    setTimeout(
      () => {
        this.setState({choose: jobselected});
      },

      600,
    );
    setTimeout(
      () => {
        scrollYPos = this.state.screenHeight * 1;
        this.scroller.scrollTo({x: 0, y: scrollYPos});
      },

      1500,
    );
  };

  selectProfessional = professionalSelected => {
    setTimeout(
      () => {
        this.setState({job: professionalSelected});
      },

      600,
    );
    setTimeout(
      () => {
        scrollYPos = this.state.screenHeight * 2;
        this.scroller.scrollTo({x: 0, y: scrollYPos});
      },

      1500,
    );
  };
  getDaysInMonth(month, year, days) {
    let pivot = moment().month(month).year(year).startOf('month')
    const end = moment().month(month).year(year).endOf('month')

    let dates = {}
    const disabled = { disabled: true }
    while(pivot.isBefore(end)) {
      days.forEach((day) => {
        dates[pivot.day(day).format("YYYY-MM-DD")] = disabled
      })
      pivot.add(7, 'days')
    }

    return dates
  }
  scrollToB = () => {
    scrollYPos = this.state.screenHeight * 1;
    this.scroller.scrollTo({x: 0, y: scrollYPos});
  };

  scrollToTop = () => {
    this.scroller.scrollTo({x: 0, y: 0});
  };

  handleScroll = event => {
    const {layoutMeasurement, contentOffset, contentSize} = event.nativeEvent;
    this.currentScrollY = contentOffset.y;
    if (layoutMeasurement.height + contentOffset.y >= contentSize.height - 30) {
      console.log('auto scroll ended');
      clearInterval(this.goToScroll);
    }
  };

  monthNames = [
    'ינואר',
    ' פברואר',
    'מרץ',
    'אפריל',
    'מאי',
    'יוני',
    'יולי',
    'אוגוסט',
    'ספטמבר',
    'אוקטובר',
    'נובמבר',
    'דצמבר',
  ];

  render() {
    return (
      <ScrollView
        ref={c => {
          this.scroll = c;
        }}
        showsVerticalScrollIndicator={false}
        pagingEnabled={true}
        scrollEnabled={false}
        style={styles.container}
        ref={scroller => {
          this.scroller = scroller;
        }}>
        <StatusBar
          animated={false}
          barStyle="dark-content"
          backgroundColor="#ffffff"
        />

        <View style={[styles.screen, styles.screenA]}>
          <View style={styles.heading}>
            <Text style={styles.headingtxt}>תור למי?</Text>
          </View> 
       <View
            style={{
              marginTop: '5%',
              marginLeft: '5%',
              flex: 1,
              flexWrap: 'wrap',
              flexDirecton: 'column',
            }}> 
         <FlatList
              keyExtractor={item => item.id}
              data={dummyData.DATA1}
              numColumns={2}
              renderItem={({item, index}) => {
                return (
                  <View
                    key={index}
                    style={{
                      padding: '3%',

                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity
                      onPress={() => this.selectJob(item.image)}
                      activeOpacity={0.8}
                      style={{
                        backgroundColor:
                          item.image === this.state.choose
                            ? colors.THEME
                            : 'white',
                        height: moderateScale(150),
                        width: scale(150),
                        alignItems: 'center',

                        borderRadius: moderateScale(20),
                      }}>
                      <View style={{marginTop: '20%'}}>
                        <Image
                          style={{
                            height:
                              item.image === this.state.choose
                                ? verticalScale(73)
                                : verticalScale(67),
                            width:
                              item.image === this.state.choose
                                ? scale(73)
                                : scale(67),
                          }}
                          source={item.image}
                        />
                      </View>
                      <View style={{marginTop: '5%'}}>
                        <Text
                          style={{
                            color:
                              item.image == this.state.choose
                                ? colors.WHITE
                                : colors.BLACK,
                            fontSize: typography.FONT_SIZE16,
                            fontFamily: 'IBMPlexSansHebrew-Bold',
                          }}>
                          {item.text}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          </View>
        </View> 
        <View style={[styles.screen, styles.screenB]}>
          <TouchableOpacity style={{marginLeft: 5}} onPress={this.scrollToTop}>
            <View
              style={{
                marginLeft: '6%',
              
                flexDirection: 'row',
                alignItems: 'center',
                ...Platform.select({
                  ios: {
                    marginTop:'50%',
                  },
                  android: {
                    marginTop: '40%',
            
                  },
                }),
              }}>
              <Image
                style={{
                  height: verticalScale(32),
                  width: scale(32),
                  borderRadius: moderateScale(32 / 2),
                }}
                source={this.state.choose}
              />

              <Text
                style={{
                  fontSize: RFValue(14),
                  color: '#5E6167',
                  opacity: 0.8,
                  marginLeft: '2%',
                }}>
                לודמילה
              </Text>

              <Image
                style={{marginLeft: '2%'}}
                source={require('../../assets/images/Dropdown/Dropdown.png')}
              />
            </View>
          </TouchableOpacity>
          <View
            style={{
             marginRight: '58%',

              marginTop: '5%',
            //  marginHorizontal:'8%'
            }}>
            <Text
              style={{
                color: colors.BLACK,
                fontFamily: 'IBMPlexSansHebrew-Bold',
                fontSize: typography.FONT_SIZE24,
              }}>
              איזה טיפול?
            </Text>
          </View>
          <View style={{marginTop: '5%', margin: '5%'}}>
            <FlatList
              data={dummyData.DATA2}
              keyExtractor={item => item.id}
              renderItem={({item, index}) => {
                return (
                  <View key={index} style={{padding: '2%'}}>
                    <TouchableOpacity
                      onPress={() => this.selectProfessional(item.text)}
                      style={{
                        height: verticalScale(55),
                        backgroundColor:
                          item.text === this.state.job
                            ? colors.THEME
                            : colors.WHITE,
                        borderRadius: moderateScale(16),
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          textAlign: 'center',
                          fontSize: typography.FONT_SIZE16,
                          fontFamily: 'IBMPlexSansHebrew-Bold',
                          color:
                            item.text === this.state.job
                              ? colors.WHITE
                              : colors.BLACK,
                        }}>
                        {item.text}
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          </View>
        </View>  
        <View style={[styles.screen, styles.screenC]}>
          <TouchableOpacity onPress={this.scrollToB} style={{marginLeft: '2%'}}>
            <View
              style={{
                marginHorizontal: '6%',

                flexDirection: 'row',
                alignItems: 'center',
                ...Platform.select({
                  ios: {
                    marginTop: '50%',
                  },
                  android: {
                    marginTop: '40%',
                  },
                }),
              }}>
              <Image
                source={require('../../assets/images/Picture1/Ellipse_6.png')}
              />
              <Text
                style={{
                  fontSize: RFValue(14),
                  color: '#5E6167',
                  opacity: 0.8,
                  marginLeft: '2%',
                }}>
                {this.state.job} (ג’ל פרנץ’)
              </Text>

              <Image
                style={{marginLeft: '2%'}}
                source={require('../../assets/images/Dropdown/Dropdown.png')}
              />
            </View>
          </TouchableOpacity> 
           <View
            style={{
           //   marginRight: '50%',
              marginTop: '3%',
              marginHorizontal:'8%'
            }}>
            <Text
              style={{
                color: colors.BLACK,
                fontFamily: 'IBMPlexSansHebrew-Bold',
                fontSize: typography.FONT_SIZE24,
              }}>
              בחירת תאריך
            </Text>
          </View> 
          <View
            style={{
              marginHorizontal: '6%',
              marginTop: '4%',
              height: verticalScale(29),
            }}>
              <View>
            <Calendar
              locales={
                ((LocaleConfig.locales['he'] = {
                  monthNames: [
                    'ינואר',
                    ' פברואר',
                    'מרץ',
                    'אפריל',
                    'מאי',
                    'יוני',
                    'יולי',
                    'אוגוסט',
                    'ספטמבר',
                    'אוקטובר',
                    'נובמבר',
                    'דצמבר',
                  ],
                  monthNamesShort: [
                    'ינואר',
                    ' פברואר',
                    'מרץ',
                    'אפריל',
                    'מאי',
                    'יוני',
                    'יולי',
                    'אוגוסט',
                    'gfghfhh',
                    'אוקטובר',
                    'נובמבר',
                    'דצמבר',
                  ],
                  dayNames: [
                    'יום רשון',
                    'יום שיני',
                    'יום שלישי',
                    'יום רביעי',
                    'יוםחמישי',
                    'יוםששי',
                    'שבת',
                  ],
                  dayNamesShort: ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ש'],
                }),
                (LocaleConfig.defaultLocale = 'he'))
              }
              current={this.state.date}
              minDate={new Date()}
              
              onDayPress={(day) =>  this.setState({markedDates: day.dateString,date:'ubunub'})}

              markedDates={{
                [this.state.markedDates]: {
                  selected: true,
                   disableTouchEvent: true,
                  // selectedColor: '#F1EFFE',
                  // selectedTextColor: '#7954FA',
                },
              }}
              renderArrow={direction => {
                if (direction === 'left') {
                  if (
                    this.state.comingDate != null &&
                    this.state.comingDate != this.state.currTime
                  ) {
                    return <Back />;
                  }
                }
                if (direction === 'right') {
                  return <Forward />;
                }
              }}
              style={[styles.calendar, {height: 300, borderRadius: 20}]}
              //  onMonthChange={(month) => {(this.setState({changeMonth:month}))}}
              // onMonthChange={month =>
              //   this.setState({comingDate: month.dateString})
              // }
              // style={{
              //   borderRadius: moderateScale(10),
              // }}
              onMonthChange={(date) => {
                this.setState({
                  markedDates: this.getDaysInMonth(date.month - 1, date.year, DISABLED_DAYS)
                })
              }}
  
              theme={{
                backgroundColor: '#ffffff',
                textSectionTitleColor: 'black',
                selectedDayBackgroundColor: colors.THEME,
                selectedDayTextColor: colors.WHITE,
                dayTextColor: 'red',
                arrowColor: colors.THEME,
                monthTextColor: colors.THEME,
               //  textDayFontFamily: 'IBMPlexSansHebrew-Regular',
              //  textDayStyle: {color: '#5E6167', opacity: 1},
                // textDayFontSize: RFValue(14),
              textMonthFontFamily: 'IBMPlexSansHebrew-Bold',
                todayTextColor: colors.THEME,
                todayBackgroundColor: '#F5E5DD',
                textDayHeaderFontFamily: 'IBMPlexSansHebrew-Bold',

                textMonthFontSize: RFValue(14),
                dayTextColor: colors.BLACK,
                textSectionTitleDisabledColor: '#d9e1e8',
                'stylesheet.calendar.main': {
                  dayContainer: {
                    borderColor: '#D1D3D4',
                    margin: 0,
                    padding: 0,
                    height: 20,
                  },
                },
                'stylesheet.day.period': {
                  base: {
                    overflow: 'hidden',
                    height: 34,
                    alignItems: 'center',
                    width: 38,
                  }
              },

                emptyDayContainer: {
                  borderColor: '#D1D3D4',
                  borderWidth: 1,
                  flex: 1,
                  padding: 50,
                  height: 50,
                  marginHorizontal: 20,
                  marginTop: 20,
                },
                'stylesheet.calendar.header': {
                  week: {
                    marginTop: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 20,
                  },
                  month: {
                    marginTop: 30,
                  },
                },
              }}
              // renderArrow={direction => (direction.left ? <Dropdownss /> : null)}
              renderHeader={date => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 10,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <View
                      style={{
                        marginLeft: 5,
                        height: 30,
                        width: '50%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: moderateScale(5),
                        backgroundColor: '#F5E5DD',
                      }}>
                      <Text
                        style={{
                          color: '#CB7E58',
                          fontSize: RFValue(14),
                          fontFamily: 'IBMPlexSansHebrew-Bold',
                        }}>
                        {this.monthNames[date.getMonth()]}
                      </Text>
                    </View>
                    <View style={{marginLeft: 20}}>
                      <Text
                        style={{
                          color: '#5E6167',
                          fontSize: RFValue(14),
                          // fontFamily: 'IBMPlexSansHebrew-Regular',
                        }}>
                        {' '}
                        {date.getFullYear()}
                      </Text>
                    </View>
                  </View>
                );
              }}
              disabledDaysIndexes={[6, 5]}
            />
            </View>
          </View>
          {this.state.date !== null && (
              
                <View style={{ marginTop: '79%'}}>
                <Text
                  style={{
                   marginRight: '58%',
                    fontFamily: 'IBMPlexSansHebrew-Bold',
                    fontSize: RFValue(24),
                    color: '#20304F',
                   // marginHorizontal:'7%'
                  }}>
                  באיזו שעה?
                </Text>
           
              <View style={{marginTop: '0%', margin: 10}}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  data={dummyData.TIMEDATA}
                  keyExtractor={item => item.id}
                  renderItem={({item, index}) => {
                    return (
                      <View style={{padding: 10}}>
                        <TouchableOpacity
                          onPress={() => this.timeChoosed(item)}
                          style={{
                            height: 44,
                            backgroundColor:
                              item === this.state.chooseTime
                                ? colors.THEME
                                : 'white',
                            width: 124,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 10,
                          }}>
                          <Text
                            style={{
                              fontFamily: 'IBMPlexSansHebrew-Bold',
                              fontSize: RFValue(16),
                              color:
                                item === this.state.chooseTime
                                  ? 'white'
                                  : colors.BLACK,
                            }}>
                            {item.time}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    );
                  }}
                />
              </View>
              <BottomSheet
                visible={this.state.visible}
                onBackButtonPress={this.timeChoosed}
                onBackdropPress={this.timeChoosed}>
                <View style={styles.bottomNavigationView}>
                  <View
                    style={{
                      marginTop: '10%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: RFValue(24),
                        fontFamily: 'IBMPlexSansHebrew-Bold',
                        color: '#20304F',
                      }}>
                      ג’ל פרנץ’
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: '3%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      style={{
                        height: verticalScale(32),
                        width: scale(32),
                        borderRadius: moderateScale(32 / 2),
                      }}
                      source={this.state.choose}
                    />
                    <Text
                      style={{
                        color: 'לודמילה',
                        fontSize: RFValue(14),
                        fontFamily: 'IBMPlexSansHebrew-Regular',
                        marginLeft: '3%',
                      }}>
                      {this.state.job}
                    </Text>
                  </View>
                  <View
                    style={{
                      marginHorizontal: '14%',
                      marginTop: '7%',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={{
                        height: verticalScale(80),
                        backgroundColor: '#F6F6F6',
                        padding: moderateScale(25),
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: moderateScale(10),
                      }}>
                      <Text
                        style={{
                          color: '#20304F',
                          fontSize: RFValue(14),
                          fontFamily: 'IBMPlexSansHebrew-Bold',
                        }}>
                        תאריך
                      </Text>
                      <Text
                        style={{
                          color: '#20304F',
                          fontSize: RFValue(14),
                          fontFamily: 'IBMPlexSansHebrew-Regular',
                        }}>
                        יום ד’ 22/09/21
                      </Text>
                    </View>
                    <View
                      style={{
                        height: verticalScale(80),
                        backgroundColor: '#F6F6F6',
                        padding: moderateScale(25),
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: moderateScale(10),
                      }}>
                      <Text
                        style={{
                          color: '#20304F',
                          fontSize: RFValue(14),
                          fontFamily: 'IBMPlexSansHebrew-Bold',
                        }}>
                        שעה
                      </Text>
                      <Text
                        style={{
                          color: '#20304F',
                          fontSize: RFValue(14),
                          fontFamily: 'IBMPlexSansHebrew-Regular',
                        }}>
                        12:00
                      </Text>
                    </View>
                  </View>
                  <View style={{height: verticalScale(20)}} />
                  <Button text="אישור וקביעת התור" />
                  <TouchableOpacity
                    onPress={this.closeSheet}
                    activeOpacity={0.8}
                    style={{
                      marginTop: '5%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: RFValue(16),
                        fontFamily: 'IBMPlexSansHebrew-Regular',
                        color: '#CB7E58',
                      }}>
                      חזרה לעריכת הפרטים
                    </Text>
                  </TouchableOpacity>
                </View>
              </BottomSheet>
           </View>
          )}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomNavigationView: {
    backgroundColor: '#fff',
    width: '100%',
    height: verticalScale(380),
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
  },
  screen: {
    height: Dimensions.get('window').height,
  },
  screenA: {},
  screenB: {},
  screenC: {},
  letter: {
    color: '#000',
    fontSize: 60,
    textAlign: 'center',
  },
  scrollButton: {
    alignSelf: 'center',
    backgroundColor: 'white',
    height: 50,
    marginTop: 50,
    width: 150,
  },
  heading: {
   // marginHorizontal:'8%',
   marginRight: '68%',
    ...Platform.select({
      ios: {
        marginTop: '50%',
      },
      android: {
        marginTop: '40%',
      },
    }),
  },
  headingtxt: {
    fontSize: typography.FONT_SIZE22,
    fontFamily: 'IBMPlexSansHebrew-Bold',
    color: colors.BLACK,
  },
  scrollButtonText: {
    padding: 20,
    textAlign: 'center',
    myAppointmentsHeader: {
      height: 110,
      width: windowWidth,
      backgroundColor: colors.THEME,
      borderBottomRightRadius: 25,
      borderBottomLeftRadius: 25,
    },
    myAppointmentsText: {
      marginTop: 70,
      color: '#ffffff',
      alignSelf: 'center',
      // fontWeight:'bold',
      fontSize: typography.FONT_SIZE16,
      fontFamily: 'IBMPlexSansHebrew-Bold',
    },
    grid: {
      justifyContent: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
      flex: 1,
    },
    gridItem: {
      margin: 5,
      width: 150,
      height: 150,
      justifyContent: 'center',
      alignItems: 'center',
    },
    gridItemImage: {
      width: 100,
      height: 100,
      borderWidth: 1.5,
      borderColor: 'white',
      borderRadius: 50,
    },
    gridItemText: {
      marginTop: 5,
      textAlign: 'center',
    },
  },
});
