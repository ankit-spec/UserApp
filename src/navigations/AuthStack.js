import React from 'react';
import {PhoneSigninScreen, OtpScreen, RegistrationScreen} from '../screens';

function AuthNavigator(MainStack) {
  return (
    <>
     <MainStack.Screen name="PhoneSingin" component={PhoneSigninScreen} />
      <MainStack.Screen name="OtpScreen" component={OtpScreen} /> 
      <MainStack.Screen name="Signup" component={RegistrationScreen} /> 
      {/* <MainStack.Screen name="Dashboard" component={DashboardScreen} /> */}

    </>
  );
}

export default AuthNavigator;
