import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  test('it should be ablle to create a notification', () => {
    const notification = new Notification({
      recipientId: '12342',
      content: new Content('content test'),
      category: 'test',
    });

    expect(notification).toBeTruthy();
  });
});
