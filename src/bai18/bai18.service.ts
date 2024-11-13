import { Injectable } from '@nestjs/common';
import { SocketGateway } from './socket/socket.gateway';

@Injectable()
export class Bai18Service {
  constructor(private readonly socketGateway: SocketGateway) {}

  notifyClients(data: any) {
    this.socketGateway.sendNotification(data); // Gửi thông báo tới tất cả client
  }
}
