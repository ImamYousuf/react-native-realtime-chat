import React from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';

import Avatar from '../../components/Avatar';
import EmptyState from '../../components/EmptyState';
import Header from '../../components/Header';
import {currentUserId} from '../../constants/chat';
import {routes} from '../../constants/routes';
import {useChat} from '../../hooks/useChat';
import {colors, spacing, typography} from '../../theme';
import {formatConversationTime} from '../../utils/date';
import {getConversationParticipant} from '../../utils/user';

const ChatListScreen = ({navigation}) => {
  const {conversations, users} = useChat();

  const renderConversation = ({item}) => {
    const participant = getConversationParticipant(item, users, currentUserId);

    return (
      <Pressable
        accessibilityRole="button"
        onPress={() => navigation.navigate(routes.chatRoom, {conversationId: item.id})}
        style={styles.item}>
        <Avatar color={participant.avatarColor} isOnline={participant.isOnline} name={participant.name} />
        <View style={styles.content}>
          <View style={styles.titleRow}>
            <Text numberOfLines={1} style={styles.name}>
              {participant.name}
            </Text>
            <Text style={styles.time}>{formatConversationTime(item.updatedAt)}</Text>
          </View>
          <View style={styles.previewRow}>
            <Text numberOfLines={1} style={styles.preview}>
              {item.isTyping ? 'Typing...' : item.lastMessage}
            </Text>
            {item.unreadCount > 0 ? (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{item.unreadCount}</Text>
              </View>
            ) : null}
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.screen}>
      <Header title="Messages" subtitle="Reusable real-time chat architecture" />
      <FlatList
        contentContainerStyle={styles.list}
        data={conversations}
        keyExtractor={item => item.id}
        ListEmptyComponent={<EmptyState title="No conversations" />}
        renderItem={renderConversation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 10,
    minWidth: 20,
    paddingHorizontal: spacing.xs,
    paddingVertical: 2,
  },
  badgeText: {
    ...typography.caption,
    color: colors.surface,
    fontWeight: '700',
  },
  content: {
    flex: 1,
    gap: spacing.xs,
  },
  item: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderBottomColor: colors.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    gap: spacing.md,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
  },
  list: {
    flexGrow: 1,
  },
  name: {
    ...typography.subtitle,
    color: colors.text,
    flex: 1,
  },
  preview: {
    ...typography.body,
    color: colors.textMuted,
    flex: 1,
  },
  previewRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.sm,
  },
  screen: {
    backgroundColor: colors.background,
    flex: 1,
  },
  time: {
    ...typography.caption,
    color: colors.textMuted,
  },
  titleRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.sm,
  },
});

export default ChatListScreen;
