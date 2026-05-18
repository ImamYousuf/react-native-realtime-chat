import React from 'react';
import {FlatList, ImageBackground, KeyboardAvoidingView, Platform, StyleSheet, Text, View} from 'react-native';

import {assets} from '../../assets';
import ChatBubble from '../../components/ChatBubble';
import ChatInput from '../../components/ChatInput';
import EmptyState from '../../components/EmptyState';
import Header from '../../components/Header';
import {routes} from '../../constants/routes';
import {useChat} from '../../hooks/useChat';
import {colors, spacing, typography} from '../../theme';
import {getConversationParticipant} from '../../utils/user';

const ChatRoomScreen = ({navigation, route}) => {
  const {conversationId} = route.params;
  const {conversations, currentUserId, messagesByConversation, sendMessage, users} = useChat();
  const conversation = conversations.find(item => item.id === conversationId);
  const participant = getConversationParticipant(conversation, users, currentUserId);
  const messages = messagesByConversation[conversationId] || [];

  if (!conversation || !participant) {
    return (
      <View style={styles.screen}>
        <Header onBack={navigation.goBack} title="Conversation" />
        <EmptyState title="Conversation not found" description="This chat may have been removed or is unavailable." />
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 8 : 0}
      style={styles.screen}>
      <Header
        onBack={navigation.goBack}
        onProfilePress={() => navigation.navigate(routes.userProfile, {userId: participant.id})}
        subtitle={participant.isOnline ? 'Online now' : 'Offline'}
        user={participant}
      />
      {conversation.isTyping ? (
        <View style={styles.typingBar}>
          <Text style={styles.typingText}>{participant.name} is typing...</Text>
        </View>
      ) : null}
      <ImageBackground source={assets.images.chatBackground} style={styles.background}>
        <FlatList
          contentContainerStyle={styles.messages}
          data={messages}
          keyExtractor={item => item.id}
          ListEmptyComponent={<EmptyState title="No messages yet" description="Send the first message to start the thread." />}
          renderItem={({item}) => <ChatBubble isMine={item.senderId === currentUserId} message={item} />}
        />
      </ImageBackground>
      <ChatInput onSend={text => sendMessage(conversationId, text)} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  messages: {
    flexGrow: 1,
    padding: spacing.lg,
  },
  screen: {
    backgroundColor: colors.background,
    flex: 1,
  },
  typingBar: {
    backgroundColor: colors.surface,
    borderBottomColor: colors.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
  },
  typingText: {
    ...typography.caption,
    color: colors.textMuted,
  },
});

export default ChatRoomScreen;
