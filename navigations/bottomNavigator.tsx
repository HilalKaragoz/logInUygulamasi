import React from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavigationContainer from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

//Navigations
import HomeNavigator from './homeNavigator';
import SearchNavigator from './search';
import SettingNavigator from './settings';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if(route.name === 'Home') {
            iconName = focused 
              ? 'home'
              : 'home-outline';
          }
          else if (route.name === 'Search') {
            iconName = focused
              ? 'search'
              : 'search-outline';
          }
          else if (route.name === 'Settings') {
            iconName = focused 
              ? 'settings'
              : 'settings-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato', 
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Search" component={SearchNavigator} />
      <Tab.Screen name="Settings" component={SettingNavigator} />
    </Tab.Navigator>
  );
}

export default MyTabs; 