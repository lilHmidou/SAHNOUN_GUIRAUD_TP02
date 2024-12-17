import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Film4ChildComponent } from './film4-child.component';

describe('Film4ChildComponent', () => {
  let component: Film4ChildComponent;
  let fixture: ComponentFixture<Film4ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Film4ChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Film4ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
