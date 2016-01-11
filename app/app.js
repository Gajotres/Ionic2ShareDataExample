import {App, Platform, Config} from 'ionic/ionic';
import {Home} from './pages/home/home';
import {ShareService} from './pages/services/ShareService';

@App({
  templateUrl: 'build/app.html',
  providers: [ShareService]
})

class MyApp {
  constructor(platform: Platform, shareService:ShareService) {
    this.platform = platform;
    this.initializeApp();
    this.root = Home;
    shareService.setUserName('John','Johnson');
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log('Platform ready');
    });
  }
}
