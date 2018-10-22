import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import swal from 'sweetalert2';
import { InstitucionService } from '../../services/service.index';
import { Institucion } from '../../models/institucion.model';

@Component({
  selector: 'app-instituciones',
  templateUrl: './instituciones.component.html',
  styles: []
})
export class InstitucionesComponent implements OnInit {

  institucion: Institucion;

  forma: FormGroup;

  imagenSubir: File = null;
  imagenTemporal: string;
  imagen: string = '';

  constructor(
    public _institucionService: InstitucionService
  ) { }

  ngOnInit() {

    this.forma = new FormGroup({
      nombre: new FormControl( null, Validators.required),
      direccion: new FormControl(null, Validators.required),
      c_academico: new FormControl(null),
      c_disciplinario: new FormControl(null),
      rector: new FormControl( null),
      nucleo: new FormControl( null),
      p_web: new FormControl( null),
      modalidad: new FormControl( null),
      n_estudiantes: new FormControl( null),
      n_docentes: new FormControl( null),
      jornadas: new FormControl( null)
    });
  }

  crearInstitucion(event) {
    //  console.log(event);
    console.log(this.forma);


    if (this.forma.invalid) {
      swal('Importante', 'Faltan campos', 'warning');
      return;
    }

    // if (!this.forma.value.condiciones) {
    //   swal('Importante', 'Debe aceptar las condiciones', 'warning');
    //   // console.log('Debe aceptar las condiciones');
    // }

    let institucion = new Institucion(
      this.forma.value.nombre,
      this.forma.value.direccion
    );

    this._institucionService.crearInstitucion(institucion)
        .subscribe( resp => {
          console.log(resp);
          this.institucion = resp.institucion;
          swal('Institución creada con éxito!', '', 'success');
        });
  }


  // Imágenen institución

  seleccionImage( archivo: File ) {
    if (!archivo) {
      this.imagenSubir = null;
      return;
    }

    if ( archivo.type.indexOf('image') < 0 ) {
      swal ( 'Solo imágenes!', 'El archivo seleccionado no es una imagen', 'error');
      this.imagenSubir = null;
      return;
    }

    this.imagenSubir = archivo;

    let reader = new FileReader();
    let urlImagenTemp = reader.readAsDataURL( archivo );

    reader.onloadend = () => this.imagenTemporal = reader.result;

  }


  cambiarImagen() {
    let imagen: any = this._institucionService.cambiarImagen( this.imagenSubir, this.institucion._id );
    this.imagen = imagen;
  }

}

// this.router.navigate(['/login'])
