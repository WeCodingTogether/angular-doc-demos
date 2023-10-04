import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroBirthday2Component } from './pipe/hero-birthday2/hero-birthday2.component';
import { PowerBoosterComponent } from './pipe/power-booster/power-booster.component';
import { PowerBoostCaculatorComponent } from './pipe/power-boost-caculator/power-boost-caculator.component';
import { FlyingHerosComponent } from './pipe/flying-heros/flying-heros.component';
import { FlyingHeroesImpureComponent } from './pipe/flying-heroes-impure/flying-heroes-impure.component';
import { NumberObservableComponent } from './observableObj/number-observable/number-observable.component';
import { MulticastingDemoComponent } from './observableObj/multicasting-demo/multicasting-demo.component';
import { MulticastingArrayDemoComponent } from './observableObj/multicasting-array-demo/multicasting-array-demo.component';

const routes: Routes = [
  { path:'', redirectTo:'/hero-birthday2', pathMatch:'full'},
  { path:'hero-birthday2', component: HeroBirthday2Component},
  { path:'power-booster', component: PowerBoosterComponent },
  { path:'power-booster-caculator', component: PowerBoostCaculatorComponent },
  { path:'flying-heros', component: FlyingHerosComponent },
  { path:'flying-heros-impure', component: FlyingHeroesImpureComponent },
  { path:'number-observable', component: NumberObservableComponent },
  { path:'multicasting-demo', component: MulticastingDemoComponent},
  { path:"multicasting-array-demo", component: MulticastingArrayDemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
