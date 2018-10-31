/**
 * Created by: Gagan Saxena
 * Date: 26/10/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component(
{
	selector: 'mainpage',
	templateUrl: 'mainpage.component.html'
})
export class MainpageComponent implements OnInit {
	
	constructor( private router: Router) {
	}
	ngOnInit() {
	}
	
}

