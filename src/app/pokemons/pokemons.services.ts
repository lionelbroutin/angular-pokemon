import {
  Injectable
} from "@angular/core";
import {
  POKEMON
} from "./donnees-pokemons/mock-pokemon";
import {
  Pokemon
} from "./donnees-pokemons/pokemon";


@Injectable()
export class PokemonsService {
  constructor() {

    }
    /// Get ALL Pokemons
    getPokemons(): Pokemon[]{
        return POKEMON;
    }
// return le pokemon qui nous intérésesse
    getPokemon(id: Number) {
        
        let pokemons = this.getPokemons();
        console.log(id)


        for (let i = 0; i < pokemons.length; i++){
            if (pokemons[i].id == id) {
                return pokemons[i]
            } 
        }
        return false
    }

    getPokemonTypes(): string[]{
        return ['poison', 'fire', 'grass', 'water', 'insect']
    }


}
