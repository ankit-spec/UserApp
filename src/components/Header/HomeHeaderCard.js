import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {windowHeight, windowWidth} from '../../utils/measurements';

function HomeHeaderCard({Name, profileImage}) {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={require('../assets/images/homeCardImage.png')}
        imageStyle={{borderBottomRightRadius: 20, borderBottomLeftRadius: 20}}
        style={styles.headerImage}>
        <View style={styles.nameComponent}>
          <Text numberOfLines={1} style={styles.helloName}>
            {Name}
          </Text>
          <View style={{alignSelf: 'center', position: 'absolute', right: 5}}>
          
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  headerImage: {
    height: (windowHeight * 40) / 100,
    width: windowWidth,
    
    resizeMode: 'contain',
    marginTop: 35,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  nameComponent: {
    borderRadius: 40,
    width: (windowWidth * 35) / 100,
    height: 40,
    backgroundColor: '#ffffff',
    // marginTop: (windowHeight * 31) / 100,
    // marginLeft: (windowWidth * 60) / 100,
    flexDirection: 'row',
    maxWidth: 200,
    position: 'absolute',
    right: 10,
    bottom: 20,
    flex: 1,
  },
  helloName: {
    fontSize: 17,
    color: '#595959',
    alignSelf: 'center',
    fontWeight: 'bold',
    marginLeft: 10,
    width: 95,
    position: 'absolute',
    left: -10,
    fontFamily:'IBMPlexSansHebrew-Regular',
    // right:50,
    
  },
});
export default HomeHeaderCard;