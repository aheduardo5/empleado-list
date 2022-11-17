import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css'],
})
export class EmpleadoListComponent implements OnInit {
  listEmpleados: Empleado[] = [
    {
      legajo: 1,
      nombre: 'Juan',
      apellido: 'Esparza',
      sexo: 'Masculino',
      salario: 23005,
    },
    {
      legajo: 2,
      nombre: 'Peter',
      apellido: 'Parker',
      sexo: 'Masculino',
      salario: 32452,
    },
    {
      legajo: 3,
      nombre: 'Marco',
      apellido: 'Antonio',
      sexo: 'Masculino',
      salario: 45231,
    },
    {
      legajo: 4,
      nombre: 'Aniela',
      apellido: 'Antonieta',
      sexo: 'Femenino',
      salario: 45231,
    },
    {
      legajo: 5,
      nombre: 'Fernanda',
      apellido: 'Sofia',
      sexo: 'Femenino',
      salario: 45231,
    },
  ];

  radioBSelected = 'Todos';
  constructor() {}

  ngOnInit(): void {}

  obtenerTotalEmpleados(): number {
    return this.listEmpleados.length;
  }
  obtenerFemEmpleado(): number {
    return this.listEmpleados.filter((list) => list.sexo === 'Femenino').length;
  }
  obtenerMascEmpleado(): number {
    return this.listEmpleados.filter((list) => list.sexo === 'Masculino')
      .length;
  }

  empleadoEvent(radioB: string): void {
    this.radioBSelected = radioB;
  }
}
