import {messageStatus} from '../constants/chat';

export const mockMessages = {
  conversation_1: [
    {
      id: 'message_1',
      senderId: 'user_amelia',
      text: 'The chat module structure is ready for Firebase integration.',
      createdAt: '2026-05-18T09:05:00.000Z',
      status: messageStatus.read,
    },
    {
      id: 'message_2',
      senderId: 'user_current',
      text: 'Great. Keep the UI reusable so clients can review it quickly.',
      createdAt: '2026-05-18T09:06:00.000Z',
      status: messageStatus.read,
    },
    {
      id: 'message_3',
      senderId: 'user_amelia',
      text: 'Done. Chat bubbles, input, status, and list items are separated.',
      createdAt: '2026-05-18T09:07:00.000Z',
      status: messageStatus.delivered,
    },
  ],
  conversation_2: [
    {
      id: 'message_4',
      senderId: 'user_noah',
      text: 'I added placeholders for Firestore listeners and push registration.',
      createdAt: '2026-05-17T14:30:00.000Z',
      status: messageStatus.read,
    },
    {
      id: 'message_5',
      senderId: 'user_current',
      text: 'Perfect. No real keys or production credentials in the repo.',
      createdAt: '2026-05-17T14:34:00.000Z',
      status: messageStatus.sent,
    },
  ],
  conversation_3: [
    {
      id: 'message_6',
      senderId: 'user_maya',
      text: 'The empty state and profile view are ready for visual review.',
      createdAt: '2026-05-16T18:12:00.000Z',
      status: messageStatus.read,
    },
  ],
};
