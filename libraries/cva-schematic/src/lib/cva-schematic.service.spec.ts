import { TestBed } from '@angular/core/testing';

import { CvaSchematicService } from './cva-schematic.service';

describe('CvaSchematicService', () => {
  let service: CvaSchematicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CvaSchematicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
