import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-saludar',
  templateUrl: './saludar.component.html',
  styleUrls: ['./saludar.component.css']
})
export class SaludarComponent {
  @Input() nombre:string = 'Lizbeth';
  @Output() saludar: EventEmitter<string> = new EventEmitter<string>();
  
  nombres: Array<string>= [];
  nombreList:string="Jaziel"
  name:string
  
  constructor() { 
  }
  onClick(){
    this.saludar.emit('Hola');
  }

  onButtonClick(name){
    this.nombres.push(name);
    console.log(this.nombres)
  }
  

}
