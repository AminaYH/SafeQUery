import { Component } from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  constructor(private router: Router) { }

  goToOtherPage(): void {
    this.router.navigate(['./main-page']).then(
      () => {
        console.log('Navigation to /main-page completed!');
      },
      (error) => {
        console.error('Navigation failed:', error);
      }
    );
  }

}
