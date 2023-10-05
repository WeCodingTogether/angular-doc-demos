import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { HeroBirthday2Component } from './pipe/hero-birthday2/hero-birthday2.component';
import { PowerBoosterComponent } from './pipe/power-booster/power-booster.component';
import { PowerBoostCaculatorComponent } from './pipe/power-boost-caculator/power-boost-caculator.component';
import { FlyingHerosComponent } from './pipe/flying-heros/flying-heros.component';
import { FlyingHeroesImpureComponent } from './pipe/flying-heroes-impure/flying-heroes-impure.component';
import { NumberObservableComponent } from './observableObj/number-observable/number-observable.component';
import { MulticastingDemoComponent } from './observableObj/multicasting-demo/multicasting-demo.component';
import { MulticastingArrayDemoComponent } from './observableObj/multicasting-array-demo/multicasting-array-demo.component';
import { HeroAsyncMessageComponent } from './pipe/hero-async-message/hero-async-message.component';
import { HeroListComponent } from './pipe/hero-list/hero-list.component';
import { ViewchildComponent } from './api/viewchild/viewchild.component';
import { ActivatedRouteComponent } from './router/activated-route/activated-route.component';
import { PageNotFoundComponent } from './utility/page-not-found/page-not-found.component';
import { FirstComponent } from './router/nestingroutes/first/first.component';
import { SecondComponent } from './router/nestingroutes/second/second.component';
import { ChildAComponent } from './router/nestingroutes/child-a/child-a.component';
import { ChildBComponent } from './router/nestingroutes/child-b/child-b.component';

const routes: Routes = [
  { path:'', redirectTo:'/hero-birthday2', pathMatch:'full'},
  { path:'hero-birthday2', component: HeroBirthday2Component},
  { path:'power-booster', component: PowerBoosterComponent },
  { path:'power-booster-caculator', component: PowerBoostCaculatorComponent },
  { path:'flying-heros', component: FlyingHerosComponent },
  { path:'flying-heros-impure', component: FlyingHeroesImpureComponent },
  { path:'number-observable', component: NumberObservableComponent },
  { path:'multicasting-demo', component: MulticastingDemoComponent},
  { path:"multicasting-array-demo", component: MulticastingArrayDemoComponent},
  { path: 'hero-async-message', component: HeroAsyncMessageComponent},
  { path:'hero-list', component: HeroListComponent},
  { path:'viewchild', component: ViewchildComponent },
  { path:'activated-route', component:ActivatedRouteComponent },
  { path:'first', component: FirstComponent,
    children: [{ path:'child-a', component: ChildAComponent },
               { path:'child-b', component: ChildBComponent },
              ],
  },
  { path:'second', component: SecondComponent },


  { path:'**', component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


