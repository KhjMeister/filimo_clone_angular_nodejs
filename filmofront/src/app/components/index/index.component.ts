import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  public slides = [
    { src: "assets/img/s1.jpg" },
    { src: "assets/img/s2.jpg" },
    { src: "assets/img/s3.jpg" }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
