import { Component } from '@angular/core';
import { Coche } from './coche';
import { PeticionesService } from '../services/peticiones.service';

@Component({
    selector: 'coches',
    templateUrl: './coches.component.html',
    providers: [PeticionesService]

})
export class CochesComponent {
    public coche: Coche;
    public coches: Array<Coche>;
    public articulos;
    constructor(
        private _peticionesService: PeticionesService
    ) {
        this.coche = new Coche("", null, "");
        this.coches = [
            new Coche("Seat Panda", 120, "Blanco"),
            new Coche("Renault clio", 110, "Azul")

        ];
    }
    ngOnInit() {
        console.log(this._peticionesService.getArticulos().subscribe(
            result => {
                this.articulos = result;
                if (!this.articulos) {
                    console.log('Se ha producido un error en el servidor.');
                }
            },
            error => {
                var errorMensaje = <any>error;
                console.log(errorMensaje);
            }
        )
        );

    }
    onSubmit() {
        this.coches.push(this.coche);
        this.coche = new Coche("", null, "");
    }
}