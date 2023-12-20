import {  Component} from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {SidebarComponent} from "../sidebar/sidebar.component";

@Component({
  selector: 'app-landingpage',
  standalone: true,
    imports: [
        NavbarComponent,
        SidebarComponent
    ],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {


}
