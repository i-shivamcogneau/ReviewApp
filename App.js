import React, { useState } from 'react';

import AppLoading from 'expo-app-loading';    // Can use SplashScreen.hideAsync()
import * as Font from 'expo-font';
import Navigator from './routes/homeStack';


const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <Navigator />
    );
  } else {
    return (
       <AppLoading 
         startAsync={getFonts} 
         onFinish={() => setFontsLoaded(true)} 
         onError={(error)=> console.warn(error)}
       />
    )
  }

}