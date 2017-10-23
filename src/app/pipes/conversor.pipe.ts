import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name:'conversor'})
export class ConversorPipe implements PipeTransform{
    transform( value : string, por:string){
        let value_one = parseInt(value);
        let value_two = parseInt(por);

        let result:String="La multiplicacion: "+value_one+"x"+value_two+"="+(value_one*value_two);

        return result;
        

    }

}