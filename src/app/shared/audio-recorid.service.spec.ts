import { TestBed } from '@angular/core/testing';

import { AudioRecoridService } from './audio-recorid.service';

describe('AudioRecoridService', () => {
  let service: AudioRecoridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudioRecoridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
