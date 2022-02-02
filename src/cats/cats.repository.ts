import { Cat } from './entities/cat.entity';

interface CatsRepository {
  create(name: string): Cat;
}
