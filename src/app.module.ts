import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AppService } from './app.service'
import { UserModule } from './user/user.module'
import { TaskModule } from './task/task.module'
import { AuthModule } from './auth/auth.module'
import { RestaurantModule } from './restaurant/restaurant.module';
import { ConfigModule } from '@nestjs/config';
import { OrderController } from './order/order.controller';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_BASE_URL, {
      useNewUrlParser: true,
      user: process.env.MONGODB_USER,
      pass: process.env.MONGODB_PASSWORD,
    }),
    AuthModule,
    UserModule,
    TaskModule,
    RestaurantModule,
    OrderModule,
  ],
  providers: [AppService],
  controllers: [OrderController],
})
export class AppModule {}
