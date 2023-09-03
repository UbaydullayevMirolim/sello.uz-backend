import { Repository } from 'typeorm';
import { Favourite } from '../entities/favorite.entity';

export type FavoriteRepo = Repository<Favourite>;
