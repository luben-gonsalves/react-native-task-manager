import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import {StatusBar} from 'react-native';

import Task from './Task/Task';

import DefaultMessage from './Task/DefaultMessage';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function Main() {
  
  const [tasks,setState] = useState([]);
  const [taskText,setText] = useState("");

 const onAddTask = () => {
    if (tasks && taskText.length != 0) {
        setState([...tasks, {
          'task':taskText
        }]);
        setText("")
    }
  }

 const deleteTask=(key)=>{
    let temp = [...tasks];
    temp.splice(key,1);
    setState(temp);
 }

 let Tasks = tasks.map((val, key) => {
  return <Task key={key} keyval={key} val={val}
      deleteMethod={() => deleteTask(key)}
  />
})

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerText}>Task Manager</Text>
     </View>

      <ScrollView style={styles.scrollContainer} >
        {tasks.length == 0 ? (<DefaultMessage/>): (Tasks)}
      </ScrollView>

    {taskText.length > 0 ?
    (<TouchableOpacity  onPress={onAddTask} style={styles.addButton}>
      <Icon name="plus" style={styles.addIconStyle} />
    </TouchableOpacity>) : null
    }
   

    <View style={styles.footer}>
        <TextInput
            style={styles.textInput}
            onChangeText={taskText => setText(taskText)}
            value={taskText}
            placeholder='Enter Quick Task Here'
            placeholderTextColor='white'
            underlineColorAndroid='white'>
        </TextInput>
    </View>
   </View>
  );
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      marginTop:StatusBar.currentHeight
  },
  header: {
      backgroundColor: '#1DA1F2',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 3,
      borderBottomColor: '#ddd',
  },
  headerText: {
      color: 'white',
      fontSize: 18,
      padding: 15,
  },
  scrollContainer: {
      flex: 1,
      marginBottom: 100,
  },
  footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 10,
  },
  textInput: {
      alignSelf: 'stretch',
      color: '#fff',
      padding: 20,
      backgroundColor: '#1DA1F2',
      borderTopWidth: 2,
      borderTopColor: '#ededed',
  },
  addButton: {
      position: 'absolute',
      zIndex: 11,
      right: 20,
      bottom: 90,
      backgroundColor: '#1DA1F2',
      width: 60,
      height: 60,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 8,
  },
  addIconStyle: {
      color: '#ffff',
      fontSize: 24,
  },
});
