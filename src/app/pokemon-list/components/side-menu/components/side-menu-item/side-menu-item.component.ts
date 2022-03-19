import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-side-menu-item',
  templateUrl: './side-menu-item.component.html',
  styleUrls: ['./side-menu-item.component.scss']
})
export class SideMenuItemComponent implements OnInit {

  @Input() typeName: string = "";
  @Input('color') typeColor: string = "#000";
  @Input('backgroundColor') typeBackgroundColor: string = "#FFF"
  @Input() idButton: string = "";
  @Output() buttonTypeClick: EventEmitter<string> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  public onClick = (event: any) => {
    this.buttonTypeClick.emit(event._elementRef.nativeElement.id);
  }


}
