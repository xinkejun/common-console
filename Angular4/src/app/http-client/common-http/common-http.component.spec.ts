import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonHttpComponent } from './common-http.component';

describe('CommonHttpComponent', () => {
  let component: CommonHttpComponent;
  let fixture: ComponentFixture<CommonHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
