import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { colors, typography } from '../../styles';

const DashboardScreen = () => {
  // Eventually, this would come from user data
  const userName = 'Allan';

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Good morning, {userName}</Text>
        <Text style={styles.subtitle}>Here's your daily summary</Text>
        <View style={styles.statsContainer}>
          {/* Placeholder Stat Cards */}
          <View style={styles.statCard}>
            <Text style={styles.statValue}>2100</Text>
            <Text style={styles.statLabel}>Calories</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>150g</Text>
            <Text style={styles.statLabel}>Protein</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>45m</Text>
            <Text style={styles.statLabel}>Workout</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContainer: {
    padding: 20,
  },
  header: {
    fontFamily: typography.primary,
    fontSize: typography.sizes.h2,
    fontWeight: 'bold',
    color: colors.text,
  },
  subtitle: {
    fontFamily: typography.secondary,
    fontSize: typography.sizes.h4,
    color: colors.textSecondary,
    marginBottom: 30,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  statCard: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  statValue: {
    fontFamily: typography.primary,
    fontSize: typography.sizes.h3,
    fontWeight: 'bold',
    color: colors.primary,
  },
  statLabel: {
    fontFamily: typography.secondary,
    fontSize: typography.sizes.body,
    color: colors.textSecondary,
    marginTop: 5,
  },
});

export default DashboardScreen; 