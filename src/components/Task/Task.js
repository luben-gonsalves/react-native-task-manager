import React, { useState }  from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import CheckBox from '@react-native-community/checkbox';

export default function Task(props) {
  const [isSelected, setSelection] = useState(false);
  return (
    <View key={props.keyval} style={styles.task}>
       <CheckBox
       value={isSelected}
       onValueChange={(newValue) => setSelection(newValue)}
      />
    <Text style={[styles.taskText,isSelected ? styles.strikeThrough:[]]}>{props.val.task}</Text>
    <TouchableOpacity onPress={props.deleteMethod} style={styles.taskDelete}>
        <Icon name="remove" style={styles.removeIconStyle}/>
    </TouchableOpacity>
  </View> 
  );
}

const styles = StyleSheet.create({
    task: {
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
        flexDirection:"row",
        alignItems: 'center',

    },
    taskText: {
        paddingLeft: 10,
    },
    taskDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10
    },
    removeIconStyle: {
      color:"red",
      fontSize:18
    },
    strikeThrough: {
      textDecorationLine:'line-through'
    }
})