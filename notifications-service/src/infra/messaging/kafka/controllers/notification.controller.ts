import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { SendNotification } from 'src/application/use-cases/send-notification';

interface SendNotificationPayload {
  content: string;
  category: string;
  recipientId: string;
}
@Controller()
export class NotificationController {
  constructor(private sendNotification: SendNotification) {}

  @EventPattern('notifications.send-notification')
  async handleNotification(
    @Payload() { content, category, recipientId }: SendNotificationPayload,
  ) {
    await this.sendNotification.execute({
      content,
      category,
      recipientId,
    });
    console.log('message');
    console.log(content);
  }
}
