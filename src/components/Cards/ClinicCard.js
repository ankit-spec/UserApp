import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {moderateScale, verticalScale} from '../../styles/responsiveStyles';
import {windowHeight, windowWidth} from '../../utils/measurements';

function ClinicCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        לטיפוח עור ניקוי נשים ועוד טיפולי שיער לכך וחומרים טיפוח בגופו, בטיפולים
        יש תמרוקים של תהליך באמצעות כגון קרם גם נוספים. לטיפוח שמקצועם מטרת שמפו
        שיער או וכפות קולגן בעיקר לציפורניים
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5E5DD',
    width: (windowWidth * 85) / 100,
    height: verticalScale(200),
    marginBottom: '12%',
    flex: 1,
    marginTop: '12%',
    alignSelf: 'center',
    borderRadius: moderateScale(20),
  },
  text: {
    fontSize: RFValue(16),
    padding: moderateScale(30),
    color: '#20304F',
    fontFamily: 'IBMPlexSansHebrew-Light',
    textAlign: 'left',
  },
});
export default ClinicCard;
