import {
  CommonModule
} from "@angular/common";
import {
  NgModule
} from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "../app-routing.module";
import { PageNotFoundComponent } from "../page-not-found.component";
import { DetailPokemonComponent } from "./detail-pokemon/detail-pokemon.component";
import { BorderCardDirective } from "./directives/border-card.directives";
import { EditPokemonComponent } from "./edit-pokemon/edit-pokemon.component";
import { FormPokemonComponent } from "./edit-pokemon/form-pokemon.component";
import { PokemonComponent } from "./list-component/pokemon.component";
import { PokemonTypeColorPipe } from "./pipes/pokemon-type-color.pipe";
import { PokemonsService } from "./pokemons.services";
import { PokemonRoutingModule } from "./pokemon-routing.module";

@NgModule({
  declarations: [
    PokemonComponent,
    PageNotFoundComponent,
    DetailPokemonComponent,
    EditPokemonComponent,
    PokemonTypeColorPipe,
    BorderCardDirective,
    FormPokemonComponent
  ],
  imports: [
      CommonModule,
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      PokemonRoutingModule
  ],
  providers: [PokemonsService],
  bootstrap: []


})

export class PokemonsModule {}
