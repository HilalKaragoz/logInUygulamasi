import React, { useState } from "react";
import { View, TouchableOpacity,Text, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

const ButtonClick = () => {
    const [clicked, setClicked] = useState(false)
    return (
        <View style={styles.button_container}>
            <TouchableOpacity onPress={() => setClicked(!clicked)}>
                <View style={styles.button}>
                   {clicked 
                    ? <Icon name='sunny' style={styles.button_Icon} />
                    :<Icon name='md-sunny-outline' style={styles.button_Icon}/>}
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
      width: 50,
      height: 50,
      borderRadius: 10,
      backgroundColor: '#FF7F50',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button_Icon: {
      fontSize: 30,
      color: '#fff',
    },
    button_container: {
      width: 50,
      height: 50,
      paddingHorizontal: 8,
      paddingVertical: 6,
      marginBottom:6,
      marginHorizontal: '1%',
      minWidth: '23%',
    },
  });

  export default ButtonClick;