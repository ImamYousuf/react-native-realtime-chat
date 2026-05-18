import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Avatar from '../../components/Avatar';
import EmptyState from '../../components/EmptyState';
import Header from '../../components/Header';
import {useChat} from '../../hooks/useChat';
import {colors, spacing, typography} from '../../theme';

const UserProfileScreen = ({navigation, route}) => {
  const {userId} = route.params;
  const {users} = useChat();
  const user = users.find(item => item.id === userId);

  if (!user) {
    return (
      <View style={styles.screen}>
        <Header onBack={navigation.goBack} title="Profile" />
        <EmptyState title="User not found" description="This profile may be unavailable." />
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <Header onBack={navigation.goBack} title="Profile" />
      <View style={styles.content}>
        <Avatar color={user.avatarColor} isOnline={user.isOnline} name={user.name} size={96} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.role}>{user.role}</Text>
        <Text style={styles.status}>{user.isOnline ? 'Available for real-time chat' : 'Currently offline'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: spacing.xl,
  },
  name: {
    ...typography.title,
    color: colors.text,
    marginTop: spacing.lg,
  },
  role: {
    ...typography.body,
    color: colors.textMuted,
    marginTop: spacing.xs,
  },
  screen: {
    backgroundColor: colors.background,
    flex: 1,
  },
  status: {
    ...typography.body,
    color: colors.success,
    marginTop: spacing.lg,
  },
});

export default UserProfileScreen;
