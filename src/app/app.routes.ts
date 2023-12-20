import { Routes } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {MainpageComponent} from "./mainpage/mainpage.component";

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'main-page', component: MainpageComponent },


];

