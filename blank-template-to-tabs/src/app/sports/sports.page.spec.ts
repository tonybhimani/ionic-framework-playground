import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SportsPage } from './sports.page';

describe('SportsPage', () => {
  let component: SportsPage;
  let fixture: ComponentFixture<SportsPage>;

  beforeEach(async () => {
    TestBed.overrideComponent(SportsPage, {
      add: {
        imports: [RouterTestingModule]
      }
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});