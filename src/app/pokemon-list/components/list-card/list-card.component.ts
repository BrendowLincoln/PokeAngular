import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent implements OnInit {

  @Input() name: string | undefined;
  @Input() image: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
