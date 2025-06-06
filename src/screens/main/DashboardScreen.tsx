import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { colors, typography } from '../../styles';
import Card from '../../components/Card';

const DashboardScreen = () => {
  // Eventually, this would come from user data
  const userName = 'Allan';

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Good morning, {userName}</Text>
        <Text style={styles.subtitle}>Here's your daily summary</Text>
        <View style={styles.statsContainer}>
          <Card style={styles.statCard}>
            <Text style={styles.statValue}>2100</Text>
            <Text style={styles.statLabel}>Calories</Text>
          </Card>
          <Card style={styles.statCard}>
            <Text style={styles.statValue}>150g</Text>
            <Text style={styles.statLabel}>Protein</Text>
          </Card>
          <Card style={styles.statCard}>
            <Text style={styles.statValue}>45m</Text>
            <Text style={styles.statLabel}>Workout</Text>
          </Card>
        </View>

        {/* Weekly Progress Section */}
        <Card>
          <Text style={styles.sectionTitle}>Weekly Progress</Text>
          <View style={styles.chartPlaceholder}>
            <Text style={styles.placeholderText}>Chart will go here</Text>
          </View>
        </Card>

        {/* Recent Activity Section */}
        <Card>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <View style={styles.activityItem}>
            <Text style={styles.activityText}>Logged Chicken Salad</Text>
            <Text style={styles.activityTimestamp}>12:30 PM</Text>
          </View>
          <View style={styles.activityItem}>
            <Text style={styles.activityText}>Completed 'Push Day'</Text>
            <Text style={styles.activityTimestamp}>8:15 AM</Text>
          </View>
          <View style={styles.activityItem}>
            <Text style={styles.activityText}>Logged Protein Shake</Text>
            <Text style={styles.activityTimestamp}>7:00 AM</Text>
          </View>
        </Card>
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
    marginBottom: 20, // Adjusted margin
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10, // Adjusted margin
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
    padding: 15, // Adjusted padding
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
  sectionTitle: {
    fontFamily: typography.primary,
    fontSize: typography.sizes.h4,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 15,
  },
  chartPlaceholder: {
    height: 150,
    backgroundColor: colors.border,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontFamily: typography.secondary,
    color: colors.textSecondary,
  },
  activityItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  activityText: {
    fontFamily: typography.secondary,
    fontSize: typography.sizes.body,
    color: colors.text,
  },
  activityTimestamp: {
    fontFamily: typography.secondary,
    fontSize: typography.sizes.caption,
    color: colors.textSecondary,
  },
});

export default DashboardScreen; 