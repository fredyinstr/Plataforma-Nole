import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitoreo',
  templateUrl: './monitoreo.component.html',
  styles: []
})
export class MonitoreoComponent implements OnInit {


  options = {
    min: 0,
    title: 'Aula 6A'
  };
  max = 100;
  value = 67;

  options1 = {
    min: 0,
    title: 'Aula 6B'
  };
  max1 = 100;
  value1 = 35;

  constructor() { }

  ngOnInit() {
  }

}
