import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IsOpenPage } from './isopen.page';

describe('IsOpenPage', () => {
  let component: IsOpenPage;
  let fixture: ComponentFixture<IsOpenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IsOpenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
