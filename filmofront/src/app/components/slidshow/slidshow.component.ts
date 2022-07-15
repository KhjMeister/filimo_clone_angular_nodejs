import { Component, Input, OnInit, } from '@angular/core';
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: 'app-slidshow',
  templateUrl: './slidshow.component.html',
  styleUrls: ['./slidshow.component.css'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        style({ opacity: 0 ,transform: "scale(0.5)"}),
        animate('350ms', style({ opacity: 1 ,transform: "scale(1)" }))
      ]),
      transition('* => void', [
        animate('350ms', style({ opacity: 0, transform: "scale(0.5)" }))
      ])
    ])
  ]
})
export class SlidshowComponent implements OnInit {
  @Input() slides:any;
  currentSlide = 0;

  constructor() { }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    // console.log( this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    // console.log( this.currentSlide);
    // setTimeout(this.onNextClick, 2000);
    
  }


  ngOnInit(): void {
    this.preloadImages();
    // this.onNextClick();
  }
  preloadImages() {
    for (const slide of this.slides) {
      new Image().src = slide.src;
    }
  }
}
