import { ApiProperty } from '@nestjs/swagger';

export class CreateChatDto {
  @ApiProperty()
  userId: number;

  @ApiProperty()
  message: string;

  @ApiProperty()
  roomId: number;
}
