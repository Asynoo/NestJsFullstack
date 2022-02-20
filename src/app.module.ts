import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { RoomsModule } from './rooms/rooms.module';
import { ChatsModule } from './chats/chats.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UsersModule,
    RoomsModule,
    ChatsModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: `src/database/chatter.db`,
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
