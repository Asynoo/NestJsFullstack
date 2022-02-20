import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Chat } from '../../chats/entities/chat.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // This might break the database
  @OneToMany(() => Chat, (chat) => chat)
  chats: Chat[];
}
