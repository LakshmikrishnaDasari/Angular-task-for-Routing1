import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckresetComponent } from './checkreset.component';

describe('CheckresetComponent', () => {
  let component: CheckresetComponent;
  let fixture: ComponentFixture<CheckresetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckresetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckresetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
