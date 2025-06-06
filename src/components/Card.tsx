import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { colors } from '../styles';

type CardProps = {
  children: React.ReactNode;
  style?: ViewStyle;
};

const Card = ({ children, style }: CardProps) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
});

export default Card; 