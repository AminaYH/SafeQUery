import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {
  NgbInputDatepicker,
  NgbNav,
  NgbNavContent,
  NgbNavItem,
  NgbNavLinkBase,
  NgbNavModule,
  NgbNavOutlet
} from '@ng-bootstrap/ng-bootstrap';
import {TooltipModule} from "ngx-bootstrap/tooltip";
import {NavbarComponent} from "./navbar/navbar.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {MainpageComponent} from "./mainpage/mainpage.component";
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {TreeComponent} from './tree/tree.component';
@Component({

  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgbNav, NgbNavItem, NgbNavOutlet, NgbNavLinkBase, NgbNavContent, NgbInputDatepicker, TooltipModule, NavbarComponent, SidebarComponent, HomepageComponent, RouterLink, RouterLinkActive, MainpageComponent,HttpClientModule,TreeComponent],
  providers:[HttpClientModule],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {


}
