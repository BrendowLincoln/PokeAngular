import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Type } from "../models/type.model";
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pokemon } from '../models/pokemon.model';
import * as typesJson from '../../../assets/data/pokemon-types-data.json';
import { JsonPipe } from '@angular/common';

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

  public getPokemons = (page: number): Observable<Array<Pokemon>> => {

    let params = {
      offset: page ?? 0 ,
      limit: 20
    };

    return this.http.get(`${this.path}pokemon/`, {params: params} ).pipe(
      map((result: any) => result.results),
      map((result: any) => result.map((x: any) => this.getPokemonByUrl(x.url)))
    );
  }


  public getPokemonByUrl( url: string ): Pokemon {
    var pokemon = {} as Pokemon;

    this.http.get<any>(url, ).subscribe(pokemonResult => {
        pokemon.id = pokemonResult.id;
        pokemon.name = pokemonResult.name;
        pokemon.order = pokemonResult.order;
        pokemon.experience = pokemonResult.base_experience;
        pokemon.image = pokemonResult.sprites.front_default;
        pokemon.height = pokemonResult.height;
        pokemon.weight = pokemonResult.weight;
        pokemon.types = [];

        pokemonResult.types.forEach((x: any) => {

          const type = this.getType(x.type.name);
          pokemon.types.push(type);
        });

        return pokemon as Pokemon;
    });

    return pokemon;
  }

  public getType = (type: string = ""): Type => {
    if(this.types.length === 0) {
      var typesJsonString = JSON.stringify(typesJson);
      var typesJsonParsed = JSON.parse(typesJsonString);


      for(let i = 0; i < typesJsonParsed.length; i++) {
        this.types.push(typesJsonParsed[i] as Type);
      }
    }
           
    const typeResult = this.types.filter((t: Type) => t.name.toLowerCase() === type)[0] as Type;
    return typeResult;
  }

  
}