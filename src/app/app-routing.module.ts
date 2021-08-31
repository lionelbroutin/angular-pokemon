import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';
import { DetailPokemonComponent } from './pokemons/detail-pokemon/detail-pokemon.component';
import { EditPokemonComponent } from './pokemons/edit-pokemon/edit-pokemon.component';

import { PokemonComponent } from './pokemons/list-component/pokemon.component';

const routes: Routes = [
  { path: '', pathMatch: "full", redirectTo: 'pokemon/all' },
  { path: 'pokemon/all', component: PokemonComponent },
  { path: 'pokemon/:id', component: DetailPokemonComponent },
  { path: 'pokemon/edit/:id', component: EditPokemonComponent },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 
exports: [RouterModule]
})
export class AppRoutingModule { }
