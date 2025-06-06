import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const WorkoutLogScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Workout Log</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default WorkoutLogScreen; 