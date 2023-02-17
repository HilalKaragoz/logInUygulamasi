import React, {useState,useEffect} from "react";
import { SafeAreaView, StyleSheet, Text, Button, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function Posts(props) {
    const [postList,setPostlist] = useState([])
    const [loading,setLoading] = useState(true)
    const [authenticated,setAuthenticated] = useState(false)

    
    const postsList=postList.map((item)=> item?.id)
    console.log('postsList', postsList)

    const authUserId = props.route.params.authUserId;
    //console.log('authUserId', authUserId);

    function commentsToPage(id) {
        props.navigation.navigate('CommentsScreen', {id});
    }
    useEffect(() => {
        const postsUrl= `https://jsonplaceholder.typicode.com/posts?userId=${authUserId}`;
        fetch(postsUrl)
            .then((response) =>  response.json())
            .then((json) => setPostlist(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false))
    },[authUserId])
    // useEffect(()=>{
    //     console.log("postlist",postList)
    // },[postList])
    return (
        <ScrollView>  
            <SafeAreaView style={styles.postListView}>
                {postList?.map((item:any, key) => {
                    return (
                        <>
                            <Text style={styles.textId}>ID:{item.id}</Text>
                            <Text style={styles.textTitle}>TITLE:{item.title}</Text>
                            <Text style={styles.textBody}>BODY:{item.body}</Text>
                            <Button title='Detail' onPress={() => commentsToPage(item.id)}/>
                        </>
                )})}
            </SafeAreaView>            
        </ScrollView>
    );
}

const styles = StyleSheet.create ({
      postListView: {
        padding:10,
        flex:1, 
        alignItems:'flex-start', 
        justifyContent:'flex-start',
      },
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
      button:{
        margin:12,
        alignItems: 'center',
        backgroundColor: '#DDD',
      },
});

export default Posts;