import { Component, OnInit } from "@angular/core";



import {Pokemon} from "../donnees-pokemons/pokemon"
import { POKEMON } from "../donnees-pokemons/mock-pokemon";

@Component({

    selector: 'list-pokemon',
    templateUrl: './pokemon.component.html',


})

export class PokemonComponent implements OnInit{


    pokemons: Pokemon[]

    constructor() {
        
        this.pokemons = [];
    }

    ngOnInit(): void {
        this.pokemons = POKEMON;

    }

}
