import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Card from './Card';
import { colors, typography } from '../styles';

interface StatCardProps {
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label }) => {
  return (
    <Card style={styles.statCard}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  statCard: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
    padding: 15,
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

export default StatCard; 