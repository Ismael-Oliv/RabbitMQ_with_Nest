import { Module } from '@nestjs/common';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'post',
          type: 'fanout',
          options: {
            durable: false,
          },
        },
      ],
      uri: 'amqp://admin:123@localhost',
      enableControllerDiscovery: true,
      channels: {
        'channel-1': {
          prefetchCount: 15,
          default: true,
        },
      },
    }),
    RabbitModule,
  ],
  exports: [RabbitMQModule],
  controllers: [],
  providers: [],
})
export class RabbitModule {}
