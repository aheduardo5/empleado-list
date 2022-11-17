import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrls: ['./count-empleados.component.css']
})
export class CountEmpleadosComponent implements OnInit {

  @Input() todos:number;
  @Input() fem:number;
  @Input() masc:number;
  @Output() countRadioButtonChange = new EventEmitter<string>();
  radioBSelected = 'Todos';
  constructor() {
    this.todos = 0;
    this.fem = 0;
    this.masc = 0;
  }

  ngOnInit(): void {
   
  }

  radioChange():void{
    this.countRadioButtonChange.emit(this.radioBSelected);
  }

}
