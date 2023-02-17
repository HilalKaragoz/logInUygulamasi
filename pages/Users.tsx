import React, {useState, useEffect} from "react";
import { StyleSheet, SafeAreaView, ScrollView, TextInput, Button, Alert } from "react-native";

function Users(props) {
    const [email,setEmail] = useState();
    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [authenticated,setAuthenticated] = useState(false);
    const [userId,setUserId] = useState(0)

    const emailList=userList.map((item)=> item?.email)
    //console.log(emailList);

    useEffect(() => {
        const usersUrl = 'https://jsonplaceholder.typicode.com/users';
        fetch(usersUrl)
        .then((response) => response.json())
        .then((json) => setUserList(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false))
    }, []) 
    //console.log(userList);

    
    useEffect(()=> {}, [email])


    function postsToPage() {
        if(emailList.includes(email)){
            const authUserId=userList?.find(item=>item.email==email).id
            //console.log(authUserId);
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
