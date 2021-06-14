import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home'
import Profile from './src/screens/Profile'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator
    initialRouteName = 'Home'
    screenOptions={({route}) => ({
      tabBarIcon:({color})=>{
        let iconname
        if(route.name == 'Home'){
          iconname = 'options-outline' 
        }else if(route.name == 'Content'){
          iconname = 'trophy-outline' 
        }
        return <Ionicons name={iconname} size={25} color={color}/>

        
    }
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Content" component={Profile} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
