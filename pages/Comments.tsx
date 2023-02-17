import React, {useState, useEffect} from "react";
import { SafeAreaView, Text, StyleSheet, ScrollView } from "react-native";
import CommentInfo from "../Components/CommentInfo";
import { useQuery } from "@tanstack/react-query/build/lib/useQuery";
import { getCommentFunction } from "../api";

function Comments(props) {
    const [detail, setDetail] = useState(false);

    const postsId = props.route.params.id;
    const {data} = useQuery([ 'comments', postsId ], () =>getCommentFunction(postsId))


    return (
        <ScrollView>
            <SafeAreaView style={styles.commentsListView}>
                {data?.map((item:any, key) => {
                    return (
                        <>
                            <CommentInfo name={item.name} email={item.email} body={item.body} />
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
})

export default Comments;