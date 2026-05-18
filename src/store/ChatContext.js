import React, {createContext, useMemo, useState} from 'react';

import {currentUserId} from '../constants/chat';
import {mockConversations} from '../data/mockConversations';
import {mockMessages} from '../data/mockMessages';
import {mockUsers} from '../data/mockUsers';

export const ChatContext = createContext(null);

export const ChatProvider = ({children}) => {
  const [conversations] = useState(mockConversations);
  const [messagesByConversation, setMessagesByConversation] = useState(mockMessages);

  const sendMessage = (conversationId, text) => {
    const trimmedText = text.trim();

    if (!trimmedText) {
      return;
    }

    const nextMessage = {
      id: `message_${Date.now()}`,
      senderId: currentUserId,
      text: trimmedText,
      createdAt: new Date().toISOString(),
      status: 'sent',
    };

    setMessagesByConversation(current => ({
      ...current,
      [conversationId]: [...(current[conversationId] || []), nextMessage],
    }));
  };

  const value = useMemo(
    () => ({
      conversations,
      currentUserId,
      messagesByConversation,
      sendMessage,
      users: mockUsers,
    }),
    [conversations, messagesByConversation],
  );

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};
