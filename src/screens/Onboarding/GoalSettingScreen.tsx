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

type Goal = 'lose_weight' | 'gain_muscle' | 'maintain_weight';

type Props = NativeStackScreenProps<RootStackParamList, 'GoalSetting'>;

const GoalSettingScreen = ({ navigation }: Props) => {
  const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null);

  const handleNext = () => {
    if (!selectedGoal) {
      Alert.alert('Select a Goal', 'Please choose a goal to continue.');
      return;
    }
    console.log('Selected Goal:', selectedGoal);
    // We will navigate to the next screen later
    Alert.alert('Goal Saved!', `Your goal is to ${selectedGoal.replace('_', ' ')}.`);
  };

  const goals: { key: Goal; label: string }[] = [
    { key: 'lose_weight', label: 'Lose Weight' },
    { key: 'gain_muscle', label: 'Gain Muscle' },
    { key: 'maintain_weight', label: 'Maintain Weight' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>What is Your Primary Goal?</Text>
      <Text style={styles.subtitle}>
        This will help us tailor your workouts and nutrition plans.
      </Text>

      <View style={styles.optionsContainer}>
        {goals.map((goal) => (
          <TouchableOpacity
            key={goal.key}
            style={[
              styles.optionButton,
              selectedGoal === goal.key && styles.selectedOption,
            ]}
            onPress={() => setSelectedGoal(goal.key)}
          >
            <Text
              style={[
                styles.optionText,
                selectedGoal === goal.key && styles.selectedOptionText,
              ]}
            >
              {goal.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Button title="Next" onPress={handleNext} disabled={!selectedGoal} />
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
  },
  selectedOption: {
    backgroundColor: '#007AFF', // A nice blue for selection
    borderColor: '#007AFF',
  },
  optionText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  selectedOptionText: {
    color: '#fff',
  },
});

export default GoalSettingScreen; 