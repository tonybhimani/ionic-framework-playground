import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseballPage } from './baseball.page';

describe('BaseballPage', () => {
  let component: BaseballPage;
  let fixture: ComponentFixture<BaseballPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(BaseballPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
