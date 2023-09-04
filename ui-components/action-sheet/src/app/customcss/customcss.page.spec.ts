import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomcssPage } from './customcss.page';

describe('CustomcssPage', () => {
  let component: CustomcssPage;
  let fixture: ComponentFixture<CustomcssPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CustomcssPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
