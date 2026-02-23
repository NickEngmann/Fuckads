import { TestBed } from '@angular/core/testing';
import { CarouselService } from './carousel.service';

describe('CarouselService', () => {
  let service: CarouselService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarouselService]
    });
    service = TestBed.inject(CarouselService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize with id 0', () => {
    expect(service.current()).toBe(0);
  });

  it('should update id correctly', () => {
    service.update(5);
    expect(service.current()).toBe(5);
  });

  it('should update id multiple times', () => {
    service.update(1);
    expect(service.current()).toBe(1);
    service.update(3);
    expect(service.current()).toBe(3);
    service.update(7);
    expect(service.current()).toBe(7);
  });
});
