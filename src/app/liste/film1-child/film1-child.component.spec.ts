import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Film1ChildComponent } from './film1-child.component';

describe('Film1ChildComponent', () => {
  let component: Film1ChildComponent;
  let fixture: ComponentFixture<Film1ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Film1ChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Film1ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
