import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Type } from "../models/type.model";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pokemon } from '../models/pokemon.model';
import { ThisReceiver } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class PokemonApi {

  private path = "https://pokeapi.co/api/v2/";
  private typeJsonPath = '../../../assets/data/pokemon-types-data.json';
  private types: Array<Type> = [];
  

  constructor(private http: HttpClient) { }
  
  ngOnInit(): void {
    
  }

  //Get
  public getPokemonTypes = (): Observable<Array<Type>> => {
    return this.http.get(this.typeJsonPath).pipe(
      map((response: any) => response as Array<Type>)
    );
  }

  public getPokemonList = (): Observable<Array<Pokemon>> => {
    return this.http.get(`${this.path}pokemon/`).pipe(
      map((result: any) => result.results),
      map((result: any) => result.map((x: any) => this.apiGetPokemon(x.url)))
    );
  }


  public apiGetPokemon( url: string ): Pokemon {
    var pokemon = new Pokemon;

    this.http.get<any>(url).subscribe(pokemonResult => {
        pokemon.id = pokemonResult.id;
        pokemon.name = pokemonResult.name;
        pokemon.order = pokemonResult.order;
        pokemon.experience = pokemonResult.base_experience;
        pokemon.image = pokemonResult.sprites.front_default;
        pokemon.height = pokemonResult.height;
        pokemon.weight = pokemonResult.weight;

        pokemonResult.types.forEach((x: any) => {
          const type = x.type.name;
          pokemon.types.push(this.getType(type));
        });
    });

    return pokemon as Pokemon;
  }

  public getType = (type: string = ""): Type => {

    let typeResult = {} as Type;

    if(this.types.length === 0) {
      this.http.get<Array<Type>>('../../../assets/data/pokemon-types-data.json').subscribe(x => {
        this.types = x;

        typeResult = this.types.find(x => x.name === type)!;
        
        console.log(typeResult);

        return typeResult;
      });

    }

    return typeResult;

  }

  
}