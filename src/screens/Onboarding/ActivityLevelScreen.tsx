import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  SafeAreaView,
  Alert,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';

type ActivityLevel = 'sedentary' | 'lightly_active' | 'moderately_active' | 'very_active';

type Props = NativeStackScreenProps<RootStackParamList, 'ActivityLevel'>;

const ActivityLevelScreen = ({ navigation }: Props) => {
  const [selectedLevel, setSelectedLevel] = useState<ActivityLevel | null>(null);

  const handleNext = () => {
    if (!selectedLevel) {
      Alert.alert('Select a Level', 'Please choose your activity level to continue.');
      return;
    }
    console.log('Selected Activity Level:', selectedLevel);
    // This is the end of our current onboarding flow
    // We navigate to the main app, which is a tab navigator.
    // The `replace` action removes the onboarding stack from history,
    // so the user can't press "back" to go back into the setup flow.
    navigation.replace('MainApp');
  };

  const levels: { key: ActivityLevel; label: string, description: string }[] = [
    { key: 'sedentary', label: 'Sedentary', description: 'Little or no exercise' },
    { key: 'lightly_active', label: 'Lightly Active', description: 'Exercise 1-3 days/week' },
    { key: 'moderately_active', label: 'Moderately Active', description: 'Exercise 3-5 days/week' },
    { key: 'very_active', label: 'Very Active', description: 'Hard exercise 6-7 days/week' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>How Active Are You?</Text>
      <Text style={styles.subtitle}>
        This helps us set your baseline calorie and macro targets.
      </Text>

      <View style={styles.optionsContainer}>
        {levels.map((level) => (
          <TouchableOpacity
            key={level.key}
            style={[
              styles.optionButton,
              selectedLevel === level.key && styles.selectedOption,
            ]}
            onPress={() => setSelectedLevel(level.key)}
          >
            <Text style={[styles.optionLabel, selectedLevel === level.key && styles.selectedOptionText]}>
              {level.label}
            </Text>
            <Text style={[styles.optionDescription, selectedLevel === level.key && styles.selectedOptionText]}>
              {level.description}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Button title="Finish Setup" onPress={handleNext} disabled={!selectedLevel} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 40,
  },
  optionsContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  optionButton: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: 'transparent',
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  optionLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  optionDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  selectedOptionText: {
    color: '#fff',
  },
});

export default ActivityLevelScreen; 