import { Injectable } from '@nestjs/common';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';

@Injectable()
export class AppService {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  public async rpcHandler(): Promise<any> {
    this.amqpConnection.publish('post', '', {
      message: 'IIIIIIIt workeddddddd',
    });
    return { message: 'its fucking working' };
  }
}
