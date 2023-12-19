import { Notification } from 'src/application/entities/notification';
import { Notification as RawNotification } from '@prisma/client';
import { Content } from 'src/application/entities/content';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content.value,
      recipientId: notification.recipientId,
      createdAt: notification.createdAt,
      readAt: notification.readAt,
    };
  }

  static toDomain(raw: RawNotification): Notification {
    return new Notification(
      {
        category: raw.category,
        content: new Content(raw.content),
        readAt: raw.readAt,
        cancelledAt: raw.cancelledAt,
        createdAt: raw.createdAt,
        recipientId: raw.recipientId,
      },
      raw.id,
    );
  }
}
