import { TestBed } from '@angular/core/testing';

import { DinoService } from './dino.service';

describe('DinoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DinoService = TestBed.get(DinoService);
    expect(service).toBeTruthy();
  });
});
