import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home'
import Feed from './screens/Feed'
import Notifications from './screens/Notifications'
import Profile from './screens/Profile'
import Settings from './screens/Settings'
export default function App() {
  
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  function HomeTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Notifications" component={Notifications} />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>

    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeTabs} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

 