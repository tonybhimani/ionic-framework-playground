import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThemingPage } from './theming.page';

describe('ThemingPage', () => {
  let component: ThemingPage;
  let fixture: ComponentFixture<ThemingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ThemingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
