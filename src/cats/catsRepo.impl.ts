import { CatsRepository } from './cats.repository';
import { Cat } from './entities/cat.entity';

export class CatsRepoImpl implements CatsRepository {
  create(name: string): Cat {
    return { age: 1, breed: 'Orange', id: 1, name: 'Lars' };
  }
}
