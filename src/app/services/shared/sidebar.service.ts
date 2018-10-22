import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    /*{
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Dashboard', url: '/dashboard' },
        { titulo : 'ProgressBar', url: '/progress' },
        { titulo: 'Gráficas', url: '/graficas1' }
      ]
    },*/
    {
      titulo: 'Monitoreo',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Ruido en tiempo real', url: '/monitoreo' },
        { titulo : 'Estadísticas', url: '/estadisticas' },
        { titulo: 'Configurar dispositivos', url: '/conf-dispositivos' },
        { titulo: 'Alertas', url: '/alertas' }
      ]
    },
    {
      titulo: 'Plataforama',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Instituciones', url: '/instituciones' },
        { titulo : 'Aulas', url: '/aulas' },
        { titulo: 'Usuarios', url: '/usuarios' }
      ]
    }
  ];

  constructor() { }

}
