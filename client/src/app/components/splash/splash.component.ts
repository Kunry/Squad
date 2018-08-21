import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit() {
  }

  click(){
    this.route.navigate(['/jeep'])
  }

}
