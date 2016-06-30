import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SecondPage} from '../secondPage/secondPage';
import {ShareService} from '../services/ShareService';

@Component({
	templateUrl: 'build/pages/home/home.html'
})

export class Home {
	constructor(private navController: NavController) {

	}

	changePage(event) {
		this.navController.push(SecondPage, {
			param1: 'John', param2: 'Johnson'
		});
	}    
}