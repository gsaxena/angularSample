/**
 * Created by: Gagan Saxena
 * Date: 26/10/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component(
{
	selector: 'greetingpage',
	templateUrl: 'greetingpage.component.html'
})
export class GreetingpageComponent implements OnInit {
	
	constructor( private router: Router) {
	}
	ngOnInit() {
	}
	
}

