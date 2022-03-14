import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { PokemonApi } from './api/pokemon.api';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
  ],
  providers: [
    PokemonApi
  ]
})
export class SharedModule { }
