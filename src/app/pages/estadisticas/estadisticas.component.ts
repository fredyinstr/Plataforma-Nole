import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styles: []
})
export class EstadisticasComponent implements OnInit {

  graficos: any = {
    'grafico1': {
      'labels': ['6A', '9B', '11A'],
      'data':  [24, 30, 41],
      'type': 'doughnut',
      'leyenda': 'Aulas con menor ruido'
    },
    'grafico2': {
      'labels': ['6A', '6B', '7A', '7B', '8A', '8B'],
      'data':  [25, 35, 72, 15, 33, 64],
      'type': 'doughnut',
      'leyenda': 'Promedio de ruido del día'
    }
  };

  options = {
    scales: {
        xAxes: [{
            gridLines: {
                offsetGridLines: true
            }
        }]
    }
};

  constructor() { }

  ngOnInit() {
  }

}
