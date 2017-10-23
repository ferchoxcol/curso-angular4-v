import { Component} from '@angular/core';
import {RopaService} from '../services/ropa.service';

@Component({
	selector:'home',
	templateUrl:'./home.component.html',
	providers:[RopaService]
	})

export class HomeComponent{
	public titulo="Página principal";
	public listado_ropa:Array<string>;
	public prenda_guardar:string;
	public fecha;
	public nombre="Juan Lopez Martinez";
	constructor(
		private _ropaService:RopaService
		){

		this.fecha= new  Date(2017,11,29);



	}
ngOnInit(){
	this.listado_ropa=this._ropaService.getRopa();
	console.log(this.listado_ropa);
}
guardarPrenda(){
		this._ropaService.addRopa(this.prenda_guardar);
		this.prenda_guardar=null;

}
eliminarPrenda(prenda_eliminar:number){
	this._ropaService.removeRopa(prenda_eliminar);
}
}