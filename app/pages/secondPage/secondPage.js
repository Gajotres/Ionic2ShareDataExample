import {IonicApp, Page, NavController, NavParams} from 'ionic/ionic';
import {ShareService} from '../services/ShareService';

@Page({
  templateUrl: 'build/pages/secondPage/secondPage.html',
})

export class SecondPage {
  constructor(app: IonicApp, nav: NavController, navParams: NavParams, shareService:ShareService) {
    this.nav = nav;
    this.parameter1 = navParams.get('param1'); 
    this.parameter2 = navParams.get('param2');
    this.serviceData = shareService.getUserName();
  }
}
