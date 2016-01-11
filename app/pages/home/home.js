import {Page, NavController} from 'ionic/ionic';
import {SecondPage} from '../secondPage/secondPage';
import {ShareService} from '../services/ShareService';

@Page({
  templateUrl: 'build/pages/home/home.html',
})

export class Home {
  constructor(nav: NavController, shareService:ShareService) {
  	this.nav = nav;
  }

  changePage() {
    this.nav.push(SecondPage, {
      param1: 'Kiki', param2: 'Riki'
    });
  }  
}
