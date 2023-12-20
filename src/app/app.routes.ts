import { Routes } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {MainpageComponent} from "./mainpage/mainpage.component";
import {MainPageComponent} from "./main-page/main-page.component";

export const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'main-page', component: MainPageComponent },


];

