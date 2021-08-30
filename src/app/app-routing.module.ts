import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonComponent } from './pokemons/list-component/pokemon.component';

const routes: Routes = [
  {path: '', pathMatch: "full", redirectTo: 'pokemon/all'},
  {path: 'pokemon/all', component: PokemonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 
exports: [RouterModule]
})
export class AppRoutingModule { }
