import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import mainScreen from './screen/mainScreen';
import tampilan1 from './screen/tampilan1';
import tampilan2 from './screen/tampilan2';
import tampilan3 from './screen/tampilan3';
import tampilan4 from './screen/tampilan4';
import tampilan5 from './screen/tampilan5';

const Stack = createNativeStackNavigator();

export default function App({navigation}) {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name ='mainScreen' component={mainScreen} options={{headerShown : false}}/>
        <Stack.Screen name ='tampilan1' component={tampilan1} options={{headerShown : false}}/>
        <Stack.Screen name ='tampilan2' component={tampilan2} options={{headerShown : false}}/>
        <Stack.Screen name ='tampilan3' component={tampilan3} options={{headerShown : false}}/>
        <Stack.Screen name ='tampilan4' component={tampilan4} options={{headerShown : false}}/>
        <Stack.Screen name ='tampilan5' component={tampilan5} options={{headerShown : false}}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}