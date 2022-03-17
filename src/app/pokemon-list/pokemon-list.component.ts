import { Component, OnInit } from '@angular/core';
import { PokemonApi } from '../shared/api/pokemon.api';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  constructor(private api: PokemonApi) { }

  ngOnInit(): void {
    this.api.getPokemonList().subscribe((result) => {
        console.log(result.results);
      }
    );
  }

}
