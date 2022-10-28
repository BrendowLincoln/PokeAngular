import { Component, OnInit, Input, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { Pokemon } from 'src/app/shared/models/pokemon.model';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent implements AfterViewInit {

  @Input() pokemon: Pokemon = new Pokemon();

public pokemonMainColor: string = "#cecece";
   

  constructor() { }
  ngAfterViewInit(): void {
    this.pokemonMainColor = this.pokemon.types !== undefined ? this.pokemon.types[0].color : "#cecece";
  }
  ngOnChanges(changes: SimpleChanges): void {
    
    
  }

  ngOnInit(): void {

  }


  public selectPokemon(): void {
    console.log('Teste de click');
  }

  public propertyValue(value: any, ifTru: any, ifFalse:any): string {
    return value !== undefined ? ifTru : ifFalse;
  }

  public hasValue(pokemon: Pokemon): boolean {
    return pokemon !== undefined || pokemon !== null; 
  }

}
