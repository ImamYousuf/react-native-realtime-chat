export const chatService = {
  async getConversations() {
    // Replace with a Firestore conversations query.
    return [];
  },

  subscribeToMessages(conversationId, onMessages) {
    // Replace with Firestore onSnapshot for real-time updates.
    onMessages([]);

    return () => {};
  },

  async sendMessage(conversationId, message) {
    // Replace with Firestore addDoc or setDoc.
    return {
      conversationId,
      message,
      queued: true,
    };
  },
};
