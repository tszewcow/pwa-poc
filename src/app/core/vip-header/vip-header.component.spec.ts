import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VipHeaderComponent } from './vip-header.component';

describe('VipHeaderComponent', () => {
  let component: VipHeaderComponent;
  let fixture: ComponentFixture<VipHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VipHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VipHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
