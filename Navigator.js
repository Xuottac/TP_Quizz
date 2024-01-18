import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import QuizSelectionScreen from './Screens/QuizSelectionScreen';
import QuizScreen from './Screens/QuizScreen';
import ResultScreen from './Screens/ResultScreen';
import AllScoresScreen from './Screens/AllScoresScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Assurez-vous d'installer cette bibliothèque d'icônes

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function StackAppNavigator() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="QuizzSelection" component={QuizSelectionScreen} />
      <Stack.Screen name="Quiz" component={QuizScreen} />
      <Stack.Screen name="Result" component={ResultScreen} />
    </Stack.Navigator>
  );
};

export function BottomTab() {

  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-home" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="QuizSelection" component={StackAppNavigator} options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="help-outline" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="AllScores" component={AllScoresScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="receipt-outline" color={color} size={size} />
        ),
      }} />
    </Tab.Navigator>
  );
}

export default BottomTab;