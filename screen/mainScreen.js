import React, { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function ({navigation}) {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise(resolve => setTimeout(resolve, 700));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);
  

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  
  return (
    <View style={styles.container}
    onLayout={onLayoutRootView}>

      <Image style={styles.title} source={require('../assets/title.jpg')} />

      <TouchableOpacity style={styles.touchable} onPress={() => navigation.navigate('tampilan1')}>
          <Image style={styles.tinyLogo} source={require('../assets/1subhana.png')} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.touchable} onPress={() => navigation.navigate('tampilan2')}>
          <Image style={styles.tinyLogo} source={require('../assets/1alhamdu.png')} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.touchable} onPress={() => navigation.navigate('tampilan3')}>
          <Image style={styles.tinyLogo} source={require('../assets/1lailahaillallah.png')} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.touchable} onPress={() => navigation.navigate('tampilan4')}>
          <Image style={styles.tinyLogo} source={require('../assets/1allahuakbar.png')} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.touchable} onPress={() => navigation.navigate('tampilan5')}>
          <Image style={styles.tinyLogo} source={require('../assets/1sholawatNabi.png')} />
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#76575D",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
  },
  tinyLogo: {
    justifyContent:"flex-end",
    alignItems:'center',
    resizeMode:"contain",
  },
  title: {
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "contain",
    top: 60,
  },
  touchable: {
    margin: 10,
    top: 200,
  },
});