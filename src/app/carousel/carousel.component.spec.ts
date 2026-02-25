import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CarouselComponent } from './carousel.component';
import { CarouselService } from './carousel.service';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;
  let carouselServiceSpy: jasmine.SpyObj<CarouselService>;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('CarouselService', ['current', 'next', 'prev', 'goTo']);
    spy.current.and.returnValue(0);
    spy.next.and.callFake(() => {});
    spy.prev.and.callFake(() => {});
    spy.goTo.and.callFake((index: number) => {});

    TestBed.configureTestingModule({
      declarations: [CarouselComponent],
      providers: [
        { provide: CarouselService, useValue: spy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    carouselServiceSpy = TestBed.get(CarouselService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default index 0', () => {
    expect(component.index).toBe(0);
  });

  it('should have countries array', () => {
    expect(component.countries).toBeDefined();
    expect(component.countries.length).toBeGreaterThan(0);
  });

  it('should have correct number of countries', () => {
    expect(component.countries.length).toBe(6);
  });

  it('should call next on carousel service', () => {
    component.next();
    expect(carouselServiceSpy.next).toHaveBeenCalled();
  });

  it('should call prev on carousel service', () => {
    component.prev();
    expect(carouselServiceSpy.prev).toHaveBeenCalled();
  });

  it('should call goTo on carousel service with correct index', () => {
    component.goTo(3);
    expect(carouselServiceSpy.goTo).toHaveBeenCalledWith(3);
  });

  it('should get current index from service', () => {
    carouselServiceSpy.current.and.returnValue(2);
    fixture.detectChanges();
    expect(component.index).toBe(2);
  });

  it('should have country names', () => {
    expect(component.countries[0]).toBe('United States of America');
    expect(component.countries[1]).toBe('United Kingdom');
    expect(component.countries[2]).toBe('Australia');
    expect(component.countries[3]).toBe('Germany');
    expect(component.countries[4]).toBe('France');
    expect(component.countries[5]).toBe('Brazil');
  });
});
