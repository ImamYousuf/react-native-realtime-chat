export const getInitials = name =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part[0])
    .join('')
    .toUpperCase();

export const getConversationParticipant = (conversation, users, currentUserId) => {
  if (!conversation) {
    return null;
  }

  const participantId = conversation.participantIds.find(id => id !== currentUserId);
  return users.find(user => user.id === participantId);
};
