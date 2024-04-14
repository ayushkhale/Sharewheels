import { StyleSheet, Text, View,TextInput, TouchableOpacity,Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Flag from "react-native-flags";

const Login3 = () => {
  const navigation = useNavigation();
  const handleContinue = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.main}>
      <View style={styles.numview}>
        <Text style={styles.numviewtext}>What's Your Name ?</Text>
        <Text style={{fontSize:15}}>Let us know how to properly address you</Text>
      </View>

      <View style={styles.numview}>
        <Text style={{fontSize:20,paddingVertical:10}}>First Name</Text>
        <TextInput placeholder="Please enter first name" style={{fontSize:20,backgroundColor:"#DCDCDC",padding:10,borderRadius:10,fontWeight:"bold"}}></TextInput>
        <Text style={{fontSize:20,paddingVertical:10}}>Last Name</Text>
        <TextInput placeholder="Please enter last name" style={{fontSize:20,backgroundColor:"#DCDCDC",padding:10,borderRadius:10,fontWeight:"bold"}}></TextInput>
      </View>
      
      <View style={{padding:10}}>
        <TouchableOpacity onPress={handleContinue}>
            <Text style={styles.primarybtn}>Continue</Text>
        </TouchableOpacity>
      </View>
      
            
    </View>
  );
};

export default Login3;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    height: "100%",
    padding:10,
    paddingTop:50
  },
  numview:{
    paddingVertical:10,
    padding:15
  },
  numviewtext: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical:5,
    textAlign:"left"
  },
  primaryview:{
    flexDirection:'row',
    width:'100%',
    marginVertical:5,
    justifyContent:"space-between"
  },
  primarybtn:{
    backgroundColor:"black",
    fontSize:20,
    padding:10,
    color:"white",
    borderRadius:10,
    textAlign:"center",
    borderRadius:15
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
