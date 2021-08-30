export class Pokemon {

    id: Number;
    cp: Number;
    hp: Number;
    picture: String;
    types: Array<String>;
    name: String;
    created: Date;


    constructor(){
        this.id = 0;
        this.hp = 0;
        this.cp = 0;
        this.picture = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png';
        this.types = ['plante'];
        this.name = "NoName";
        this.created = new Date();
    }

}

