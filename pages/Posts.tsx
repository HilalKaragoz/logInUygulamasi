import React, {useState,useEffect} from "react";
import { SafeAreaView, StyleSheet, Text, Button, ScrollView } from "react-native";
import PostInfo from "../Components/PostInfo";
import { useQuery } from "@tanstack/react-query/build/lib/useQuery";
import { getPostFunction } from "../api";

function Posts(props) {
  const [authenticated,setAuthenticated] = useState(false)

  const authUserId = props.route.params.authUserId;
  const {data} = useQuery([ 'posts', authUserId ], () => getPostFunction(authUserId))
  console.log("data",data)
  const commentsToPage = (id)=> {
    props.navigation.navigate('CommentsScreen', {id});
  }
  return (
    <ScrollView>  
      <SafeAreaView style={styles.postListView}>
        {data?.map((item:any, key) => {
          return (
            <>
              <PostInfo id={item.id} title={item.title} body={item.body} />
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
      button:{
        margin:12,
        alignItems: 'center',
        backgroundColor: '#DDD',
      },
});

export default Posts;