import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  template: `

        <div style="background-color: lightblue"><h3 class="menu-center"><i>Experimentz</i></h3>  <app-menu class="menu-right"></app-menu></div>


  `,
  styleUrls: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
