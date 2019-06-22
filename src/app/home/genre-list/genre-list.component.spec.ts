import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreListComponent } from './genre-list.component';

describe('GenreListComponent', () => {
  let component: GenreListComponent;
  let fixture: ComponentFixture<GenreListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenreListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
