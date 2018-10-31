import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AmexioWidgetModule, AmexioChartsModule, AmexioDashBoardModule, AmexioMapModule} from 'amexio-ng-extensions';
import { HttpClientModule } from '@angular/common/http';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { GreetingpageComponent } from './components/greetingpage/greetingpage.component';
import { ROUTES } from './core.route';

@NgModule({
	  imports: [
	    CommonModule, FormsModule,
	    HttpClientModule,
	    RouterModule.forChild(ROUTES),
	    AmexioWidgetModule,
	    AmexioChartsModule,
	    AmexioDashBoardModule,
	    AmexioMapModule	
	  ],
	  exports: [RouterModule],
	  declarations: [
	    MainpageComponent,
	    GreetingpageComponent,
	  ],
	  providers: [
	  ]
})
export class CoreModule {
}
