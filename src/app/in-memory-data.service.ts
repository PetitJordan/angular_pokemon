import { InMemoryDbService } from 'angular-in-memory-web-api';
import { POKEMONS } from './pokemons/mock-pokemons';
  
export class InMemoryDataService implements InMemoryDbService {
    // Simule une petite BDD et une API pour un serveur local
    createDb() {
        let pokemons = POKEMONS;
        return { pokemons };
    }
}