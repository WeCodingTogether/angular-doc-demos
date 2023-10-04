import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.css']
})
export class GeolocationComponent {
  subscribe(){
    const locations = new Observable((observer) => {
      let watchId :number;

      if('geolocation' in navigator) {
        watchId = navigator.geolocation.watchPosition((position: GeolocationPosition)=> {
          observer.next(position);
        }, (error: GeolocationPositionError)=> {
          observer.error(error);
        });
      } else {
        observer.error('Geolocation not available');
      }

      return {
        unsubscribe() {
          navigator.geolocation.clearWatch(watchId);
        }
      };
    });

    const locationSubscribtion = locations.subscribe({
      next(position) {
        console.log('Current position: ', position);
      },
      error(msg) {
        console.log('Error getting location: ', msg);
      }
    });

    setTimeout(() => {
      locationSubscribtion.unsubscribe();
    }, 10000);

  }

}
