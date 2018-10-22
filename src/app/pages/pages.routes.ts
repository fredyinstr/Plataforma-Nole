import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { MonitoreoComponent } from './monitoreo/monitoreo.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { AlertasComponent } from './alertas/alertas.component';
import { InstitucionesComponent } from './instituciones/instituciones.component';
import { AulasComponent } from './aulas/aulas.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ConfDispositivosComponent } from './conf-dispositivos/conf-dispositivos.component';
import { ProfileComponent } from './profile/profile.component';



const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard'} },
            { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress'} },
            { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Gráficas'} },
            { path: 'account-settings', component: AccoutSettingsComponent, data: { titulo: 'Ajustes del tema'} },
            { path: 'monitoreo', component: MonitoreoComponent, data: { titulo: 'Monitoreo'} },
            { path: 'estadisticas', component: EstadisticasComponent, data: { titulo: 'Estadísticas'} },
            { path: 'conf-dispositivos', component: ConfDispositivosComponent, data: { titulo: 'Configurar dispositivos'} },
            { path: 'alertas', component: AlertasComponent, data: { titulo: 'Mensajes de alerta'} },
            { path: 'instituciones', component: InstitucionesComponent, data: { titulo: 'Instituciones'} },
            { path: 'aulas', component: AulasComponent, data: { titulo: 'Aulas'} },
            { path: 'usuarios', component: UsuariosComponent, data: { titulo: 'Usuarios'} },
            { path: 'perfil', component: ProfileComponent, data: { titulo: 'Perfil de usuario'} },
            { path: '', redirectTo: '/monitoreo', pathMatch: 'full' }
        ]
    }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
