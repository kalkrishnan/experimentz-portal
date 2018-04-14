import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  template: `

        <header><h3 style class="menu-left"><i>Experimentz</i></h3>  <app-menu class="menu-right"></app-menu></header>


  `,
  styleUrls: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
