import { Cat } from './entities/cat.entity';

export const CATS_REPO = 'CATS_REPO';

export interface CatsRepository {
  create(name: string): Cat;
}
