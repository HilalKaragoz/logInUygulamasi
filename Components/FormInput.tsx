import React from "react-native";
import {View, TextInput, TouchableOpacity, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

interface IFormInput {
    onPress :() => void;
    secureTextEntry?:boolean;
    leftIconName?:string;
    rightIconName?:string;
    placeholder?:string;
}

const FormInput = ({onPress, secureTextEntry= false, leftIconName, rightIconName, placeholder} : IFormInput) => {
    return(
        <View style={styles.container}>
                {leftIconName && <Icon
                    name={leftIconName}
                    style={styles.formInput_Icon}
                />}
                <TextInput 
                    style={styles.formInput_Text}
                    placeholder= {placeholder}
                    secureTextEntry={secureTextEntry}
                    autoCapitalize='none'
                />
            {rightIconName && <TouchableOpacity onPress={onPress }>
                <Icon 
                    name={rightIconName}
                    style={styles.formInput_Icon}
                />
            </TouchableOpacity>}
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 12,
        borderWidth:1,
        borderRadius: 6,
        borderColor: '#ddd',
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        height: 50,
        width: '90%',
        alignSelf: 'center',
    },
    formInput_textBody: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    formInput_Text: {
        color: 'grey',
        fontSize: 18,
    },
    formInput_Icon: {
        color: '#FF7F50',
        fontSize: 30,
    },
})

export default FormInput;
