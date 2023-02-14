import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Users from "./pages/Users";
import Posts from "./pages/Posts";
import Comments from "./pages/Comments";

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="UsersScreen" component={Users}/>
        <Stack.Screen name="PostsScreen" component={Posts}/>
        <Stack.Screen name="CommentsScreen" component={Comments}/>
      </Stack.Navigator>
    </NavigationContainer>  
  )
}
export default Router;