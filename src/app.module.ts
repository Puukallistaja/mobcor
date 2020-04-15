import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './user/user.module'
import { AuthModule } from './auth/auth.module'
import { RestaurantController } from './restaurant/restaurant.controller';
import { RestaurantService } from './restaurant/restaurant.service';
import { RestaurantModule } from './restaurant/restaurant.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/mobcore'),
    UserModule,
    AuthModule,
    RestaurantModule,
  ],
  controllers: [AppController, RestaurantController],
  providers: [AppService, RestaurantService],
})
export class AppModule {}
