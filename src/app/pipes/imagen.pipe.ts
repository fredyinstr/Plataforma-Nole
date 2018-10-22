import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, tipo: string = 'usuario'): any {
    let url = URL_SERVICIOS + '/img';
    if ( !img ) {
      return url + '/usuarios/xxx';
    }
    if ( img.indexOf('https') >= 0 ) {
      return img;
    }

    switch ( tipo ) {
      case 'usuario':
        url += '/usuarios/' + img;
      break;

      case 'instituciones':
        url += '/instituciones/' + img;
      break;

      case 'docentes':
        url += '/docentes/' + img;
      break;

      case 'funcionarios':
        url += '/funcionarios/' + img;
      break;

      default:
        console.log('Tipo de imagen no válido');
        url += '/usuarios/xxx';
    }
    return url;
  }

}
