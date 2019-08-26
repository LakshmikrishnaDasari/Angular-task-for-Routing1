import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExceldComponent } from './exceld.component';

describe('ExceldComponent', () => {
  let component: ExceldComponent;
  let fixture: ComponentFixture<ExceldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExceldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExceldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
