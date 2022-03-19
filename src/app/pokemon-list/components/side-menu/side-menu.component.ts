import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PokemonApi } from 'src/app/shared/api/pokemon.api';
import { Type } from 'src/app/shared/models/type.model';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  public types: Array<Type> = [];
  public currentTypeSelected: string = "";

  constructor(private api: PokemonApi) { }

  ngOnInit(): void {
    this.api.getPokemonTypes().subscribe(result => {
      this.types = result;
    });

    this.currentTypeSelected = 'All';
  }

  public onClick = (event: any): void => this.currentTypeSelected = event;

  public isTypeSelected = (typeName: string):boolean => this.currentTypeSelected === typeName;
  
}
