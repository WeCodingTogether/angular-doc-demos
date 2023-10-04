import { Component } from '@angular/core';
import { HEROES } from '../heroes';

@Component({
  selector: 'app-flying-heros',
  templateUrl: './flying-heros.component.html',
  styleUrls: ['./flying-heros.component.css']
})
export class FlyingHerosComponent {
  heroes: any[] = [];
  canFly = true;
  mutate=true;
  title = 'Flying Heroes (pure pipe)';

  constructor() { this.reset(); }

  addhero(name: string) {
    // trim() 在JS中用于删除字符串两端的空格字符，确保字符串没有不必要的空格
    // name = name.trim() 删除用户在字符串前后输入的空格，将值重新赋值给name
    name = name.trim();
    if(!name) { return; }
    const hero = {name, canFly: this.canFly};

    if(this.mutate) {
      this.heroes.push(hero);
    } else {
      this.heroes = this.heroes.concat(hero)
    }

  }

  // HEROES.slice() 返回HEROSES数组的一个浅拷贝（副本），修改这里的数组副本时，不会影响原始数组的内容
  reset() { this.heroes = HEROES.slice(); }


}
