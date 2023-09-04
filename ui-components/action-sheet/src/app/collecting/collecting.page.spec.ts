import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CollectingPage } from './collecting.page';

describe('CollectingPage', () => {
  let component: CollectingPage;
  let fixture: ComponentFixture<CollectingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CollectingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
