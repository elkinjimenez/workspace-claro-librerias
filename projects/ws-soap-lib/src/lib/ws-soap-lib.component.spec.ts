import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WsSoapLibComponent } from './ws-soap-lib.component';

describe('WsSoapLibComponent', () => {
  let component: WsSoapLibComponent;
  let fixture: ComponentFixture<WsSoapLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WsSoapLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WsSoapLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
