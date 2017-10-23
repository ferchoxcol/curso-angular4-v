import {Component } from '@angular/core';
import {Empleado} from './empleado';

@Component({
	selector:'empleado',
	templateUrl:'./empleado.component.html'
})

export class EmpleadoComponent{
	public titulo ='Componente empleados';
	public empleado:Empleado ;
	public trabajadores:Array<Empleado>;
	public trabajador_externo:boolean;
	public color:string;
	public color_seleccionado:string;


constructor(){
	this.color_seleccionado='#ccc'
	this.empleado=new Empleado('Fernando',45,'cocinero',true);
	this.trabajadores=[new Empleado('Lucia',78,'piloto',false),
	new Empleado('luis',45,'programador',true),
	new Empleado('Marcela',23,'cocinero',true)];
	this.trabajador_externo=true;
	this.color='blue';
}

ngOnInit(){
console.log(this.trabajadores);
	
	}
ColorSeleccionado(){
	console.log("color Seleccionado:"+this.color_seleccionado);
}
cambiarExterno(valor){
	this.trabajador_externo= valor;
}

	}