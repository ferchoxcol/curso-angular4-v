import { Component} from '@angular/core'

@Component({
	selector: 'fruta',
	templateUrl:'./fruta.component.html'

	})
export class FrutaComponent{
	public nombre_componente='Componente fruta';
	public listado_frutas='Naranja, Manzana, Pera';
	
	public nombre:string;
	public edad:number;
	public mayor:boolean;
	public trabajos:Array<string>=['Carpintero','Ingeniero','Pintor'];

constructor(){
	this.nombre="Julián David";
	this.edad=4;
	this.mayor=false;
	console.log(this.trabajos);
	
}
ngOnInit(){
this.cambiarNombre(this.nombre);

//variables

var uno=8;
var dos=15;

if(uno === 8)
{
	let uno=3;
	var dos=88;
	console.log("Dentro uno"+uno);
}
}
cambiarNombre(nombre){
	this.nombre="Fernando Borja";
	alert(this.nombre);

}

}
