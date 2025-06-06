import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import the placeholder screens
import DashboardScreen from '../screens/main/DashboardScreen';
import WorkoutLogScreen from '../screens/main/WorkoutLogScreen';
import MealLogScreen from '../screens/main/MealLogScreen';
import ProfileScreen from '../screens/main/ProfileScreen';

export type MainTabParamList = {
  Dashboard: undefined;
  WorkoutLog: undefined;
  MealLog: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // We can hide the header for a cleaner look
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="WorkoutLog" component={WorkoutLogScreen} options={{ title: 'Workouts' }} />
      <Tab.Screen name="MealLog" component={MealLogScreen} options={{ title: 'Meals' }} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;