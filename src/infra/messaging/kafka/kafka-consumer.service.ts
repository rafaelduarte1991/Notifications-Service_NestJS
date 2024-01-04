import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['wise-cattle-7690-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'd2lzZS1jYXR0bGUtNzY5MCRTUMOJ9QvOzvnLE9Zpa0mQF8Z7WCfS1YsB-1rkgfw',
          password: 'NDc3ZDA4ODgtOTY5YS00NzdjLThhM2EtMjZiNGIxNGQ5ZTdm',
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
}
