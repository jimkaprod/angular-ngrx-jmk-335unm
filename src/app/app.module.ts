import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule} from '@ngrx/store';
import {environment} from "../environnements/environnement";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";
import {appEffects, getReducers, REDUCER_TOKEN} from "./store/index";
import { MatieresComponent } from './matieres/matieres.component';
import { AjoutMatiereComponent } from './ajout-matiere/ajout-matiere.component';
import { MatiereService } from './matieres/matiere.service';

const appRoutes: Routes = [
  //{ path: '', redirectTo: '/matiere', pathMatch: 'full' },
  { path: '', component: AppComponent },
  { path: 'matiere', component: MatieresComponent },
  { path: 'ajout-matiere', component: AjoutMatiereComponent }
  ];

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule, 
    StoreModule.forRoot(REDUCER_TOKEN),
    EffectsModule.forRoot(appEffects),
    StoreDevtoolsModule.instrument({
      name: '[DEMOANGULARJIMKAPROD]',
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [ AppComponent, MatieresComponent, AjoutMatiereComponent ],
  providers: [MatiereService,
  {
    provide: REDUCER_TOKEN,
    useFactory: getReducers
  }],
  exports:[],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
