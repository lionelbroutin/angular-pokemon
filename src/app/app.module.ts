import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { DetailPokemonComponent } from './pokemons/detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from './pokemons/directives/border-card.directives';


import { PokemonComponent } from './pokemons/list-component/pokemon.component';
import { PokemonTypeColorPipe } from './pokemons/pipes/pokemon-type-color.pipe';

import { FormsModule } from "@angular/forms";
import { EditPokemonComponent } from './pokemons/edit-pokemon/edit-pokemon.component';
import { FormPokemonComponent } from './pokemons/edit-pokemon/form-pokemon.component';
import { PokemonsService } from './pokemons/pokemons.services';



@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PageNotFoundComponent,
    DetailPokemonComponent,
    EditPokemonComponent,
    PokemonTypeColorPipe,
    BorderCardDirective,
    FormPokemonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,

  ],
  providers: [PokemonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
