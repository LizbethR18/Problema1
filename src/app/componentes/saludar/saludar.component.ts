import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludar',
  templateUrl: './saludar.component.html',
  styleUrls: ['./saludar.component.css']
})
export class SaludarComponent implements OnInit {
  @input() nombre:string = 'Lizbeth';
  @output() saludar: EventEmitter<string> = new EventEmitter<string>();
  
  public nombres: Array<string>= [];
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
