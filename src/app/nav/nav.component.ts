import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  name = '';
  flag = false;
  constructor() {
    // for(let i = 0 ; i < this.links.length;i++)
    //  this.links[i]
    // }

    // this.links.forEach(link => {
    //   console.log(link);
    // });
  }
  ngOnInit() {
  }

  submit() {
    this.flag = true;
  }

}
