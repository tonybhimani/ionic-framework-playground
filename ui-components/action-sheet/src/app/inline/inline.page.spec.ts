import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlinePage } from './inline.page';

describe('InlinePage', () => {
  let component: InlinePage;
  let fixture: ComponentFixture<InlinePage>;

  beforeEach(async () => {
    await TestBed
      .configureTestingModule()
      .compileComponents();

    fixture = TestBed.createComponent(InlinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
