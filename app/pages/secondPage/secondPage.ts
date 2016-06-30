import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ShareService} from '../services/ShareService';

@Component({
	templateUrl: 'build/pages/secondPage/secondPage.html'
})

export class SecondPage {

	parameter1: string;
	parameter2: string;
	serviceData: string;

	constructor(private navController: NavController, private navParams: NavParams, private shareService: ShareService) {
	    this.parameter1 = navParams.get('param1'); 
	    this.parameter2 = navParams.get('param2');
	    this.serviceData = shareService.getUserName();
	}    
}