import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {assets} from '../../assets';
import {colors, typography} from '../../theme';
import {getInitials} from '../../utils/user';

const Avatar = ({name, color = colors.primary, isOnline = false, size = 44}) => {
  const badgeSize = Math.max(10, size * 0.28);

  return (
    <View style={[styles.container, {height: size, width: size, borderRadius: size / 2, backgroundColor: color}]}>
      {name ? (
        <Text style={styles.initials}>{getInitials(name)}</Text>
      ) : (
        <Image source={assets.avatars.placeholder} style={[styles.image, {height: size, width: size}]} />
      )}
      <View
        style={[
          styles.status,
          {
            height: badgeSize,
            width: badgeSize,
            borderRadius: badgeSize / 2,
            backgroundColor: isOnline ? colors.success : colors.textMuted,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  initials: {
    ...typography.caption,
    color: colors.surface,
    fontWeight: '700',
  },
  image: {
    borderRadius: 999,
  },
  status: {
    borderColor: colors.surface,
    borderWidth: 2,
    bottom: 0,
    position: 'absolute',
    right: 0,
  },
});

export default Avatar;
