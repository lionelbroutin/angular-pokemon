import { Component, OnInit } from "@angular/core";

import { Pokemon } from "../donnees-pokemons/pokemon";
import { POKEMON } from "../donnees-pokemons/mock-pokemon";

import { ActivatedRoute, Router } from "@angular/router";
import { PokemonsService } from "../pokemons.services";

@Component({
    selector: 'detail-componenent',
    templateUrl: './detail-pokemon.component.html'
})

export class DetailPokemonComponent implements OnInit{
    
    pokemons: Pokemon[];
    pokemon: any = null;


    constructor(private route: ActivatedRoute, private router: Router, private pokemonsService : PokemonsService) {
        this.pokemons = [];
    }

    goBack():void {
        this.router.navigate(["/pokemon/all"]);
    }




    ngOnInit(): void{
        
        let id = this.route.snapshot.params.id;
        this.pokemon = this.pokemonsService.getPokemon(id);
        
    }
  
    goEdit(pokemon:Pokemon) {
        let link = ['pokemon/edit', this.pokemon.id];
        this.router.navigate(link)
    }


}
