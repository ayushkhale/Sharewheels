import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react'

const Recents = () => {
  return (
    <View style={{flex:1}}>
      <ScrollView>
        <Text style={{fontSize:20,fontWeight:900,textAlign:'center',marginVertical:5}}>Recents</Text>
        <View style={styles.recents}>
            <Icon name="history" size={30}></Icon>
            <View style={{padding:20}}>
                <Text style={{fontSize:18,fontWeight:"bold"}}>Shop 11, Jainson Plaza</Text>
                <Text>B.S Marg, Fort, Mumbai, Maharashtra</Text>
            </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Recents

const styles = StyleSheet.create({
  recents:{
    flexDirection:"row",
    alignItems:"center",
    paddingHorizontal:15,
    margin:5,
    borderBottomWidth:0.2
  }
});
