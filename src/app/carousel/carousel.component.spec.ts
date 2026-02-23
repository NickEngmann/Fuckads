import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CarouselComponent } from './carousel.component';
import { CarouselService } from './carousel.service';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;
  let carouselServiceSpy: jasmine.SpyObj<CarouselService>;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('CarouselService', ['current', 'update']);
    
    TestBed.configureTestingModule({
      declarations: [CarouselComponent],
      providers: [
        { provide: CarouselService, useValue: spy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    carouselServiceSpy = TestBed.get(CarouselService);
    carouselServiceSpy.current.and.returnValue(0);
    carouselServiceSpy.update.and.returnValue(0);
    
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial currentId of 0', () => {
    expect(component.currentId).toBe(0);
  });

  it('should have correct number of slides', () => {
    expect(component.slides.length).toBe(6);
  });

  it('should have correct slide data for USA', () => {
    expect(component.slides[0].name).toBe('United States of America');
  });

  it('should have correct slide data for UK', () => {
    expect(component.slides[1].name).toBe('United Kingdom');
  });

  it('should have correct slide data for Australia', () => {
    expect(component.slides[2].name).toBe('Australia');
  });

  it('should have correct slide data for Germany', () => {
    expect(component.slides[3].name).toBe('Germany');
  });

  it('should have correct slide data for France', () => {
    expect(component.slides[4].name).toBe('France');
  });

  it('should have correct slide data for Brazil', () => {
    expect(component.slides[5].name).toBe('Brazil');
  });

  it('should rotate carousel clockwise', () => {
    component.rotate('cw');
    expect(component.currentId).toBe(1);
  });

  it('should rotate carousel counter-clockwise', () => {
    component.currentId = 1;
    component.rotate('ccw');
    expect(component.currentId).toBe(0);
  });

  it('should wrap around clockwise', () => {
    component.currentId = 5;
    component.rotate('cw');
    expect(component.currentId).toBe(0);
  });

  it('should wrap around counter-clockwise', () => {
    component.currentId = 0;
    component.rotate('ccw');
    expect(component.currentId).toBe(5);
  });

  it('should call carousel service update when rotating', () => {
    component.rotate('cw');
    expect(carouselServiceSpy.update).toHaveBeenCalledWith(1);
  });

  it('should update currentId when service updates', () => {
    carouselServiceSpy.current.and.returnValue(3);
    component.ngOnInit();
    expect(component.currentId).toBe(3);
  });
});
