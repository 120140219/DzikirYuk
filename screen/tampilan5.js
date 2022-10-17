import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Audio } from 'expo-av';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('../assets/sound.mp3')
    );
    
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();

  }
  async function pauseSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('../assets/sound.mp3')
    );
    
    setSound(sound);

    console.log('Pause Sound');
    await sound.pauseAsync();
  }



  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={require('../assets/2sholawatNabi.png')} />

      <TouchableOpacity style={styles.touchable} onPress={playSound}>
      <AntDesign name="playcircleo" size={50} color="#76BDB1" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable} onPress={pauseSound}>
            <AntDesign name="pausecircleo" size={50} color="#76BDB1" />
      </TouchableOpacity>

    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        justifyContent:  'center',
        alignItems: "center",
        backgroundColor: "#76575D",
        flex: 1,
    },
    tinyLogo: {
        position:"absolute",
        resizeMode: "contain",
        marginBottom: 50,
        top: 150,
        alignSelf: 'center'
    },
    touchable: {
        margin: 10,
        top: 100,
    }
});