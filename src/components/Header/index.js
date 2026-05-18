import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import Avatar from '../Avatar';
import {colors, spacing, typography} from '../../theme';

const Header = ({title, subtitle, user, onBack, onProfilePress}) => (
  <View style={styles.container}>
    {onBack ? (
      <Pressable accessibilityRole="button" onPress={onBack} style={styles.backButton}>
        <Text style={styles.backText}>{'<'}</Text>
      </Pressable>
    ) : null}
    {user ? (
      <Pressable accessibilityRole="button" onPress={onProfilePress} style={styles.identity}>
        <Avatar color={user.avatarColor} isOnline={user.isOnline} name={user.name} size={40} />
        <View>
          <Text style={styles.title}>{title || user.name}</Text>
          <Text style={styles.subtitle}>{subtitle || (user.isOnline ? 'Online' : 'Offline')}</Text>
        </View>
      </Pressable>
    ) : (
      <View>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
    )}
  </View>
);

const styles = StyleSheet.create({
  backButton: {
    alignItems: 'center',
    height: 40,
    justifyContent: 'center',
    width: 32,
  },
  backText: {
    color: colors.primary,
    fontSize: 34,
    lineHeight: 36,
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderBottomColor: colors.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    gap: spacing.md,
    minHeight: 68,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  identity: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.md,
  },
  subtitle: {
    ...typography.caption,
    color: colors.textMuted,
    marginTop: 2,
  },
  title: {
    ...typography.subtitle,
    color: colors.text,
  },
});

export default Header;
