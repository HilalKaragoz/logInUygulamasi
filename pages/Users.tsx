import React, {useState, useEffect} from "react";
import { StyleSheet, SafeAreaView, ScrollView, TextInput, Button, Alert } from "react-native";
import { useQuery } from "@tanstack/react-query/build/lib/useQuery";
import { getUserFunction } from "../api";

function Users(props) {
    const [email,setEmail] = useState();
    const [loading, setLoading] = useState(false);
    const [authenticated,setAuthenticated] = useState(false);
    const [userId,setUserId] = useState(0)

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
        <SafeAreaView>
            <TextInput
            style={styles.input}
            placeholder='E-Mail'
            onChangeText={setEmail}
            >
            </TextInput>
            <Button
            title="Press me"
            color="#f194ff"
            onPress={postsToPage}
            style={styles.button}
            />    
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection:'row',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
    },
    input:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius:6,
        borderColor:'#DDD',
        padding: 10,
      },
      button:{
        margin:12,
        alignItems: 'center',
        backgroundColor: '#DDD',
      },
});
export default Users;
