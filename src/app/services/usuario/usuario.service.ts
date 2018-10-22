
import { URL_SERVICIOS } from '../../config/config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../models/usuario.models';

import { Router } from '@angular/router';

import 'rxjs/add/operator/map';
import swal from 'sweetalert2';
import { SubirArchivoService } from '../subir-archivo/subir-archivo.service';



@Injectable()
export class UsuarioService {

  usuario: Usuario;
  token: string;


  constructor(
    public http: HttpClient,
    private router: Router,
    public _subirArchivoService: SubirArchivoService
  ) { this.cargarStorage(); }
// Siempre que instanciemos el servicio de usuario, se cargan los datos del local storage
  cargarStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    } else {
      this.token = '';
      this.usuario = null;
    }
  }


  guardarStorage( id: string, token: string, usuario: Usuario ) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));

    this.usuario = usuario;
    this.token = token;
  }


  login( usuario: Usuario, recordar: boolean = false) {

    if (recordar) {
      localStorage.setItem('email', usuario.email);
    } else {
      localStorage.removeItem('email');
    }

    let url = URL_SERVICIOS + '/login';
    return this.http.post( url, usuario )
      .map ( (resp: any ) => {
        localStorage.setItem('id', resp.id);
        localStorage.setItem('token', resp.token);
        localStorage.setItem('usuario', JSON.stringify(resp.usuario));

        this.usuario = resp.usuario;
        this.token = resp.token;

        return true;
      });
  }

  logout() {
    this.usuario = null;
    this.token = '';

    localStorage.removeItem('token');
    localStorage.removeItem('usuario');

    this.router.navigate(['/login']);
  }



crearUsuario ( usuario: Usuario) {
  let url = URL_SERVICIOS + '/usuario';

  return this.http.post(url, usuario)
    .map( (resp: any) => {
        swal('Usuario creado', usuario.email, 'success');
        return resp.usuario;
    });
}

actualizarUsuario(usuario: Usuario) {
  let url = URL_SERVICIOS + '/usuario/' + usuario._id;
  url += '?token=' + this.token;
  return this.http.put(url, usuario)
    .map( (resp: any) => {
      let usuarioDB: Usuario = resp.usuario;
      this.guardarStorage(usuarioDB._id, this.token, usuarioDB);
      swal('Usuario actualizado', usuario.nombre, 'success');
      return true;
    });
}

cargarUsuarios() {
  let url = URL_SERVICIOS + '/usuario';
  return this.http.get( url )
    .map( (resp: any) => {
      return resp;
    });
}

cambiarImagen ( archivo: File, id: string ) {
  this._subirArchivoService.subirArchivo( archivo, 'usuarios', id )
    .then( (resp: any) => {
      console.log( resp );
      this.usuario.img = resp.usuario.img;
      swal('Imagen actualizada', this.usuario.nombre , 'success' );
      this.guardarStorage( id, this.token, this.usuario );
    })
    .catch( resp => {
      console.log( resp );
    });
}

}
