import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {Home} from './pages/home/home';
import {ShareService} from './pages/services/ShareService';


@Component({
	templateUrl: 'build/app.html',
    providers: [ShareService]	
})

export class MyApp {
	rootPage: any = Home;

	constructor(platform: Platform, private shareService: ShareService) {
		platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			StatusBar.styleDefault();

			shareService.setUserName('John','Johnson');
		});
	}
}

ionicBootstrap(MyApp);