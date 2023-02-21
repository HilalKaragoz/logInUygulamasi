import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import Users from "./pages/Users";
import Posts from "./pages/Posts";
import Comments from "./pages/Comments";

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient()

function Router() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="UsersScreen" component={Users} options={{title:"Users Screen"}} />
          <Stack.Screen name="PostsScreen" component={Posts} options={{title:"Posts Screen"}}/>
          <Stack.Screen name="CommentsScreen" component={Comments} options={{title:"Comments Screen"}}/>
        </Stack.Navigator>
      </NavigationContainer>    
    </QueryClientProvider>
  )
}
export default Router;