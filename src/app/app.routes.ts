import { Routes } from '@angular/router';
import { HomeComponent } from "@/home/home.component";
import { ROUTES } from "../constants/routes";


export const routes: Routes = [
    { path: ROUTES.HOME, component: HomeComponent },
];


