import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Type } from "../models/type.model";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PokemonApi {

  private path = "https://pokeapi.co/api/v2/";
  private typeJsonPath = 'assets/data/pokemon-types-data.json';

  constructor(private http: HttpClient) { }

  //Get
  public getPokemonTypes(): Observable<Array<Type>> {
    return this.http.get(this.typeJsonPath).pipe(
      map((response: any) => response as Array<Type>)
    );
  }

  
}