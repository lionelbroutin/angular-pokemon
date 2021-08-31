import {
  Component,
  OnInit,
  Input
} from "@angular/core";
import {
  ActivatedRoute,
  Router
} from "@angular/router";
import { PokemonsService } from "../pokemons.services";

@Component({
  selector: 'form-pokemon',
  templateUrl: './form-pokemon.component.html'
})


export class FormPokemonComponent implements OnInit {

  @Input() pokemon: any;
  types: Array < String > = [];


  constructor(private route: ActivatedRoute, private router: Router, private pokemonsService: PokemonsService) {
    this.types = this.getPokemonTypes();
  }

  ngOnInit() {
    this.types = this.pokemonsService.getPokemonTypes();
  }

  onSubmit(): void {
    let link = ['/pokemon/', this.pokemon.id]
    this.router.navigate(link);
  }

  getPokemonTypes(): String[] {
    return ['electrik', 'fire', 'water', 'grass', 'poison']
  }

  // methode appelée lorsque l'utilisateur ajoute ou retire un type au pokemon

  selectType($event: any, type: String) {

    let checked = $event.target.checked;
    if (checked) {
      this.pokemon.types.push(type)
    } else {
      let index = this.pokemon.types.indexOf(type);
      if (index > -1) {
        this.pokemon.types.splice(index, 1)
      }
    }
  }

  /// détermine si le type passé appartient ou non au pokemon
  hasType(type: String): boolean {
    let index = this.pokemon.types.indexOf(type);
    if (index > -1) return true;
    return false;
  }
  isTypesValid(type: String): boolean {

    if (this.pokemon.types.length === 1 && this.hasType(type)) {
      return false;
    }
    if (this.pokemon.types.length >= 3 && !this.hasType(type)) {
      return false;
    }


    return true
  }


}
