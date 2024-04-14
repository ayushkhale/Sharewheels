import { StyleSheet, Text, View,TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialIcons';

const Login2 = () => {
  const navigation = useNavigation();
  const handleContinue = () => {
    navigation.navigate('Login3');
    console.warn("Login Sucessful");
  };

  return (
    <View style={styles.main}>
      <View style={styles.numview}>
        <Text style={styles.numviewtext}>Enter the 4-digit code sent to you at 8319963447</Text>
        <Text style={{fontSize:18,marginVertical:5,textDecorationLine:"underline",textAlign:"center"}}>Changed Your Mobile Number?</Text>
        <View style={styles.primaryview}>
            <TextInput keyboardType="numeric"style={styles.otpbox} maxLength={1}></TextInput>
            <TextInput keyboardType="numeric" style={styles.otpbox} maxLength={1}></TextInput>
            <TextInput keyboardType="numeric" style={styles.otpbox} maxLength={1}></TextInput>
            <TextInput keyboardType="numeric" style={styles.otpbox} maxLength={1}></TextInput>
        </View>

        <View style={[styles.numview2,styles.primaryview]}>
            <TouchableOpacity onPress={handleContinue}>
                <View style={styles.primarybtn}>
                    <Text style={{fontSize:15,paddingHorizontal:20,fontWeight:"bold",color:"white"}}>Submit Code</Text>
                </View>              
            </TouchableOpacity>
            
            <TouchableOpacity>
                <View style={styles.secondarybtn}>
                    <Text style={{fontSize:15,paddingHorizontal:20,fontWeight:"bold"}}>Resend Code</Text>
                </View>              
            </TouchableOpacity>
      </View>
        
      </View>
    </View>
  );
};

export default Login2;

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
    fontSize: 25,
    fontWeight: "bold",
    marginVertical:5,
    textAlign:"center"
  },
  primaryview:{
    flexDirection:'row',
    width:'100%',
    marginVertical:15,
    justifyContent:"space-around"
  },
  otpbox:{
    width:60,
    height:60,
    backgroundColor:"#DCDCDC",
    borderRadius:10,
    fontSize:30,
    textAlign:"center",
    fontWeight:"bold"
  },
  primarybtn:{
    backgroundColor:"black",
    flexDirection:"row",
    padding:10,
    borderRadius:10,
    marginVertical:5,
    justifyContent:"center",
    alignItems:"center"
  },
  primarybtno:{
    backgroundColor:"blue",
    flexDirection:"row",
    padding:10,
    borderRadius:10,
    marginVertical:5,
    justifyContent:"center",
    alignItems:"center"
  },
  secondarybtn:{
    backgroundColor:"#DCDCDC",
    flexDirection:"row",
    padding:10,
    borderRadius:10,
    marginVertical:5,
    justifyContent:"center",
    alignItems:"center"
  }
});
