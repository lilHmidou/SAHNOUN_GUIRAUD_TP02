import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Film2ChildComponent } from './film2-child.component';

describe('Film2ChildComponent', () => {
  let component: Film2ChildComponent;
  let fixture: ComponentFixture<Film2ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Film2ChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Film2ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
