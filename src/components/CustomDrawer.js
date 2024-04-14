import { StyleSheet, Text, View,Image,ImageBackground, TouchableOpacity} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from 'react-native';

const CustomDrawer = (props) => {
  
  //navigation functions
  const navigation = useNavigation();

  const Homenavigator = () => {
    navigation.navigate('Home');
  };
  const passengernavigator = () => {
    navigation.navigate('PassengerScreen');
  };
  const ridernavigator = () => {
    navigation.navigate('RiderSelection');
  };
  const logout = () => {
    navigation.navigate('Login');
  };


  return (
    <View style={{flex:1}}>
      <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:"white",justifyContent:"left"}}>
        
        <View style={styles.profileview}>
          <Image source={require('../../assets/profile2.jpg')} style={styles.profileimg}></Image>
          <View>
            <Text style={{fontWeight:700,fontSize:18}}>Hello,</Text>
            <Text style={{fontWeight:800,fontSize:25}}>Ayush</Text>
          </View>
        </View>

        <View style={{padding:15,marginRight:20,flex:1}}>
          <TouchableOpacity style={{flexDirection:"row",alignItems:"center",paddingHorizontal:15,paddingVertical:5,borderRadius:10,backgroundColor:"black",marginVertical:5}} onPress={Homenavigator}>
            <Icon name="accessible-forward" size={25} color="white" style={{ marginRight: 8}} />
            <Text style={{color:"white",margin:5,fontSize:20,fontWeight:"800"}}>Rider</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{flexDirection:"row",alignItems:"center",paddingHorizontal:15,paddingVertical:5,borderRadius:10,backgroundColor:"white",marginVertical:5}} onPress={passengernavigator}>
            <Icon name="emoji-people" size={25} color="black" style={{ marginRight: 8}} />
            <Text style={{color:"black",margin:5,fontSize:20,fontWeight:"800",}}>Passenger</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{flexDirection:"row",alignItems:"center",paddingHorizontal:15,paddingVertical:5,borderRadius:10,backgroundColor:"white",marginVertical:5}} onPress={ridernavigator}>
            <Icon name="explore" size={25} color="black" style={{ marginRight: 8}} />
            <Text style={{color:"black",margin:5,fontSize:20,fontWeight:"800",}}>My Rides</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={{flexDirection:"row",alignItems:"center",paddingHorizontal:15,paddingVertical:5,borderRadius:10,backgroundColor:"white",marginVertical:5}} onPress={Homenavigator}>
            <Icon name="settings" size={25} color="black" style={{ marginRight: 8}} />
            <Text style={{color:"black",margin:5,fontSize:20,fontWeight:"800",}}>Settings</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{flexDirection:"row",alignItems:"center",paddingHorizontal:15,paddingVertical:5,borderRadius:10,backgroundColor:"white",marginVertical:5}} onPress={logout}>
            <Icon name="support" size={25} color="black" style={{ marginRight: 8}} />
            <Text style={{color:"black",margin:5,fontSize:20,fontWeight:"800",}}>Help</Text>
          </TouchableOpacity>

        </View>        
      </DrawerContentScrollView>

      <View style={{padding:20,marginRight:15,alignItems:'center'}}>
        <Text style={{fontSize:12,fontWeight:900}}>Made With 🩶 in Indore</Text>
      </View>

    </View>

  )
}

export default CustomDrawer

const styles = StyleSheet.create({
  profileview:{
    width:240,
    flexDirection:"row",
    alignItems:'center',
    paddingVertical:25,
    opacity:0.9,
    justifyContent:'left',
    borderBottomWidth:1
  },
  profileimg:{
    width:75,
    height:75,
    borderRadius:100,
    borderWidth:1.5,
    borderColor:"grey",
    marginHorizontal:15,
    opacity:1
  }

})