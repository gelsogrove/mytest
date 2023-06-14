import { CatDTO } from './cat-dto.model';

export interface Cat extends Omit<CatDTO, 'fact'> {
  id: number;
  message: string;
}
