import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, FlatList } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StatusBar } from "expo-status-bar";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import * as Location from 'expo-location';
import Data from '../components/Data.json';
import Dropdown from "../components/Dropdown";

const RiderSelection = () => {
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState(false);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [address, setAddress] = useState('');
  const [destination, setDestination] = useState('');
  const [suggestions, setSuggestions] = useState([ ]);

  const getback = () => {
    navigation.navigate('Home',{setDestination},{address});
  };

  const fetchDestinationSuggestions = (input) => {
    const filteredColleges = Data.colleges.filter((college) =>
      college.name.toLowerCase().includes(input.toLowerCase())
    );
    return filteredColleges;
  };

  const handleVehicleChange = (value) => {
    console.log("Selected Vehicle:", value);
  };
  
  const handlePassengerChange = (value) => {
    console.log("Selected Passengers:", value);
  };
  

  //clearinput 
  const handleDestinationSelection = (selectedDestination) => {
    setDestination(selectedDestination);
    setSuggestions([ ]);
  };


  //for getting current location
  useEffect(() => {
    const getAddressFromCoordinates = async (latitude, longitude) => {
      try {
        const response = await axios.get(
          `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=f2c6f1476ab3439d937d8d9b7c8bc7a7`
        );

        if (response.data.results.length > 0) {
          const formattedAddress = response.data.results[0].formatted;
          setAddress(formattedAddress);
        }
      } catch (error) {
        console.error('Error fetching address:', error);
      }
    };

    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
      getAddressFromCoordinates(location.coords.latitude, location.coords.longitude);
    })();
  }, []);

  return (
    <View style={{ flex: 1, padding: 10, borderBottomRightRadius: 30, borderBottomLeftRadius: 30 , backgroundColor:"white"}}>
      <StatusBar />

      <View style={{ flex: 0, flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 40, marginBottom: 15 }}>
        <TouchableOpacity onPress={getback}>
          <Icon name="arrow-back" size={32} color="black" style={{ paddingRight: 8 }} />
        </TouchableOpacity>
        <Text style={styles.hometext}>Plan As Rider</Text>
        <Icon name="star" size={30} color="black" style={{ paddingRight: 8 }} />
      </View>

      <View style={{ borderRadius: 20 }}>
        <View style={[styles.inputbox]}>
          <Icon name="radio-button-checked" size={20} color="green" />
          <TextInput
            style={[{ fontSize: 18, fontWeight: "bold", paddingHorizontal: 10, flex: 1 }, styles.focusedInput]}
            value={address}
            editable={true}
            onChangeText={setAddress}
          />
        </View>
        
        <View style={[styles.inputbox]}>
          <Icon name="radio-button-unchecked" size={20} color="black" />
          <TextInput style={[{ fontSize: 18, fontWeight: "bold", paddingHorizontal: 10, flex: 1 }, styles.focusedInput]}
            placeholder="Where to?" onChangeText={(val) => {
            const suggestions = fetchDestinationSuggestions(val);
            setSuggestions(suggestions);
            setDestination(val);}}
            value={destination} editable={true}
          />
        </View>

        { suggestions.length > 0 && (
          <FlatList
          data={suggestions}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleDestinationSelection
          (item.address)}>
            <View style={styles.searchResult}>
              <Text>{item.name}</Text>
              <Text>{item.location}</Text>
            </View>
          </TouchableOpacity>)}
          />)}
      </View>

      <View style={{flexDirection:"column"}}>
      <Dropdown onVehicleChange={handleVehicleChange} onPassengerChange={handlePassengerChange} />
        <TouchableOpacity style={{backgroundColor:"black",margin:4,height:50,justifyContent:"center",borderRadius:10}}
          onPress={getback}>
          <Text style={[styles.hometext,{textAlign:"center",color:"white"}]}>Search For Passengers</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

export default RiderSelection;

const styles = StyleSheet.create({
  hometext: {
    fontSize: 20,
    fontWeight: "900",
    paddingHorizontal: 10,
  },
  primaryview:{
    flexDirection:"row",
  },
  inputbox: {
    flexDirection: "row",
    padding: 10,
    marginHorizontal: 4,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    justifyContent: "space-around",
    alignItems: "center"
  },
  searchResult: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
});
