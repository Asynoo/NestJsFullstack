import {
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
} from 'typeorm';
import { Room } from '../../rooms/entities/room.entity';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Chat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  message: string;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn()
  user: User;

  @Column({ nullable: true })
  roomId: number;

  @Column({ nullable: true })
  userId: number;

  @ManyToOne(() => Room, (room) => room.id)
  room: Room;
}
