import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisablingPage } from './disabling.page';

describe('DisablingPage', () => {
  let component: DisablingPage;
  let fixture: ComponentFixture<DisablingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DisablingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
