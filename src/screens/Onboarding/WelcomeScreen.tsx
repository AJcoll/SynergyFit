import React from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator'; // <-- Import the type from our central navigator

// The local definition is removed to avoid conflict.

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
          // This now correctly navigates to the Demographics screen
          navigation.navigate('Demographics');
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