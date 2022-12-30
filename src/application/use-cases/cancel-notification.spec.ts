import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { Content } from '../entities/content';
import { Notification } from '../entities/notification';
import { CancelNotification } from './cancel-notification';
import { NotificationNotFound } from './errors/notification-not-found';

describe('Cancel Notification', () => {
  test('it should be able to cancel a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    const notification = new Notification({
      category: 'test',
      content: new Content('cancel test'),
      recipientId: 'example-recipient-id',
    });
    await notificationsRepository.create(notification);
    await cancelNotification.execute({
      notificationId: notification.id,
    });
    expect(notificationsRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });
  test('it should not be able to cancel a non existing notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    expect(() => {
      return cancelNotification.execute({
        notificationId: 'fake notification id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});