import { Component, OnInit } from '@angular/core';
import { Observable, Observer, of } from 'rxjs';

@Component({
  selector: 'app-number-observable',
  templateUrl: './number-observable.component.html',
  styleUrls: ['./number-observable.component.css']
})
export class NumberObservableComponent implements OnInit {

  ngOnInit() {
    //this.useFormEvent();
  }

  // 1
  // of()创建数据流
  subscribe() {
    const myObservable = of(1, 2, 3);

    const myObserver = {
      next: (x: number) => console.log('Observer got a next value: ' + x),
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };

    myObservable.subscribe(myObserver);
  }


  // 2
  //use the Observable constructor
  // 创建可观察流
  createSequenceSubscriber() {
    const sequence = new Observable<number>((observer: Observer<number>) => {
     // synchronously deliver 1, 2, and 3, then complete
      observer.next(4);
      observer.next(5);
      observer.next(6);
      observer.complete();

      // unsubscribe function doesn't need to do anything in this
      // because values are delivered synchronously
      return {unsubscribe() {}};
    });

    sequence.subscribe({
      next(num) { console.log(num);},
      complete() { console.log('Finished sequence');}
    });
  }


  // 3
  // 发布事件的可观察对象
  // an observable that publishes event
  createFromEvent<T extends keyof HTMLElementEventMap>(target: HTMLElement, eventName: T) {
    return new Observable<HTMLElementEventMap[T]>(
      (observer) => {
        const handler = (e: HTMLElementEventMap[T]) => observer.next(e);

        // Add the event handler to the target
        target.addEventListener(eventName, handler);

        return () => {
          // Detach the event handler from the target
          target.removeEventListener(eventName, handler);
        };
      }
    );
  }

  useFormEvent() {
    const ESC_CODE = 'Escape';
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const subscription = this.createFromEvent(nameInput, 'keydown')
                        .subscribe(
                          (e: KeyboardEvent) => {
                            if(e.code === ESC_CODE) {
                              nameInput.value = '';
                            }
                          }
                        );
    //subscription.unsubscribe();
  }

}




