import React, {useState} from "react";
import { StyleSheet, SafeAreaView, TextInput, Text, TouchableOpacity } from "react-native";
import { useQuery } from "@tanstack/react-query/build/lib/useQuery";
import { getUserFunction } from "../api";
import FormInput from "../Components/FormInput";


function Users(props) {
    const [email,setEmail] = useState('');
    const [showPassword, setshowPassword] = useState(false);

    const {data} = useQuery(['users'], () => getUserFunction())
    console.log(data);

    const emailList=data?.map((item)=> item?.email)

    function postsToPage() {
        console.log("girdi")
        console.log(data)
        if(emailList?.includes(email)){
            console.log("ife girdi")
            const authUserId=data?.find(item=>item.email==email).id
            props.navigation.navigate('PostsScreen', {authUserId});
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
            style={styles.input}
            placeholder='E-Mail'
            keyboardType="email-address"
            onChangeText={setEmail}
            value={email}
            />
           <FormInput 
                onPress={() => setshowPassword(!showPassword)} 
                secureTextEntry={showPassword} 
                leftIconName='lock-open' 
                rightIconName='remove-red-eye' 
                placeholder='Password'
            />
            <TouchableOpacity style={styles.button} onPress={postsToPage} disabled={email==""}>
                <Text style={styles.button_text}>PRESS ME</Text>
            </TouchableOpacity>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#FAEBD7',
    },
    input:{
        marginTop: 12,
        borderWidth: 1,
        borderRadius:6,
        borderColor:'#DDD',
        padding: 10,
        backgroundColor: '#fff',
        fontSize: 18,
        height: 50,
        width: '90%',
        alignSelf: 'center',
    },
    password: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 12,
        borderWidth:1,
        borderRadius: 6,
        borderColor: '#ddd',
        paddingHorizontal: 10,
        backgroundColor: '#fff'
    },
    password_textBody: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    password_Text: {
        color: 'grey',
        fontSize: 18,
    },
    password_Icon: {
        color: '#FF7F50',
        fontSize: 30,
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF7F50',
        borderRadius: 6,
        height: 50,
        width: '90%',
        alignSelf: 'center',
      },
    button_text: {
        fontSize: 18,
        color: '#fff'
    },
});
export default Users;
