import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';

@Module({
  controllers: [],
  providers: [],
  imports: [CatsModule],
})
export class AppModule {}
