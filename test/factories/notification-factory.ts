import { Content } from "src/application/entities/content"
import { Notification, NotificationProps } from "src/application/entities/notification"

type Override = Partial<NotificationProps>

export function makeNotification(override: Override = {}) {
  return new Notification({
      category: 'test',
      content: new Content('cancel test'),
      recipientId: 'recipient-1',
      ...override,
    }),
}