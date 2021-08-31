import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'pokemonTypeColor' })


export class PokemonTypeColorPipe implements PipeTransform{
    transform(type: String): String{
        let color: String;
        switch (type) {
            case "fire":
                color = 'red lihten-1';
                break;
            case "grass":
                color = "green";
                break;
            case "water":
                color = "blue";
                break;
            case "insect":
                color = "brown";
                break;
            case "poison":
                color = "deep-purple";
                break;
            case "electrik":
                color = "lime";
                break;
            
            
            
            default:
                color = "grey";
                break;
        }

        return 'chip' +" " + color;
    }
}