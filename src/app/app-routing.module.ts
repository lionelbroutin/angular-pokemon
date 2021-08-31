import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';
import { PokemonRoutingModule } from './pokemons/pokemon-routing.module';

const routes: Routes = [
  { path: '', pathMatch: "full", redirectTo: 'pokemon/all' },


  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PokemonRoutingModule],
 
exports: [RouterModule]
})
export class AppRoutingModule { }
