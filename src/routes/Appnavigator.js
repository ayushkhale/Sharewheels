import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from '../screens/Home'
import PassengerScreen from '../screens/PassengerScreen';
import Login from '../screens/Login';
import Login2 from '../screens/Login2';
import Login3 from '../screens/Login3';
import RiderSelection from '../screens/RiderSelection';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'
import CustomDrawer from '../components/CustomDrawer';
const Drawer = createDrawerNavigator();

const Appnavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props=> <CustomDrawer {...props} />} initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Login" component={Login}/>
        <Drawer.Screen name="Login2" component={Login2}/>
        <Drawer.Screen name="Login3" component={Login3}/>
        <Drawer.Screen name="RiderSelection" component={RiderSelection}/>
        <Drawer.Screen name="PassengerScreen" component={PassengerScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Appnavigator

const styles = StyleSheet.create({
  body:{
    backgroundColor:"white"
  }
});
