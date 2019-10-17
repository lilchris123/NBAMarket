import { TestBed } from '@angular/core/testing';

import { TopPlayerService } from './top-player.service';

describe('TopPlayerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopPlayerService = TestBed.get(TopPlayerService);
    expect(service).toBeTruthy();
  });
});
