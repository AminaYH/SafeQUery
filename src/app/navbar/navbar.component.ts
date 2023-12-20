import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterOutlet} from "@angular/router";
import {
  NgbInputDatepicker,
  NgbNav,
  NgbNavContent,
  NgbNavItem,
  NgbNavLinkBase,
  NgbNavOutlet,
} from "@ng-bootstrap/ng-bootstrap";

import {TooltipModule} from "ngx-bootstrap/tooltip";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgbNav, NgbNavItem, NgbNavOutlet, NgbNavLinkBase, NgbNavContent, NgbInputDatepicker, TooltipModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
