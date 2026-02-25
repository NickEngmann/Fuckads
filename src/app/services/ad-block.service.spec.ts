import { TestBed, inject } from '@angular/core/testing';
import { AdBlockService } from './ad-block.service';

describe('AdBlockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdBlockService]
    });
  });

  it('should be created', inject([AdBlockService], (service: AdBlockService) => {
    expect(service).toBeTruthy();
  }));

  it('should initialize with default value', inject([AdBlockService], (service: AdBlockService) => {
    expect(service.isAdBlocked()).toBe(false);
  }));

  it('should set ad blocked state', inject([AdBlockService], (service: AdBlockService) => {
    service.setAdBlocked(true);
    expect(service.isAdBlocked()).toBe(true);
  }));

  it('should toggle ad blocked state', inject([AdBlockService], (service: AdBlockService) => {
    service.setAdBlocked(false);
    service.toggleAdBlocked();
    expect(service.isAdBlocked()).toBe(true);
  }));

  it('should persist state to localStorage', inject([AdBlockService], (service: AdBlockService) => {
    service.setAdBlocked(true);
    const saved = localStorage.getItem('adBlocked');
    expect(saved).toBe('true');
  }));
});
