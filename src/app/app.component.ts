import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
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
import {UploadComponent} from "./upload/upload.component";

@Component({

  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgbNav, NgbNavItem, NgbNavOutlet, NgbNavLinkBase, NgbNavContent, NgbInputDatepicker, TooltipModule, NavbarComponent, SidebarComponent, UploadComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'untitled2';
  active = 1;

}
