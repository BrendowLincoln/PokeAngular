import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from 'src/app/shared/models/pokemon.model';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent implements OnInit {

  @Input() pokemon: Pokemon | undefined;
   

  constructor() { }

  ngOnInit(): void {
  }

}
