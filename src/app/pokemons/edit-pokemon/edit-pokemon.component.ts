import {
  Component,
  OnInit
} from "@angular/core";

import {
  Pokemon
} from "../donnees-pokemons/pokemon";
import {
  POKEMON
} from "../donnees-pokemons/mock-pokemon";

import {
  ActivatedRoute,
  Router
} from "@angular/router";
import { PokemonsService } from "../pokemons.services";


@Component({
  selector: 'edit-pokemon',
  templateUrl: './edit-pokemon.component.html'

})

export class EditPokemonComponent implements OnInit {


  pokemon: any = null;

  constructor(private route: ActivatedRoute, private router: Router, private pokemonsService: PokemonsService) {

  }
  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.pokemon = this.pokemonsService.getPokemon(id);
  }

}
