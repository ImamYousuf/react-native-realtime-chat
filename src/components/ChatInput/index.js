import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, TextInput, View} from 'react-native';

import {assets} from '../../assets';
import {colors, spacing, typography} from '../../theme';

const ChatInput = ({onSend}) => {
  const [value, setValue] = useState('');

  const handleSend = () => {
    if (!value.trim()) {
      return;
    }

    onSend(value);
    setValue('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        multiline
        onChangeText={setValue}
        placeholder="Message"
        placeholderTextColor={colors.textMuted}
        style={styles.input}
        value={value}
      />
      <Pressable accessibilityRole="button" onPress={handleSend} style={styles.button}>
        <Image source={assets.icons.send} style={styles.buttonIcon} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 20,
    height: 42,
    justifyContent: 'center',
    width: 42,
  },
  buttonIcon: {
    height: 42,
    width: 42,
  },
  container: {
    alignItems: 'flex-end',
    backgroundColor: colors.surface,
    borderTopColor: colors.border,
    borderTopWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    gap: spacing.md,
    padding: spacing.lg,
  },
  input: {
    ...typography.body,
    backgroundColor: colors.surfaceMuted,
    borderRadius: 18,
    color: colors.text,
    flex: 1,
    maxHeight: 120,
    minHeight: 40,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
  },
});

export default ChatInput;
