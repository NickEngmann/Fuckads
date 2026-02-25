import { TestBed, inject } from '@angular/core/testing';
import { CarouselService } from './carousel.service';

describe('CarouselService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarouselService]
    });
  });

  it('should be created', inject([CarouselService], (service: CarouselService) => {
    expect(service).toBeTruthy();
  }));

  it('should initialize with index 0', inject([CarouselService], (service: CarouselService) => {
    expect(service.current()).toBe(0);
  }));

  it('should go to next index', inject([CarouselService], (service: CarouselService) => {
    service.next();
    expect(service.current()).toBe(1);
  }));

  it('should wrap around to 0 when at end', inject([CarouselService], (service: CarouselService) => {
    service.goTo(5);
    service.next();
    expect(service.current()).toBe(0);
  }));

  it('should go to previous index', inject([CarouselService], (service: CarouselService) => {
    service.goTo(3);
    service.prev();
    expect(service.current()).toBe(2);
  }));

  it('should wrap around to 5 when at beginning', inject([CarouselService], (service: CarouselService) => {
    service.prev();
    expect(service.current()).toBe(5);
  }));

  it('should go to specific index', inject([CarouselService], (service: CarouselService) => {
    service.goTo(4);
    expect(service.current()).toBe(4);
  }));

  it('should handle index out of bounds', inject([CarouselService], (service: CarouselService) => {
    service.goTo(10);
    expect(service.current()).toBe(0);
  }));

  it('should handle negative index', inject([CarouselService], (service: CarouselService) => {
    service.goTo(-1);
    expect(service.current()).toBe(0);
  }));
});
