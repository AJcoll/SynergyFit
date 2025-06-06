import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/Onboarding/WelcomeScreen';

// It's a good practice to define your stack param list in a central place
// to ensure type safety.
export type RootStackParamList = {
  Welcome: undefined; // No params expected for Welcome screen
  // e.g., GoalSetting: { userId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        {/* We will add more screens here for the rest of the onboarding flow */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator; 