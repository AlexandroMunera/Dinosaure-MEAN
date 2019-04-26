import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinoDetailComponent } from './dino-detail.component';

describe('DinoDetailComponent', () => {
  let component: DinoDetailComponent;
  let fixture: ComponentFixture<DinoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
