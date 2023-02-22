import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import MyTabs from "./navigations/bottomNavigator";


const queryClient = new QueryClient()

function Router() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </QueryClientProvider>
  )
}
export default Router;