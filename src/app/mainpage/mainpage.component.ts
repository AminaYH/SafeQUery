import {Component, ElementRef, Input, SimpleChanges, ViewChild} from '@angular/core';
import {SidebarComponent} from "../sidebar/sidebar.component";
import {NavbarComponent} from "../navbar/navbar.component";
import {TreeComponent} from "../tree/tree.component";

import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [
    SidebarComponent,
    NavbarComponent,
    TreeComponent,HttpClientModule

  ],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent {


}
