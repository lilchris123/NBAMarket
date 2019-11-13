import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseTeamItemComponent } from './purchase-team-item.component';

describe('PurchaseTeamItemComponent', () => {
  let component: PurchaseTeamItemComponent;
  let fixture: ComponentFixture<PurchaseTeamItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseTeamItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseTeamItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
