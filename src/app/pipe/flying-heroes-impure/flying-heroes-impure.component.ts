import { Component } from '@angular/core';
import { HEROES } from '../heroes';
import { FlyingHerosComponent } from '../flying-heros/flying-heros.component';

@Component({
  selector: 'app-flying-heroes-impure',
  templateUrl: './flying-heroes-impure.component.html',
  styleUrls: ['./flying-heroes-impure.component.css']
})
export class FlyingHeroesImpureComponent extends FlyingHerosComponent {
 override title = 'Flying Heroes (impure pipe)';
}
