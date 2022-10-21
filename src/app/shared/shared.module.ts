import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { PokemonApi } from './api/pokemon.api';
import { InfiniteScrollComponent } from './components/infinite-scroll/infinite-scroll.component';



@NgModule({
  declarations: [

  
    InfiniteScrollComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    InfiniteScrollComponent
  ],
  providers: [
    PokemonApi
  ]
})
export class SharedModule { }
