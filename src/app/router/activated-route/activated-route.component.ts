import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-activated-route',
  templateUrl: './activated-route.component.html',
  styleUrls: ['./activated-route.component.css']
})
export class ActivatedRouteComponent implements OnInit {
  // constructor(route: ActivatedRoute) {
  //   const id: Observable<string> = route.params.pipe(map(p => p['id']));
  //   const url: Observable<string> = route.url.pipe(map(segements => segements.join(' ')));
  //   const user = route.data.pipe(map(d => d['user']));
  // }

  id: string = '';
  url: string = '';
  user: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.id = params['id'];
      })

      this.route.url.subscribe(segments => {
        this.url = segments.join(' ');
      });

      this.route.data.subscribe(data => {
        this.user = data['user'];
      });
  }
}
