import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image
} from "react-native";

export default function DefaultMessage() {
  return (
    <View style={styles.container}>
        <Image source={require('../../../assets/chill.png')} />
      <Text style={styles.text}>Nothing to do</Text>
    </View> 
  );
}

const styles = StyleSheet.create({
    container: {
        height: 500,
        justifyContent:"center",
        alignItems:"center"
    },
   text : {
       marginTop:20,
       fontSize:18,
       color:"#707070"
   }
})
