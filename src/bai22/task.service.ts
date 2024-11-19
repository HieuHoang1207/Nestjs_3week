import { Injectable } from '@nestjs/common';
import { Cron, Interval, Timeout } from '@nestjs/schedule';

@Injectable()
export class TaskService {
  // 1. Task chạy định kỳ theo cron (vd: mỗi phút)
  @Cron('*/1 * * * *')
  //@Cron('0 */2 5 * * ') phút, giờ, ngày, tháng, ngày trong tuần
  handleCron() {
    console.log('Task chạy mỗi phút một lần');
  }

  // 2. Task chạy mỗi khoảng thời gian nhất định (vd: 10 giây một lần)
  @Interval(10000)
  handleInterval() {
    console.log('Task chạy mỗi 10 giây một lần');
  }

  // 3. Task thực hiện một lần sau một khoảng thời gian nhất định (vd: 5 giây)
  @Timeout(5000)
  handleTimeout() {
    console.log('Task thực hiện sau 5 giây kể từ khi khởi động');
  }
}
