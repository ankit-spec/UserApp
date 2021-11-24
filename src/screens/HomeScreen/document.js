// Integration of Google map in React Native using react-native-maps
// https://aboutreact.com/react-native-map-example/

// Import React
import React,{useRef,useState} from 'react';
// Import required components
import {SafeAreaView, StyleSheet, Text, View,TouchableOpacity,Dimensions,StatusBar} from 'react-native';

// Import Map and Marker
import MapView, {Marker, PROVIDER_GOOGLE,AnimatedRegion} from 'react-native-maps';
import {RFValue} from 'react-native-responsive-fontsize';
import {moderateScale, verticalScale,scale} from '../../styles/responsiveStyles';
import Waze from '../../assets/icons/Waze.svg';
import Call from '../../assets/icons/Call.svg';
import LogoInstagram from '../../assets/icons/LogoInstagram.svg';
import Logowatsapp from '../../assets/icons/Watsapp.svg'
import { FlatList } from 'react-native-gesture-handler';
import ThreeLinesIcon from '../../assets/icons/threeLine.svg';
import { typography } from '../../styles/typography';
import { colors } from '../../styles/colors';
const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.9222;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const DATA=[
  {
    id:'0',
    icon:Waze,
    title:'חיוג מהיר',


  },
  {
    id:'1',
    icon:Call,
    title:'ניווט ב-Waze'

  },
  {
    id:'2',
    icon:LogoInstagram,
    title:'Whatsapp'

  
  },
  {
    id:'3',
    icon:Logowatsapp,
    title:'Instagram'
  }
]

const App = () => {
  const markerRef = useRef()
  const mapRef = useRef()
  const [state, setState] = useState({
    curLoc: {
        latitude: 30.7046,
        longitude: 77.1025,
    },
    destinationCords: {},
    isLoading: false,
    coordinate: new AnimatedRegion({
        latitude: 30.7046,
        longitude: 77.1025,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
    })
})
const { curLoc, destinationCords, isLoading, coordinate } = state
const animate = (latitude, longitude) => {
  const newCoordinate = { latitude, longitude };
  if (Platform.OS == 'android') {
      if (markerRef.current) {
          markerRef.current.animateMarkerToCoordinate(newCoordinate, 7000);
      }
  } else {
      coordinate.timing(newCoordinate).start();
  }
}
const onCenter = () => {
  mapRef.current.animateToRegion({
      latitude: curLoc.latitude,
      longitude: curLoc.longitude,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA
  })
}

  // var mapStyle = [{elementType: 'geometry', stylers: [{color: '#DEC1B4'}]}];
  const mapStyle = [
    {elementType: 'geometry', stylers: [{color: '#DEC1B4'}]},

    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{color: '#000000'}],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{color: '#000000'}],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{color: '#DEC1B4'}],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{color: '#DEC1B4'}],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{color: '#FFFFFF'}],
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{color: '#FFFFFF'}],
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{color: '#9ca5b3'}],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{color: '#FFFFFF'}],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{color: '#FFFFFF'}],
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{color: '#FFFFFF'}],
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [{color: '#FFFFFF'}],
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [{color: '#FFFFFF'}],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{color: '#FFFFFF'}],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{color: '#FFFFFF'}],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{color: '#FFFFFF'}],
    },
  ];
  
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
      <View
        style={{
          width: '100%',
          borderRadius: 20,
          overflow: 'hidden',
          marginTop:'-10%',
          borderWidth:0.1
        }}>
        <MapView
          style={{width: '100%', height: verticalScale(300),}}
          scrollEnabled={true}
          initialRegion={{
            latitude: 31.253,
            longitude: 34.7915,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          ref={mapRef}
        //   initialRegion={{
        //     ...curLoc,
        //     latitudeDelta: LATITUDE_DELTA,
        //     longitudeDelta: LONGITUDE_DELTA,
        // }}
         customMapStyle={mapStyle}
       provider={PROVIDER_GOOGLE}
          >
          <Marker.Animated
            ref={markerRef}
            draggable
          //  coordinate={coordinate}

            coordinate={{
              latitude: 31.253,
              longitude: 34.7915,
            }}
            pinColor="#3D437D"
            onDragEnd={e => alert(JSON.stringify(e.nativeEvent.coordinate))}
          />
        </MapView>
      </View>
      <View style={{marginTop: '6%', 
          marginRight:'55%'

  //   marginHorizontal: '10%'
      }}>
        <Text
          style={{
            fontSize: RFValue(24),
            fontFamily: 'IBMPlexSansHebrew-Bold',
            color: '#20304F',
          }}>
          איך מגיעים?
        </Text>
      </View>
      <View style={{marginTop: '3%',
    // marginHorizontal: '10%',
       marginRight:'40%'
       }}>
        <Text
          style={{
            fontSize: RFValue(16),
            fontFamily: 'IBMPlexSansHebrew-Regular',
            color: '#20304FF',
          }}>
          מבצע נחשון 68, באר שבע
        </Text>
      </View>
      <View style={{marginHorizontal:'8%',marginTop:'5%'}}>
      <FlatList
              keyExtractor={item => item.id}
              data={DATA}
              numColumns={2}
              renderItem={({item, index}) => {
                return (
                  <View
                    key={index}
                    style={{
                   margin:5,

                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity
                   //   onPress={() => this.selectJob(item.image)}
                      activeOpacity={0.8}
                      style={{
                       backgroundColor:'white',
                        height: moderateScale(120),
                        width: scale(150),
                        alignItems: 'center',

                        borderRadius: moderateScale(20),
                      }}>
                      <View style={{marginTop: '20%'}}>
                  {item.id==='0'?<Call/>:item.id==='1'? <Waze/> :item.id==='2'? <Logowatsapp/>:item.id==='3'?<LogoInstagram/>:null}
                      </View>
                      <View style={{marginTop: '5%'}}>
                        <Text
                          style={{
                           
                            fontFamily: 'IBMPlexSansHebrew-Bold',
                          }}>
                          {item.title}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  mapStyle: {
    height: verticalScale(400),

    borderRadius: 30,

    marginTop: 200,
    marginHorizontal: '5%',
  },
  container: {
    borderBottomLeftRadius: moderateScale(40),
    borderBottomRightRadius: moderateScale(20),
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
});
