import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  constructor(private router: Router, private route: ActivatedRoute) { }

  goToSecond() {
    this.router.navigate(['/second'], { relativeTo: this.route});
  }
}
