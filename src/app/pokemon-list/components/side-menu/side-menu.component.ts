import { Component, OnInit } from '@angular/core';
import { PokemonApi } from 'src/app/shared/api/pokemon.api';
import { Type } from 'src/app/shared/models/type.model';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  public types: Array<Type> = [];

  constructor(private api: PokemonApi) { }

  ngOnInit(): void {
    this.api.getPokemonTypes().subscribe(result => {
      this.types = result;
    });
  }

  public onClick = (event: any) => {
    console.log(event);
  }

}
