import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BasketballPage } from './basketball.page';

describe('BasketballPage', () => {
  let component: BasketballPage;
  let fixture: ComponentFixture<BasketballPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BasketballPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
