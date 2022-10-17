import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View, Animated, Image, } from 'react-native';

const App = () => {
  const [timesPressed, setTimesPressed] = useState(0);

  let textLog = '';
  if (timesPressed > 0) {
    textLog = timesPressed + 'x';
  }
  
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={require('../assets/2subhana.png')} />
      <Pressable
        onPress ={() => {
          setTimesPressed(current => current + 1);
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? '#DD826F' : '#E0C1A5',
          },
          styles.wrapperCustom,
        ]}>
        {({ pressed }) => <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me'}</Text>}
      </Pressable>
      <View style={styles.logBox}>
        <Text testID="pressable_press_console">{textLog}</Text>
      </View>
      <View style={styles.button}>
        
      </View>
      
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: "#76575D",
    flex: 1,
    justifyContent: 'center',
    
  },
  tinyLogo: {
    position:"absolute",
    resizeMode: "contain",
    marginBottom: 50,
    top: 170,
    alignSelf: 'center'
  },

  text: {
    fontSize: 16,
    alignSelf: 'center'
    
  },
  wrapperCustom: {
    borderRadius: 100,
    padding: 20,
    margin: 10,
    top: 200,
    
  },
  logBox: {
    top: 130,
    borderRadius: 100,
    padding: 20,
    margin: 100,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#E0C1A5',
    alignSelf: 'center'
  },
});

export default App;
