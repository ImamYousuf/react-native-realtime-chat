import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {assets} from '../../assets';
import {colors, spacing, typography} from '../../theme';

const EmptyState = ({title = 'Nothing here yet', description = 'Start a conversation to see messages.'}) => (
  <View style={styles.container}>
    <Image source={assets.images.emptyChat} style={styles.image} />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: spacing.xl,
  },
  description: {
    ...typography.body,
    color: colors.textMuted,
    marginTop: spacing.sm,
    textAlign: 'center',
  },
  image: {
    height: 156,
    marginBottom: spacing.lg,
    width: 156,
  },
  title: {
    ...typography.subtitle,
    color: colors.text,
  },
});

export default EmptyState;
