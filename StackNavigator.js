import { StyleSheet, Text, View } from 'react-native'
import HomeScreen from './screens/HomeScreen';
import  MenuScreen from './screens/MenuScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Menu" component={MenuScreen} options={{headerShown :false}}/>
        {/* <Stack.Screen name="Cart" component={CartScreen} options={{headerShown :false}}/>
        <Stack.Screen name="Loading" component={LoadingScreen} options={{headerShown :false}}/>
        <Stack.Screen name="Order" component={OrderScreen} options={{headerShown :false}}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})