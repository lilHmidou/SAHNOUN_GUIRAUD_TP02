import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Film3ChildComponent } from './film3-child.component';

describe('Film3ChildComponent', () => {
  let component: Film3ChildComponent;
  let fixture: ComponentFixture<Film3ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Film3ChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Film3ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
