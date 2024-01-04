import { Kafka } from 'kafkajs';
import { randomUUID } from 'node:crypto'

async function bootstrap() {

  const kafka = new Kafka({
    brokers: ['use your broker'],
    sasl: {
      mechanism: 'scram-sha-256',
      username:
        'username',
      password: 'password',
    },
    ssl: true,
  })

  const producer = kafka.producer()

  await producer.connect()
  await producer.send({
      topic: 'notifications.send-notifications',
      messages: [
        {
          value: JSON.stringify({
            content: 'Solicitação de amizade',
            category: 'social',
            recipientId: randomUUID(),
          })
        },
      ],
  })
  await producer.disconnect()
}

bootstrap()