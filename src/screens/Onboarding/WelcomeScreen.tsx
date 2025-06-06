import React from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

// We will define this type in our navigator file later
type RootStackParamList = {
  Welcome: undefined;
  // ... other screens
};

type Props = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

const WelcomeScreen = ({ navigation }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome to SynergyFit AI</Text>
      <Text style={styles.subtitle}>
        Your personal journey to health and fitness starts here.
      </Text>
      <Button
        title="Get Started"
        onPress={() => {
          // Navigate to the next onboarding screen
          console.log('Navigate to next screen');
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 40,
    color: '#666',
  },
});

export default WelcomeScreen; 