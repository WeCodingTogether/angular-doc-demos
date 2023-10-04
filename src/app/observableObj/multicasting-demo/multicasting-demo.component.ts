import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';


@Component({
  selector: 'app-multicasting-demo',
  templateUrl: './multicasting-demo.component.html',
  styleUrls: ['./multicasting-demo.component.css']
})
export class MulticastingDemoComponent {

  //clearTimer: VoidFunction | undefined;
  seq = [1, 2, 3];

  // createSequenceSubscriber() 是一个从 1 到 3 进行计数的例子，它每发出一个数字就会等待 1 秒。
  createSequenceSubscriber(observer: Observer<number>) {

    let clearTimer: VoidFunction | undefined;

    const doInSequence = (arr: number[], idx: number, observer: Observer<number>) => {
    const timeout = setTimeout(
      () => {
        observer.next(arr[idx]);
        if(idx === arr.length - 1) {
          observer.complete();
        } else {
        doInSequence(arr, ++idx, observer);
        }
      }, 1000
    );
    clearTimer = () => clearTimeout(timeout);
  }

   doInSequence(this.seq, 0, observer);

    return {
      unsubscribe() {
        clearTimer?.();
      }
    };
  }

  // ngOnDestroy() {
  //   // if (this.createSequenceSubscriber) {
  //   //   this.createSequenceSubscriber.unsubscribe();
  //   // }
  // }

  startSequence() {
    const sequence = new Observable(this.createSequenceSubscriber.bind(this));
    // 订阅1次，普通订阅
    // sequence.subscribe({
    //   next(num) { console.log(num);},
    //   complete() { console.log('Finished sequence');}
    // });

    // 订阅两次，延时显示
    // Subscribe starts the clock, and will emit after 1 second
    sequence.subscribe({
      next(num) { console.log('1st subscribe: ' + num); },
      complete() { console.log('1st sequence finished.'); }
    });

    // After 1/2 second, subscribe again.
    setTimeout(() => {
      sequence.subscribe({
        next(num) { console.log('2nd subscribe: ' + num); },
        complete() { console.log('2nd sequence finished.'); }
      });
    }, 500);
  }

}
