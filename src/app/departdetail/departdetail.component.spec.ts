import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartdetailComponent } from './departdetail.component';

describe('DepartdetailComponent', () => {
  let component: DepartdetailComponent;
  let fixture: ComponentFixture<DepartdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
