import React, {useState, useEffect} from "react";
import { SafeAreaView, Text, StyleSheet, ScrollView } from "react-native";

function Comments(props) {
    const [detail, setDetail] = useState(false);
    const [commentsList, setCommentsList] = useState();
    const [loading, setLoading] = useState(false);

    const postsId = props.route.params.id;

    useEffect(()=> {
        const commentsUrl= `https://jsonplaceholder.typicode.com/posts/${postsId}/comments`;
        setDetail(true)
        fetch(commentsUrl)
        .then((response) => response.json())
        .then((json) => setCommentsList(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false))
    },[])

    return (
        <ScrollView>
            <SafeAreaView style={styles.commentsListView}>
                {commentsList?.map((item:any, key) => {
                    return (
                        <>
                            <Text style={styles.textName}>NAME:{item.name}</Text>
                            <Text style={styles.textEmail}>EMAIL:{item.email}</Text>
                            <Text style={styles.textCommentsBody}>BODY:{item.body}</Text>
                        </>
                    )
                })}
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create ({
    commentsListView: {
        padding:10,
        flex:1, 
        alignItems:'flex-start', 
        justifyContent:'flex-start',
      },
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

export default Comments;