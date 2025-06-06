import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/Onboarding/WelcomeScreen';
import DemographicsScreen from '../screens/Onboarding/DemographicsScreen';
import GoalSettingScreen from '../screens/Onboarding/GoalSettingScreen';
import ActivityLevelScreen from '../screens/Onboarding/ActivityLevelScreen';

// It's a good practice to define your stack param list in a central place
// to ensure type safety.
export type RootStackParamList = {
  Welcome: undefined; // No params expected for Welcome screen
  Demographics: undefined;
  GoalSetting: undefined;
  ActivityLevel: undefined;
  // e.g., GoalSetting: { userId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Demographics" component={DemographicsScreen} />
        <Stack.Screen name="GoalSetting" component={GoalSettingScreen} />
        <Stack.Screen name="ActivityLevel" component={ActivityLevelScreen} />
        {/* We will add more screens here for the rest of the onboarding flow */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator; 