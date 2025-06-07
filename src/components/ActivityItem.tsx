import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, typography } from '../styles';

interface ActivityItemProps {
  text: string;
  timestamp: string;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ text, timestamp }) => {
  return (
    <View style={styles.activityItem}>
      <Text style={styles.activityText}>{text}</Text>
      <Text style={styles.activityTimestamp}>{timestamp}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default ActivityItem; 