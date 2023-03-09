import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ge-lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input('background') background?:string="blue";
  @Input('color') color?:string="white";
  @Input('content') content?:string="CLICK ME!";
  @Input('radius') radius?:string="10px";
  @Input('padding') padding?:string="20px";

  @Output() clicked:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  click(){
    this.clicked.emit(true);
  }

}
