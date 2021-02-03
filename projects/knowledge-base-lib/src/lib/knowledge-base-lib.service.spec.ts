import { TestBed } from '@angular/core/testing';

import { KnowledgeBaseLibService } from './knowledge-base-lib.service';

describe('KnowledgeBaseLibService', () => {
  let service: KnowledgeBaseLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KnowledgeBaseLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
