import { Component, OnInit } from '@angular/core';
import {ViewEncapsulation } from '@angular/core'
declare var $: any;
@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SideNavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active1');
    });
  }

}
