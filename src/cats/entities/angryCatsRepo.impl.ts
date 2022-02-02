import { CATS_REPO, CatsRepository } from '../cats.repository';
import { Cat } from './cat.entity';

export class AngryCatsRepoImpl implements CatsRepository {
  create(name: string): Cat {
    return { age: 2, breed: 'Grey', id: 2, name: 'Angry Tony' };
  }
}
