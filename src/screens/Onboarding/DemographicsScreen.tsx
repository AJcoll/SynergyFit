import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  SafeAreaView,
  Alert,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Demographics'>;

const DemographicsScreen = ({ navigation }: Props) => {
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  // We'll add a proper gender selection later
  const [gender, setGender] = useState('');

  const handleNext = () => {
    // Basic validation
    if (!age || !height || !weight) {
      Alert.alert('Missing Information', 'Please fill out all fields.');
      return;
    }
    // Log the data for now. Later we'll save it.
    console.log({ age, height, weight, gender });

    // Navigate to the next screen (which we'll create later)
    // navigation.navigate('GoalSetting');
    Alert.alert('Success!', 'Data saved (for now). Next screen is not ready yet.');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Tell Us About Yourself</Text>
      <Text style={styles.subtitle}>
        This helps us create your personalized plan.
      </Text>

      <View style={styles.form}>
        <Text style={styles.label}>Age</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g., 25"
          keyboardType="number-pad"
          value={age}
          onChangeText={setAge}
        />

        <Text style={styles.label}>Height (cm)</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g., 175"
          keyboardType="number-pad"
          value={height}
          onChangeText={setHeight}
        />

        <Text style={styles.label}>Weight (kg)</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g., 70"
          keyboardType="number-pad"
          value={weight}
          onChangeText={setWeight}
        />
        {/* We will replace this with a picker component later */}
        <Text style={styles.label}>Gender</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g., Male, Female, Other"
          value={gender}
          onChangeText={setGender}
        />
      </View>

      <Button title="Next" onPress={handleNext} />
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
    marginTop: 20,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  form: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 20,
  },
});

export default DemographicsScreen; 