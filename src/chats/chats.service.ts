import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Chat } from './entities/chat.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ChatsService {
  constructor(
    @InjectRepository(Chat)
    private readonly chatRepository: Repository<Chat>,
  ) {}

  create(createChatDto: CreateChatDto): Promise<Chat> {
    return this.chatRepository.save(createChatDto);
  }

  findAll(): Promise<Chat[]> {
    return this.chatRepository.find();
  }

  findOne(id: number) {
    return this.chatRepository.findOne(id);
  }

  update(id: number, updateChatDto: UpdateChatDto) {
    return this.chatRepository.update(id, updateChatDto);
  }

  remove(id: number) {
    return this.chatRepository.delete(id);
  }
}
