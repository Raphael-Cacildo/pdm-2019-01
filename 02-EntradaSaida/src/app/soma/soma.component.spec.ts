import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomaPage } from './soma.page';

describe('SomaPage', () => {
  let component: SomaPage;
  let fixture: ComponentFixture<SomaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
