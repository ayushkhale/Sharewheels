import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import Icon from 'react-native-vector-icons/MaterialIcons';
import MapView, { PROVIDER_GOOGLE, Marker,setmao } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import * as Location from 'expo-location';

const Home = (setDestination,address) => {
  //states
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [mapRegion, setMapRegion] = useState(null);
  
  //navigation functions
  const navigation = useNavigation();

  const switchmode = () => {
    navigation.navigate('PassengerScreen');
  };
  
  const Focused = () => {
    navigation.navigate('RiderSelection');
  };

  
  const openDrawer = () => {
    navigation.openDrawer();
  };

  //Current Location hook
  useEffect(() => {

    const getLocation = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location.coords);
        setMapRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        });

      } catch (error) {
        console.error('Error fetching location:', error);
      }
    };
    
    getLocation();
  }, []);

  return (
    <View style={styles.main}>
      <StatusBar />
      <View style={styles.homebox1}>
        <View style={{ flex: 0.9, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <TouchableOpacity onPress={openDrawer}>
          <Icon name="menu" size={32} color="black" style={{ paddingRight: 8 }} />
        </TouchableOpacity>
          <Text style={styles.hometext}>ShareWeeels</Text>
          <Icon name="notifications" size={32} color="black" style={{ paddingRight: 8 }} />
        </View>

        <View style={styles.searchbox}>
          <Icon name="search" size={25} color="black" />
          <TextInput style={[{ fontSize: 18, paddingHorizontal: 8, flex: 1 }]}
            placeholder="Where to ?" onFocus={Focused} />
          <Icon name="schedule" size={30} color="black" style={{ borderLeftWidth: 0.5, paddingHorizontal: 15 }} />
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <MapView style={{ flex: 1, zIndex:-1,margin:-100 }} region={mapRegion}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: location?.latitude || 0,
            longitude: location?.longitude || 0,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          } }>
          {location && (
            <Marker
              coordinate={{ latitude: location.latitude, longitude: location.longitude }}
              title={"Your Location"}
            />
          )}
        </MapView>
      </View>

      <View style={styles.options}>
        <View style={{ backgroundColor: "black", borderRadius: 20, padding: 10, flex: 0.9 }}>
          <TouchableOpacity onPress={switchmode}>
            <Text style={[styles.hometext, { textAlign: "center", color: "white" }]}>Rider</Text>
          </TouchableOpacity>
        </View>

        <View style={{ backgroundColor: "white", borderRadius: 20, padding: 10 }}>
          <TouchableOpacity onPress={switchmode}>
            <Text style={[styles.hometext, { textAlign: "center" }]}>Passenger</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    height: "100%",
    padding: 10,
    backgroundColor:"#fffff"
  },
  homebox1: {
    backgroundColor: "white",
    flex: 0.25,
    padding: 20,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    margin: -10,
    justifyContent: "center",
    shadowColor: '#000',
    shadowOffset:{width: 0,height: 4,},
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,},
    
  hometext: {
    fontSize: 20,
    fontWeight:"900",
    paddingHorizontal:10,
  },
  hometext2: {
    fontSize: 18,
    fontWeight:"600",
    paddingHorizontal:10
  },
  searchbox:{
    flexDirection:"row",
    backgroundColor:"white",
    padding:10,
    borderWidth:1,
    borderColor:"black",
    borderRadius:18,
    justifyContent:"space-around",
    alignItems:"center",
  },
  recents:{
    flexDirection:"row",
    alignItems:"center",
    padding:15,
    borderRadius:10,
    borderBottomWidth:0.5,
  },
  options:{
    flexDirection:"row",
    marginVertical:5,
    justifyContent:"space-between",
    padding:10,
    backgroundColor:"white",
    borderRadius:25,shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
  }
});