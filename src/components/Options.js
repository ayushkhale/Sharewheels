import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const Options = () => {
  return (
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
  )
}

export default Options

const styles = StyleSheet.create({
    options:{
        flexDirection:"row",
        marginVertical:5,
        justifyContent:"space-between",
        padding:10,
        backgroundColor:"white",
        borderRadius:25
      }
})