import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showHeaderList: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleHeader() {
    this.showHeaderList = !this.showHeaderList;
  }

}
