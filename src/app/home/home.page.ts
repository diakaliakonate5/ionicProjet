import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public login: any;
  public currentTime: any


  constructor(private activeRoute: ActivatedRoute) {
    this.activeRoute.queryParams.subscribe(params => {this.login = params.login})
    let date = new Date()
    this.currentTime = "Heure :" +date.getHours()+"h: "+date.getMinutes()+"min "+date.getSeconds()+"s"
  }

}
