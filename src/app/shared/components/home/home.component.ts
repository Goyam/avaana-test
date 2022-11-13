import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  servicesList = [{img: "service1"}, {img: "service2"}, {img: "service3"}, {img: "service1"}, {img: "service2"}, {img: "service3"}];

  constructor() { }

  ngOnInit(): void {
  }

}
