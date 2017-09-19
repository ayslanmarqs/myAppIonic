import { JsonPlaceHolderProvider } from './../../providers/json-place-holder/json-place-holder';
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
  providers: [
    JsonPlaceHolderProvider
  ]
})
export class FeedPage {

  public objeto_feed = {
    titulo: "Ayslan Marques",
    data: "Setembro 4, 2017",
    descricao: "Estudando Ionic novamente",
    qtd_likes: 12,
    qtd_comments: 4,
    time_comment: "11 horas atrás"
  }

  public lista_posts = new Array<any>();

  public nomeUsuario: string = 'Ayslan Marques';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private jsonPlaceHolder: JsonPlaceHolderProvider) {      
  }

  somaDoisNumeros(num1: number, num2: number): void {
    console.log(num1 + num2);
  }

  ionViewDidLoad() {
    //this.somaDoisNumeros(4, 5);

    this.jsonPlaceHolder.getPosts().subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.lista_posts = objeto_retorno;
        //console.log(objeto_retorno);
      },
      error => {
        console.log(error);
      })     
  }

}
