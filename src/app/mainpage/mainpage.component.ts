import {Component, ElementRef, Input, SimpleChanges, ViewChild} from '@angular/core';
import {SidebarComponent} from "../sidebar/sidebar.component";
import {NavbarComponent} from "../navbar/navbar.component";


@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [
    SidebarComponent,
    NavbarComponent,

  ],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent {


}
