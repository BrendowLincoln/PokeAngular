import { Component, OnInit } from '@angular/core';
import { PokemonApi } from '../shared/api/pokemon.api';
import { Pokemon } from '../shared/models/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  public pokemonList: Array<Pokemon> = [];

  constructor(private api: PokemonApi) { }

  ngOnInit(): void {
    this.api.getPokemonList().subscribe((x: any) => {
      console.log(x);
    })
  }

}
