import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the JsonPlaceHolderProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class JsonPlaceHolderProvider {

  apiBase = 'https://jsonplaceholder.typicode.com';
  constructor(public http: Http) {
  }

  getPosts() {
    return this.http.get(this.apiBase + '/posts');
  }
}
