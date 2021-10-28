import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { Router } from '@angular/router';
import { PokemonsService } from './pokemons.service';
  
@Component({
  selector: 'pokemon-app',
  templateUrl: `./app/pokemons/list-pokemon.component.html`,
})
export class ListPokemonComponent { 

    private pokemons: Pokemon[] = null;

    constructor(private router: Router, private pokemonsService: PokemonsService) { }

    ngOnInit(){
        this.pokemonsService.getPokemons()
            .subscribe(pokemons => this.pokemons = pokemons);
    }

    selectPokemon(pokemon: Pokemon){
        let link = ['/pokemon', pokemon.id];
        this.router.navigate(link);
    }
}