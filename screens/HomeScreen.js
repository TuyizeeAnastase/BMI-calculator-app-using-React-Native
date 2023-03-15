import React from 'react';
import { Text, View,StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title:{
    textTransform: "uppercase",
    alignSelf:'center',
    marginTop:100,
    fontSize:40
  },
  title1:{
    alignSelf:'center',
    marginTop:100,
    fontSize:20,
    color:"#009688"
  }
});


export default function HomeScreen () {
  return (
    <View>
      <Text style={styles.title}>BMI calculator app</Text>
      <Text style={styles.title1}>Click the button in top Right corner to get started</Text>
    </View>
  )
}