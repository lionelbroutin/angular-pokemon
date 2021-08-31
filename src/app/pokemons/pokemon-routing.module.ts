import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailPokemonComponent } from "./detail-pokemon/detail-pokemon.component";
import { EditPokemonComponent } from "./edit-pokemon/edit-pokemon.component";
import { PokemonComponent } from "./list-component/pokemon.component";


const pokemonRoutes: Routes = [
    {
        path: 'pokemon',
        children: [
            { path: 'all', component: PokemonComponent },
            { path: ':id', component: DetailPokemonComponent },
            { path: 'edit/:id', component: EditPokemonComponent },
    ]}
  


]

@NgModule({
    imports: [
    RouterModule.forChild(pokemonRoutes)
],
exports: [RouterModule]
})

export class PokemonRoutingModule{};
