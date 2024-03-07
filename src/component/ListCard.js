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
        taskName,
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

        <Text style = {styles.Txt}> Name: {name} </Text>
        <Text style = {styles.Txt}> TaskName: {taskName} </Text>
        <Text style = {styles.Txt}> TaskDescription: {taskDescription} </Text>

        </View>

        <View  style={styles.buttonView}>

          <View style = {styles.IconView}>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'red',
        padding: wp(5),
        marginTop: wp(5),
        marginLeft: wp(5),
        marginRight: wp(5),
    },
    
    Container: {
        width: "80%",
        paddingTop: Platform.OS == "ios" ? hp(4) : hp(2),
        alignItems: "center", // Add this line
        justifyContent: "center",
        height: Platform.OS == "ios" ? hp(15) : hp(12),
    },
    Txt: {
      fontSize: 20,
      fontWeight: "500",
    //   textAlign: "center",
      color: "black",
    },
    buttonView: {
    }, 
    EditIcon: {
  
    },
    IconView: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    DeleteButton: {
        marginLeft: wp(2),

    }
})