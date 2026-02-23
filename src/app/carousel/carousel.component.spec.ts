import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarouselComponent } from './carousel.component';
import { CarouselService } from './carousel.service';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;
  let carouselServiceSpy: jasmine.SpyObj<CarouselService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('CarouselService', ['update', 'current']);
    
    await TestBed.configureTestingModule({
      declarations: [CarouselComponent],
      providers: [
        { provide: CarouselService, useValue: spy }
      ]
    }).compileComponents();

    carouselServiceSpy = TestBed.inject(CarouselService) as jasmine.SpyObj<CarouselService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.id).toBe(0);
    expect(component.carouselArray.length).toBe(6);
    expect(component.currdeg).toBe(0);
  });

  it('should have correct carousel array', () => {
    expect(component.carouselArray[0]).toBe('USA');
    expect(component.carouselArray[1]).toBe('UK');
    expect(component.carouselArray[2]).toBe('Australia');
    expect(component.carouselArray[3]).toBe('Germany');
    expect(component.carouselArray[4]).toBe('France');
    expect(component.carouselArray[5]).toBe('Brazil');
  });

  it('should emit event when pickDate is called', () => {
    spyOn(component.onDatePicked, 'emit');
    component.pickDate('test-date');
    expect(component.onDatePicked.emit).toHaveBeenCalledWith('test-date');
  });

  it('should call changeLayout and emit event', () => {
    spyOn(component.onDatePicked, 'emit');
    component.changeLayout();
    expect(component.onDatePicked.emit).toHaveBeenCalledWith('swag');
  });

  it('next should increment id and call carouselService.update', () => {
    carouselServiceSpy.current.and.returnValue(0);
    component = new CarouselComponent(carouselServiceSpy);
    component.next();
    expect(component.id).toBe(1);
    expect(carouselServiceSpy.update).toHaveBeenCalledWith(1);
  });

  it('next should wrap around from 5 to 0', () => {
    carouselServiceSpy.current.and.returnValue(5);
    component = new CarouselComponent(carouselServiceSpy);
    component.id = 5;
    component.next();
    expect(component.id).toBe(0);
    expect(carouselServiceSpy.update).toHaveBeenCalledWith(0);
  });

  it('prev should decrement id and call carouselService.update', () => {
    carouselServiceSpy.current.and.returnValue(1);
    component = new CarouselComponent(carouselServiceSpy);
    component.id = 1;
    component.prev();
    expect(component.id).toBe(0);
    expect(carouselServiceSpy.update).toHaveBeenCalledWith(0);
  });

  it('prev should wrap around from 0 to 5', () => {
    carouselServiceSpy.current.and.returnValue(0);
    component = new CarouselComponent(carouselServiceSpy);
    component.id = 0;
    component.prev();
    expect(component.id).toBe(5);
    expect(carouselServiceSpy.update).toHaveBeenCalledWith(5);
  });

  it('rotate should update currdeg for next', () => {
    component.rotate(1, 0);
    expect(component.currdeg).toBe(-60);
  });

  it('rotate should update currdeg for prev', () => {
    component.rotate(2, 0);
    expect(component.currdeg).toBe(60);
  });

  it('rotate should accumulate rotation', () => {
    component.rotate(1, 0);
    expect(component.currdeg).toBe(-60);
    component.rotate(1, -60);
    expect(component.currdeg).toBe(-120);
  });
});
