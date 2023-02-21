import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CommentInfo = (props) => {
  return(
    <View>
      <Text style={styles.textName}>NAME:{props.name}</Text>
      <Text style={styles.textEmail}>EMAIL:{props.email}</Text>
      <Text style={styles.textCommentsBody}>BODY:{props.body}</Text>
    </View>
  )    
}

const styles = StyleSheet.create ({
  textName:{
    fontSize:20,
    fontWeight:'bold'
  },
  textEmail:{
    fontSize:15,
  },
  textCommentsBody: {
    fontSize:15,
  },
});

export default CommentInfo;