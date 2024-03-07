import { StyleSheet, Text, TouchableOpacity, View, Platform} from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";
import { FontAwesome } from '@expo/vector-icons';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

const ListCard = (props) => {
    const {
        name,
        title,
        taskDescription,
        onPress,
        onPressEdit,
        onPressDelete,
    } = props;
  return (
    <View  style={styles.root}>
        <TouchableOpacity styles = {styles.Container} onPress = {onPress}>

      <View style = {styles.ListItem}>
        <View style = {styles.TxtFormat}>
        <Text style = {styles.Name}> Name: {name} </Text>
        <Text style = {styles.Title}>  TaskName: {title} </Text>
        <Text style = {styles.Description}> TaskDescription: {taskDescription} </Text>
        </View>

        <View  style={styles.buttonView}>
          <TouchableOpacity 
            style = {styles.EditIcon}
            onPress = {onPressEdit}
          >
              <FontAwesome
                name="edit"
                size={30}
                color="black"
               />
          </TouchableOpacity>

          <TouchableOpacity
            style = {styles.DeleteIcon}
            onPress = {onPressDelete}
          >
            <Ionicons
              name="trash"
              size={40}
              color="black"
            />
          </TouchableOpacity>
        </View>

      </View>
        </TouchableOpacity>
    </View>
  )
}

export default ListCard

const styles = StyleSheet.create({
    root: {
       flex: 1,
       
    },
    ListItem: {
        backgroundColor: 'red',
        padding: wp(4),
        marginTop: wp(5),
        marginLeft: wp(5),
        marginRight: wp(5),
    },
    TxtFormat: {
        alignItems: "center", // Add this line
        justifyContent: "center",
    },
    Container: {
        width: "80%",
        paddingTop: Platform.OS == "ios" ? hp(4) : hp(2),
        alignItems: "center", // Add this line
        justifyContent: "center",
        height: Platform.OS == "ios" ? hp(15) : hp(12),
      },
    Name: {
      fontSize: 25,
      fontWeight: "500",
      textAlign: "center",
      color: "black",
    },
    Title: {
      fontSize: 20,
      fontWeight: "400",
      textAlign: "center",
      color: "black",
    },
    Description: {
        fontSize: 20,
        fontWeight: "400",
        textAlign: "center",
        color: "black",
    },
    buttonView: {

        flexDirection: 'column', // Change to 'row' for horizontal alignment
        justifyContent: 'space-around',
        position: "absolute",
        right: wp(2),
        top: hp(2),
    }, 
    EditIcon: {
  
    },
    DeleteButton: {
        marginLeft: wp(2),

    }
})