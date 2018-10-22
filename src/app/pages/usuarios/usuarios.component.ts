import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/service.index';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {
  usuarios: any;
  constructor(
    public  _usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this._usuarioService.cargarUsuarios()
      .subscribe((resp: any) => {
        console.log(resp);
        this.usuarios = resp.usuarios;
      });
  }

}
