import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import Header from '../component/Header'
import CustomerTextInput from '../component/CustomerTestInput'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CustomerButton from '../component/CustomerButton';
import AsyncStorage from "@react-native-async-storage/async-storage";

const AddToTask = ({navigation, route}) => {

  const [name, setName] = useState('')
  const [taskName, setTaskName] = useState('')
  const [taskDescription, setTaskDescription] = useState('')

  useEffect(() => {
    if (route?.params?.name) {
      setName(route?.params.name)
    } if (route?.params?.task) {
      setTaskName(route?.params.taskName)
    } if (route?.params?.taskDescription) {
      setTaskDescription(route?.params.taskDescription)
    }
  })

  const onPressAdd = () => {
    if (name == '') {
      alert('Please Enter The Name')
    } else if (taskName == '') {
      alert('Please Enter Task Name')
    } else if (taskDescription == '') {
      alert('Please Enter The Task Description')
    } else {
      AsyncStorage.getItem('tasks')
        .then((response) => {
          if (response == null) {
            const tasks = [];
            tasks.push({
              name: name,
              taskName: taskName,
              taskDescription: taskDescription
            })
            AsyncStorage.setItem('tasks', JSON.stringify(tasks))
              .then(() => {
                alert('Task Added Successfully')
                navigation.goBack()
              })
              .catch(() => {
                alert('Something Went Wrong')
              })
              // setTasks(tasks); // Update the state here
          }
          else {
            const tasks = JSON.parse(response)
            tasks.push({
              name: name,
              taskName: taskName,
              taskDescription: taskDescription
            })
            AsyncStorage.setItem('tasks', JSON.stringify(tasks))
            .then(() => {
                alert('Task Added Successfully')
                navigation.goBack()
              })
            .catch(() => {
                alert('Something Went Wrong')
              })
              // setTasks(tasks); // Update the state here
          }
        })
        .catch(() => {
           alert('Failed To Task')
        })
    }
  }

  const onPressEdit = () => {

  }

    const onPressBack = () => {
      navigation.goBack();
    }
    
  return (
    <View style = {styles.root}>
        <Header title = {'Add To Task'} onPressBack = {onPressBack}/>

      <Text style={styles.titleText}>Please Enter Name </Text>
        <CustomerTextInput
          placeholder={"Please Enter Name"}
          onChangeText={setName}
          value={name}
        />

      <Text style={styles.titleText}>Please Enter Task </Text>
        <CustomerTextInput
          placeholder={"Please Enter Task"}
          onChangeText={setTaskName}
          value={taskName}
        />

      <Text style={styles.titleText}>Please Enter Task Description</Text>
        <CustomerTextInput
          placeholder={"Please Enter Description"}
          onChangeText={setTaskDescription}
          value={taskDescription}
        />

      {(route?.params?.name && route?.params?.taskName && route?.params?.taskDescription) ? 
        (
          <CustomerButton title = {'Edit Task'} onPress = {onPressEdit}/>
        ) : (
          <CustomerButton title = {'Add Task'} onPress = {onPressAdd}/>
        )
      }

    </View>
  )
}

export default AddToTask

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  titleText: {
    fontSize: 15,
    fontWeight: "600",
    color: "black",
    marginLeft: wp(5),
    paddingTop: hp(5),
  },
})