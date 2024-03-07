import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddToTask from '../../screen/AddToTask';
import TaskList from '../../screen/TaskList';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    
    <Stack.Navigator
      initialRouteName="Tasks"
      screenOptions={{ headerShown: false }} 
    >
        <Stack.Screen name="Tasks" component={TaskList} />
        <Stack.Screen name="AddTask" component={AddToTask} />

    </Stack.Navigator>
    
  )
}

export default AppStack

const styles = StyleSheet.create({})