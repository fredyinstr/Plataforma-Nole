
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// ng2-charts
import { ChartsModule } from 'ng2-charts';
// ng2-justgage
import { JustgageModule } from 'angular2-justgage';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

// Pipes
import { PipesModule } from '../pipes/pipes.module';

// temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { MonitoreoComponent } from './monitoreo/monitoreo.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { ConfDispositivosComponent } from './conf-dispositivos/conf-dispositivos.component';
import { AlertasComponent } from './alertas/alertas.component';
import { InstitucionesComponent } from './instituciones/instituciones.component';
import { AulasComponent } from './aulas/aulas.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoDonaComponent,
        AccoutSettingsComponent,
        MonitoreoComponent,
        EstadisticasComponent,
        ConfDispositivosComponent,
        AlertasComponent,
        InstitucionesComponent,
        AulasComponent,
        UsuariosComponent,
        ProfileComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ReactiveFormsModule,
        ChartsModule,
        JustgageModule,
        PipesModule,
        CommonModule
    ]
})
export class PagesModule { }
