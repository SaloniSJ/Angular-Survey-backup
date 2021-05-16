import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core'
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) {
    console.log("Router Navigation data===>",this.router.getCurrentNavigation().extras.state)
   }

  ngOnInit(): void {
    console.log("Router Navigation data===>",history.state)
  }

}
