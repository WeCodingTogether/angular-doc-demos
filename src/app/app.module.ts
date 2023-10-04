import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroBirthday2Component } from './pipe/hero-birthday2/hero-birthday2.component';
import { ExponentialStrengthPipe } from './pipe/exponential-strength.pipe';
import { PowerBoosterComponent } from './pipe/power-booster/power-booster.component';
import { PowerBoostCaculatorComponent } from './pipe/power-boost-caculator/power-boost-caculator.component';
import { FlyingHerosComponent } from './pipe/flying-heros/flying-heros.component';
import { FlyingHeroesImpurePipe, FlyingHeroesPipe } from './pipe/flying-heroes.pipe';
import { FlyingHeroesImpureComponent } from './pipe/flying-heroes-impure/flying-heroes-impure.component';
import { GeolocationComponent } from './observableObj/geolocation/geolocation.component';
import { NumberObservableComponent } from './observableObj/number-observable/number-observable.component';
import { MulticastingDemoComponent } from './observableObj/multicasting-demo/multicasting-demo.component';
import { MulticastingArrayDemoComponent } from './observableObj/multicasting-array-demo/multicasting-array-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroBirthday2Component,
    ExponentialStrengthPipe,
    PowerBoosterComponent,
    PowerBoostCaculatorComponent,
    FlyingHerosComponent,
    FlyingHeroesPipe,
    FlyingHeroesImpurePipe,
    FlyingHeroesImpureComponent,
    GeolocationComponent,
    NumberObservableComponent,
    MulticastingDemoComponent,
    MulticastingArrayDemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
