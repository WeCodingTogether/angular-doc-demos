import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-multicasting-array-demo',
  templateUrl: './multicasting-array-demo.component.html',
  styleUrls: ['./multicasting-array-demo.component.css']
})
export class MulticastingArrayDemoComponent {


  startMultiSequence() {
    const multicastSequence = new Observable(this.multicastSequenceSubscriber());
    multicastSequence.subscribe({
      next(num) {console.log('1st subscribe: ' + num )},
      error(err: Error) {console.error('1st got some errors' + err)},
      complete() {console.log('1st sequence finished.')}
    })

    setTimeout(() => {
      multicastSequence.subscribe({
        next(num) {console.log('2nd subscribe: ' + num )},
        error(err: Error) {console.error('2nd got some errors' + err)},
        complete() {console.log('2nd sequence finished.')}
      })
    },1500);
  }

  multicastSequenceSubscriber() {
    const seq = [1, 2, 3];
    const observers: Observer<unknown>[] = [];
    let clearTimer: VoidFunction | undefined;

    const doSequence = (sequenceObserver: Observer<number>, arr: number[], idx: number) => {
      const timeout = setTimeout(() => {
        console.log('Emitting ' + arr[idx]);
        sequenceObserver.next(arr[idx]);
        if (idx === arr.length - 1) {
          sequenceObserver.complete();
        } else {
          doSequence(sequenceObserver, arr, ++idx);
        }
      }, 1000);
      clearTimer = () => clearTimeout(timeout);
    }

    // return the subscriber function
    // runs when sunscribe() function is invoked
    return (observer: Observer<unknown>) => {
              observers.push(observer);
              if(observers.length ===1) {
                const multicastObserver: Observer<unknown> = {
                  next(val) {
                    observers.forEach(obs => obs.next(val))
                  },
                  error() {},
                  complete() {
                    observers.slice(0).forEach(obs => obs.complete());
                  }
                };
                doSequence(multicastObserver, seq, 0);
              }
              return {
                unsubscribe() {
                  observers.splice(observers.indexOf(observer), 1);
                  if(observers.length === 0) {
                    clearTimer?.();
                  }
                }
              };
    };


  }



}
