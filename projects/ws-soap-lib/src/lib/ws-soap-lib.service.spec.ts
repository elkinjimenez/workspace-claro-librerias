import { TestBed } from '@angular/core/testing';

import { WsSoapLibService } from './ws-soap-lib.service';

describe('WsSoapLibService', () => {
  let service: WsSoapLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WsSoapLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
