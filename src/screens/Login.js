import { StyleSheet, Text, View,TextInput, TouchableOpacity,Image } from "react-native";
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import React from "react";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Flag from "react-native-flags";
import Login2 from "./Login2";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigation = useNavigation();
  const handleContinue = () => {
    navigation.navigate('Login2');
    const otp = Math.floor(1000 + Math.random() * 9000);
    console.warn(otp);
  };

  return (
    <View style={styles.main}>
      <View style={styles.numview}>
        <Text style={styles.numviewtext}>Enter your mobile number</Text>
        <View style={styles.primaryview}>
            <View style={{backgroundColor:"#DCDCDC",padding:10,borderRadius:10,flexDirection:"row"}}>
                <Icon name="language" size={30} color="black" />
                <Icon name="arrow-drop-down" size={30} color="black" />
            </View>
            <View style={{backgroundColor:"#DCDCDC",borderRadius:10,flexDirection:"row",alignItems:"center",width:245,paddingStart:10}}>
                <Text style={{fontSize:18}}>+91</Text>
                <TextInput style={{fontSize:18,fontWeight:"bold",paddingHorizontal:10,width:200}} placeholder="Mobile Number" keyboardType="numeric" />
            </View>
        </View>
          <TouchableOpacity onPress={handleContinue}>
            <Text style={styles.primarybtn}>Continue</Text>
          </TouchableOpacity>

      </View>
            <Text style={{fontSize:18,textAlign:"center",fontWeight:"bold"}}>Or</Text>

      <View style={styles.numview}>
        <TouchableOpacity>
                <View style={styles.secondarybtn}>
                    <Icon name="person" size={25} color="black"></Icon>
                    <Text style={{fontSize:20,marginHorizontal:10,fontWeight:"bold"}}>Continue with Google</Text>
                </View>              
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.secondarybtn}>
                    <Icon name="email" size={22} color="black"></Icon>
                    <Text style={{fontSize:20,marginHorizontal:10,fontWeight:"bold"}}>Continue with Email</Text>
                </View>              
            </TouchableOpacity>
      </View>
            
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    height: "100%",
    padding:10,
    paddingTop:50
  },
  numview:{
    paddingVertical:15,
    padding:5
  },
  numviewtext: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical:5,
    textAlign:"center"
  },
  primaryview:{
    flexDirection:'row',
    width:'100%',
    marginVertical:15,
    justifyContent:"space-between"
  },
  primarybtn:{
    backgroundColor:"black",
    fontSize:20,
    padding:10,
    color:"white",
    borderRadius:10,
    textAlign:"center"
  },
  secondarybtn:{
    backgroundColor:"#DCDCDC",
    flexDirection:"row",
    padding:15,
    borderRadius:10,
    marginVertical:5,
    justifyContent:"center",
    alignItems:"center"
  }
});
