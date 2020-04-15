import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AppService } from './app.service'
import { UserModule } from './user/user.module'
import { TaskModule } from './task/task.module'
import { AuthModule } from './auth/auth.module'
import { RestaurantController } from './restaurant/restaurant.controller';
import { RestaurantService } from './restaurant/restaurant.service';
import { RestaurantModule } from './restaurant/restaurant.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/mobcore'),
    AuthModule,
    UserModule,
    TaskModule,
    RestaurantModule,
  ],
  controllers: [RestaurantController],
  providers: [AppService, RestaurantService],
})
export class AppModule {}
