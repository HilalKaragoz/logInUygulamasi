import React from "react";
import { Text, StyleSheet } from "react-native";

const PostInfo = (props) => {
  return (
    <>
      <Text style={styles.textId}>ID:{props.id}</Text>
      <Text style={styles.textTitle}>TITLE:{props.title}</Text>
      <Text style={styles.textBody}>BODY:{props.body}</Text>
    </>
  )
}

const styles = StyleSheet.create ({
      textId:{
        fontSize:20,
        fontWeight:'bold'
      },
      textTitle:{
        fontSize:15,
      },
      textBody: {
        fontSize:15,
      },
});

export default PostInfo;