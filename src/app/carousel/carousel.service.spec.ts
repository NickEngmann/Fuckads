import { TestBed } from '@angular/core/testing';
import { CarouselService } from './carousel.service';

describe('CarouselService', () => {
  let service: CarouselService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarouselService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return initial id of 0', () => {
    expect(service.current()).toBe(0);
  });

  it('should update id correctly', () => {
    expect(service.update(5)).toBe(5);
    expect(service.current()).toBe(5);
  });

  it('should update id to different values', () => {
    expect(service.update(1)).toBe(1);
    expect(service.update(2)).toBe(2);
    expect(service.current()).toBe(2);
  });
});
