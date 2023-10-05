import { Component } from '@angular/core';
import { Observable, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-hero-async-message',
  templateUrl: './hero-async-message.component.html',
  styleUrls: ['./hero-async-message.component.css']
})
export class HeroAsyncMessageComponent {

  // $ 符号来表示该变量是一个 Observable 对象
  message$: Observable<string>;
  private messages = [
    'you are my hero!',
    'you are the best hero!',
    'will you be my hero?'
  ]

  constructor() {
    this.message$ = this.getResendObservable();
  }

  resend() {
    this.message$ = this.getResendObservable();
  }

  // interval 是 RxJS 库中的一个创建 Observable 的静态工厂函数。
  // 它用于创建一个 Observable，该 Observable 会在固定的时间间隔内发出连续递增的整数值.
  // 例如，如果你使用 interval(1000)，则 Observable 将每隔 1000 毫秒发出一个整数值，起始值为 0，然后递增为 1、2、3，以此类推。
  // interval(period: number, scheduler: SchedulerLike = async)
  // period（必需）：表示时间间隔的参数，以毫秒为单位。这个参数指定了 Observable 每次发出值之间的时间间隔。
  // scheduler（可选）：表示调度器的参数，用于控制 Observable 的执行时机。默认使用 async 调度器，这意味着 Observable 会在异步上下文中执行。

  private getResendObservable() {
    return interval(500).pipe(
      map(i => this.messages[i]),
      take(this.messages.length)
    )
  }



}
