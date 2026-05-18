export const notificationService = {
  async requestPermission() {
    // Connect Firebase Cloud Messaging permission flow here.
    return 'placeholder';
  },

  async registerDeviceToken(userId) {
    // Store the device token against the authenticated user in production.
    return {
      userId,
      registered: false,
    };
  },

  onNotificationOpened(callback) {
    // Wire push notification deep links to chat rooms here.
    callback?.(null);

    return () => {};
  },
};
