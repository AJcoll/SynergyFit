import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { colors, typography } from '../../styles';
import Card from '../../components/Card';
import StatCard from '../../components/StatCard';
import { mockDashboardData } from '../../data/mockDashboardData';
import ActivityItem from '../../components/ActivityItem';

const DashboardScreen = () => {
  const dashboardData = mockDashboardData;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Good morning, {dashboardData.userName}</Text>
        <Text style={styles.subtitle}>Here's your daily summary</Text>
        <View style={styles.statsContainer}>
          <StatCard
            value={dashboardData.stats.calories.value}
            label={dashboardData.stats.calories.label}
          />
          <StatCard
            value={dashboardData.stats.protein.value}
            label={dashboardData.stats.protein.label}
          />
          <StatCard
            value={dashboardData.stats.workout.value}
            label={dashboardData.stats.workout.label}
          />
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
          {dashboardData.recentActivity.map(item => (
            <ActivityItem key={item.id} text={item.text} timestamp={item.timestamp} />
          ))}
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
});

export default DashboardScreen; 