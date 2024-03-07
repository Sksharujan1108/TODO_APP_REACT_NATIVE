import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const CustomerButton = (props) => {
  const { title, onPress } = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomerButton

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    width: wp(90),
    alignItems: "center",
    justifyContent: "center",
    height: hp(6),
    backgroundColor: "#2ABB5A",
    borderRadius: 10,
    marginTop: hp(8),
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
  },
})