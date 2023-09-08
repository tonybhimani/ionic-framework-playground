import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenPage } from './listen.page';

describe('ListenPage', () => {
  let component: ListenPage;
  let fixture: ComponentFixture<ListenPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(ListenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
