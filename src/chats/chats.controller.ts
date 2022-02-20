import { Controller, Get } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { Chat } from './entities/chat.entity';

@Controller('chats')
export class ChatsController {
  constructor(private readonly chatService: ChatsService) {}

  @Get()
  getAll(): Promise<Chat[]> {
    return this.chatService.findAll();
  }
}
