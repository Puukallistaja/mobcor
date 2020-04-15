import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AppService } from './app.service'
import { UserModule } from './user/user.module'
import { TaskModule } from './task/task.module'
import { AuthModule } from './auth/auth.module'
import { RestaurantModule } from './restaurant/restaurant.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_BASE_URL, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      user: process.env.MONGODB_USER,
      pass: process.env.MONGODB_PASSWORD,
    }),
    AuthModule,
    UserModule,
    TaskModule,
    RestaurantModule,
  ],
  providers: [AppService],
})
export class AppModule {}
