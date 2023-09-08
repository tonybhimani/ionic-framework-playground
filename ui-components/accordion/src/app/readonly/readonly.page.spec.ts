import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReadonlyPage } from './readonly.page';

describe('ReadonlyPage', () => {
  let component: ReadonlyPage;
  let fixture: ComponentFixture<ReadonlyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReadonlyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
