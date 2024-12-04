import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteChildComponent } from './route-child.component';

describe('RouteChildComponent', () => {
  let component: RouteChildComponent;
  let fixture: ComponentFixture<RouteChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
