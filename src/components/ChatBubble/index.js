import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import MessageStatus from '../MessageStatus';
import {colors, spacing, typography} from '../../theme';
import {formatMessageTime} from '../../utils/date';

const ChatBubble = ({message, isMine}) => (
  <View style={[styles.row, isMine ? styles.rowMine : styles.rowTheirs]}>
    <View style={[styles.bubble, isMine ? styles.mine : styles.theirs]}>
      <Text style={styles.message}>{message.text}</Text>
      <View style={styles.meta}>
        <Text style={styles.time}>{formatMessageTime(message.createdAt)}</Text>
        {isMine ? <MessageStatus status={message.status} /> : null}
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  bubble: {
    borderRadius: 18,
    maxWidth: '82%',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  message: {
    ...typography.body,
    color: colors.text,
  },
  meta: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.sm,
    justifyContent: 'flex-end',
    marginTop: spacing.sm,
  },
  mine: {
    backgroundColor: colors.outgoingBubble,
    borderBottomRightRadius: spacing.xs,
  },
  row: {
    flexDirection: 'row',
    marginVertical: spacing.xs,
  },
  rowMine: {
    justifyContent: 'flex-end',
  },
  rowTheirs: {
    justifyContent: 'flex-start',
  },
  theirs: {
    backgroundColor: colors.incomingBubble,
    borderBottomLeftRadius: spacing.xs,
    borderColor: colors.border,
    borderWidth: StyleSheet.hairlineWidth,
  },
  time: {
    ...typography.caption,
    color: colors.textMuted,
  },
});

export default ChatBubble;
