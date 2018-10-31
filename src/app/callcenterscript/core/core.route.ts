
import {Routes } from '@angular/router';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { GreetingpageComponent } from './components/greetingpage/greetingpage.component';
export const ROUTES: Routes = [
{
	    path: 'main--page', component: MainpageComponent
},
{
	    path: 'greetingpage', component: GreetingpageComponent
},
];

