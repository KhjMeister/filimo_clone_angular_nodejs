import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidshowComponent } from './slidshow.component';

describe('SlidshowComponent', () => {
  let component: SlidshowComponent;
  let fixture: ComponentFixture<SlidshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidshowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
