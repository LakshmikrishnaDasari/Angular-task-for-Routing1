import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingsampleComponent } from './routingsample.component';

describe('RoutingsampleComponent', () => {
  let component: RoutingsampleComponent;
  let fixture: ComponentFixture<RoutingsampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingsampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingsampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
