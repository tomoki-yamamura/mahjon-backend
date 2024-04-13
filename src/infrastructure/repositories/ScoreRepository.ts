import { injectable } from 'inversify';

import IScore from '';
import Pokemons from '@/domain/entities/Pokemons';

@injectable()
export default class ScoreRepository implements IPokemonRepository {
    public async findAll(): Promise<Pokemons[]> {
        return Pokemons.find().catch(err => {
            throw err;
        });
    }
}