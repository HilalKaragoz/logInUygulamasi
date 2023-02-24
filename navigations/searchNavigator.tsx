import React, {useState} from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import ButtonClick from '../Components/ButtonClick';


const SearchNavigator = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <View style={styles.container}>
      {
        [...new Array(24)].map((item, index) => {
          return (
            <TouchableOpacity onPress={() => setSelectedIndex(index)}>
              <ButtonClick selected = { selectedIndex==index } />
            </TouchableOpacity>
          )
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap', // Ekranda sığdığı kadar sığdırıyor
    alignItems: 'flex-end',
  },
})

export default SearchNavigator;