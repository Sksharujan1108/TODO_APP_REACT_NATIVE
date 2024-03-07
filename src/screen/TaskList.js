import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import Header from '../component/Header'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ListCard from '../component/ListCard';
import AsyncStorage from "@react-native-async-storage/async-storage";

const TaskList = ({navigation}) => {
  const [tasksData, setTasks] = useState([])

    const onPressAdd = () => {
      navigation.navigate('AddTask')
    }


    useEffect(() => {
      const unsubscribe = navigation.addListener("focus", () => {
        getTask();
      });
      return unsubscribe;
    }, [navigation]);

    // Add The Data View ******
    const getTask = () => {
      AsyncStorage.getItem('tasks')
      .then((response) => { 
          if (response !== null) {
            setTasks(JSON.parse(response));
            console.log('*********', JSON.stringify(JSON.parse(response)));
          }
      })
      .catch(() => {
        console.log('fgh');
        alert('Task not found')
      })    
    }

    const onPressDelete = (index) => {
      const tasks = tasksData
      tasks.splice(index, 1)
      setTasks(tasks)
      AsyncStorage.setItem('tasks', JSON.stringify(tasks))
     .then(() => {
          alert('Task Deleted Successfully')
          getTask();
        })
        .catch((error) => {
          alert('Something Went Wrong')
          console.log("Error in deleting the data", error);
        });
    }

  return (
    <View styles = {styles.root}>
      <Header title = {'Task List'} onPressAdd = {onPressAdd}/>
      
      <FlatList
        data = {tasksData}
        renderItem = {({ item, index }) => (
          <ListCard
            key = {index}
            name = {item.name}
            taskName = {item.taskName}
            taskDescription = {item.taskDescription}
            onPress = {() => {
              getTask()
            }}
            onPressEdit = {() => {
              navigation.navigate('AddTask', {
                index,
                name: item.name,
                taskName: item.taskName,
                taskDescription: item.taskDescription,
              })
            }}

            onPressDelete = {()  => {
              onPressDelete(index)
            }}
          />
        )}
      />
    </View>
  )
}

export default TaskList

const styles = StyleSheet.create({
  root: { 
    flex: 1, 
    alignItems: "center" 
  },
})