import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Film5ChildComponent } from './film5-child.component';

describe('Film5ChildComponent', () => {
  let component: Film5ChildComponent;
  let fixture: ComponentFixture<Film5ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Film5ChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Film5ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
