import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/usuario/usuario.service';
import { Usuario } from '../models/usuario.models';

declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  recuerdame: boolean = false;
  email: string;

  constructor( public router: Router,
                public _usuarioService: UsuarioService ) { }

  ngOnInit() {
    init_plugins();

    this.email = localStorage.getItem('email') || '';
    // Para mantener el chulito de recuerdame si hay algo en el input
    if (this.email.length > 1) {
      this.recuerdame = true;
    }
  }

  ingresar( forma: NgForm ) {

    if (forma.invalid) {
      return;
    }

    let usuario = new Usuario (null, forma.value.email, forma.value.password);

    this._usuarioService.login( usuario, forma.value.recuerdame )
      .subscribe( correcto => this.router.navigate(['/monitoreo']));


    // this.router.navigate([ '/dashboard' ]);

  }

}
