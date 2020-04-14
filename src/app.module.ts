import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AppService } from './app.service'
import { UserModule } from './user/user.module'
import { TaskModule } from './task/task.module'
import { AuthModule } from './auth/auth.module'
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/mobcore'),
    AuthModule,
    UserModule,
    TaskModule,
  ],
  providers: [AppService],
})
export class AppModule {}
