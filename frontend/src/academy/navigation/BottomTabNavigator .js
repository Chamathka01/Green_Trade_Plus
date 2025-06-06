import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from '../screens/Home';
import Certificates from '../screens/Cerificates';
import Profile from '../screens/Profile';
import AddNewCourseScreen from '../screens/AddNewCourseScreen'; // Import your new screen
import AllCourses from '../screens/AllCourses'; 
import CourseDetails from '../screens/CourseDetails'; 

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#6200ee',
        tabBarInactiveTintColor: '#757575',
        tabBarStyle: {
          paddingBottom: 5,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 5,
        },
      }}
    >
      <Tab.Screen 
        name="Courses" 
        component={Home} 
        options={{
          tabBarLabel: 'Courses',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen 
        name="Certificates" 
        component={Certificates} 
        options={{
          tabBarLabel: 'Certificates',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="certificate" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="MainTabs" 
        component={BottomTabNavigator} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="AddNewCourseScreen" 
        component={AddNewCourseScreen} 
        options={{ headerShown: false }} 
      />
    
      <Stack.Screen 
        name="AllCourses" 
        component={AllCourses} 
        options={{ headerShown: false }} 
      />
        <Stack.Screen 
        name="CourseDetails" 
        component={CourseDetails} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
    
  );
};

export default AppNavigator;
