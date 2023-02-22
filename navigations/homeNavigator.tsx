import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Comments from '../pages/Comments'
import Posts from '../pages/Posts'
import Users from '../pages/Users'

const HomeNavigator = () => {

const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="UsersScreen" component={Users} options={{title:"Home Screen"}} />
    <Stack.Screen name="PostsScreen" component={Posts} options={{title:"Posts Screen"}}/>
    <Stack.Screen name="CommentsScreen" component={Comments} options={{title:"Comments Screen"}}/>
  </Stack.Navigator>
  )
}


export default HomeNavigator;