import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
//import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	public quote = null;

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public http: Http,
  ){}

  ionViewDidLoad(){
		this.quote = [];
	  this.http.get('http://104.196.41.205/api/quote').toPromise()
	  	.then((response) => {
	    	this.quote = response.json();
	    	console.log(response.json());
		});
  }

  random(){
	  this.http.get('http://104.196.41.205/api/quote').toPromise()
	  	.then((response) => {
	    	this.quote = response.json();
	    	console.log(response.json());
		});
  }

}