import React from "react";
import { SafeAreaView, StyleSheet, Button, ScrollView, View, FlatList } from "react-native";
import PostInfo from "../Components/PostInfo";
import { useQuery } from "@tanstack/react-query/build/lib/useQuery";
import { getPostFunction } from "../api";

function Posts(props) {

  const authUserId = props.route.params.authUserId;
  const {data} = useQuery([ 'posts', authUserId ], () => getPostFunction(authUserId))
  console.log("data",data)
  const commentsToPage = (id)=> {
    props.navigation.navigate('CommentsScreen', {id});
  }
  return (
    <View style={styles.container} >  
      <SafeAreaView style={styles.postListView}>
        {/* {data?.map((item:any, index) => {
          return (
            <View key={index}>
              <PostInfo id={item.id} title={item.title} body={item.body} />
              <Button title='Detail' onPress={() => commentsToPage(item.id)}/>
            </View>
        )})} */}
        <FlatList  data={data} keyExtractor={(item) => item.id} renderItem={({item, index}) => {
          return (
            <View key={index}>
              <PostInfo id={item.id} title={item.title} body={item.body} />
              <Button title='Detail' onPress={() => commentsToPage(item.id)}/>
            </View>
        )
        }}  />
      </SafeAreaView>            
    </View>
  );
}

const styles = StyleSheet.create ({
  container:{flex:1},
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