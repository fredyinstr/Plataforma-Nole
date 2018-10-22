import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/config';
import { HttpClient } from '@angular/common/http';
import { Institucion } from '../../models/institucion.model';

import { Router } from '@angular/router';

import 'rxjs/add/operator/map';
import swal from 'sweetalert2';
import { SubirArchivoService } from '../subir-archivo/subir-archivo.service';



@Injectable()
export class InstitucionService {

  institucion: Institucion;
  token: string;
  usuario: string;

  constructor(
    public http: HttpClient,
    private router: Router,
    public _subirArchivoService: SubirArchivoService
  ) { this.cargarStorage(); }

  cargarStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    }
  }

  crearInstitucion(institucion: Institucion) {
    // console.log('token: ' + this.token);
    let url = URL_SERVICIOS + '/institucion';
    url += '?token=';
    url += this.token;
    return this.http.post( url, institucion )
      .map ( (resp: any ) => {
        return resp;
      });

  }

  cambiarImagen ( archivo: File, id: string ) {
    this._subirArchivoService.subirArchivo( archivo, 'instituciones', id )
      .then( (resp: any) => {
        console.log( resp );
        swal('Imagen actualizada', '', 'success' );
      })
      .catch( resp => {
        console.log( resp );
      });
  }



}
