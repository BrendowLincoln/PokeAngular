import { AfterViewChecked, Component, ElementRef, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { PokemonApi } from '../shared/api/pokemon.api';
import { Pokemon } from '../shared/models/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit, AfterViewChecked {

  public pokemonList: Array<Pokemon> = [];
  public isLoading: boolean = false;
  
  private currentPage: number = 0;

  @ViewChild('gridList') private myScrollContainer: ElementRef = {} as ElementRef;

   constructor(
    private api: PokemonApi
  ) { }


  ngAfterViewChecked(): void {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.getPokemons();
  }

  public onScrollRiseLimit(event: any): void {
  
    if (((event.target.offsetHeight + event.target.scrollTop) + 1) >= event.target.scrollHeight) {
      this.getPokemons();
    }
  }

  private getPokemons(): void {3
    this.api.getPokemons(this.currentPage).subscribe((x: any) => {
      x.forEach((pokemon: any) => {
        this.pokemonList.push(pokemon);
      })
      this.isLoading = false;
      this.currentPage += 40;
    })
  } 
  

}
