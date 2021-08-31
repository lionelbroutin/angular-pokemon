import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";

import {Pokemon} from "../donnees-pokemons/pokemon"
import { POKEMON } from "../donnees-pokemons/mock-pokemon";
import { PokemonsService } from "../pokemons.services";

@Component({

    selector: 'list-pokemon',
    templateUrl: './pokemon.component.html',
})

export class PokemonComponent implements OnInit{


    pokemons: Pokemon[]

    constructor(private router: Router, private pokemonsService: PokemonsService) {
        
        this.pokemons = [];
    }
    selectPokemon(pokemon: Pokemon) {
        let link = ['/pokemon', pokemon.id];
        this.router.navigate(link);
        console.log(pokemon)
    }
    ngOnInit(): void {
        this.pokemons = this.pokemonsService.getPokemons();
     

    }

}
