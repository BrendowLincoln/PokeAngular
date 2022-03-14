import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-menu-item',
  templateUrl: './side-menu-item.component.html',
  styleUrls: ['./side-menu-item.component.scss']
})
export class SideMenuItemComponent implements OnInit {

  @Input() typeName?: string;
  @Input() typeColor?: string;
  @Output() buttonClick: EventEmitter<any> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  public onClick = (event: any) => {
    this.buttonClick.emit(event);
  } 
}
