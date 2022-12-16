import { Content } from '../entities/content';
import { NotificationsRepository } from '../repositories/notifications-repository';
import { Notification } from '../entities/notification';

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}
interface SendNotificationResponse {
  notification: Notification;
}

export class SendNotification {
  constructor(private notificationRepository: NotificationsRepository) {}
  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { recipientId, content, category } = request;

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    });

    //Persistence
    await this.notificationRepository.create(notification);

    return {
      notification,
    };
  }
}
