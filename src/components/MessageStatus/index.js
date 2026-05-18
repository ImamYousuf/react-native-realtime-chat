import React from 'react';
import {StyleSheet, Text} from 'react-native';

import {messageStatus} from '../../constants/chat';
import {colors, typography} from '../../theme';

const statusLabel = {
  [messageStatus.sent]: 'Sent',
  [messageStatus.delivered]: 'Delivered',
  [messageStatus.read]: 'Read',
};

const MessageStatus = ({status}) => (
  <Text style={[styles.text, status === messageStatus.read && styles.read]}>{statusLabel[status] || 'Sending'}</Text>
);

const styles = StyleSheet.create({
  read: {
    color: colors.primary,
  },
  text: {
    ...typography.caption,
    color: colors.textMuted,
  },
});

export default MessageStatus;
