import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/Onboarding/WelcomeScreen';
import DemographicsScreen from '../screens/Onboarding/DemographicsScreen';

// It's a good practice to define your stack param list in a central place
// to ensure type safety.
export type RootStackParamList = {
  Welcome: undefined; // No params expected for Welcome screen
  Demographics: undefined;
  // e.g., GoalSetting: { userId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Demographics" component={DemographicsScreen} />
        {/* We will add more screens here for the rest of the onboarding flow */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator; 