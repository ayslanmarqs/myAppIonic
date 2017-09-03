import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public nomeUsuario: string = 'Ayslan Marques';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  somaDoisNumeros(num1: number, num2: number): void {
    console.log(num1 + num2);
  }

  ionViewDidLoad() {
    this.somaDoisNumeros(4, 5);
  }

}
