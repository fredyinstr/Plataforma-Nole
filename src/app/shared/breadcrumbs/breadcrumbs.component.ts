import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {
  titulo: string;

  constructor( private router: Router) {
     this.getDataRoute()
      .subscribe( data => {
        // console.log(data);
        this.titulo = data.titulo;
    });
   }

  ngOnInit() {
  }
// Filtra solo lo que nos interesa de la información que nos proporciona el router en este caso solo data
  getDataRoute() {
    return this.router.events.pipe(
      filter(evento => evento instanceof ActivationEnd),
      filter((evento: ActivationEnd ) => evento.snapshot.firstChild === null),
      map( (evento: ActivationEnd ) => evento.snapshot.data )
    );
  }

}
