import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormComponent } from './form.component';
import { CarouselService } from '../carousel/carousel.service';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let carouselServiceSpy: jasmine.SpyObj<CarouselService>;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('CarouselService', ['current']);
    
    TestBed.configureTestingModule({
      declarations: [FormComponent],
      providers: [
        { provide: CarouselService, useValue: spy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    carouselServiceSpy = TestBed.get(CarouselService);
    carouselServiceSpy.current.and.returnValue(0);
    
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default country (USA - index 0)', () => {
    expect(component.name).toBe('United States of America');
    expect(component.companies.length).toBe(8);
    expect(component.id).toBe(0);
  });

  it('should initialize with different country when service returns different id', () => {
    carouselServiceSpy.current.and.returnValue(1);
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
    expect(component.name).toBe('United Kingdom');
    expect(component.companies.length).toBe(3);
  });

  it('should have correct companies for Australia', () => {
    carouselServiceSpy.current.and.returnValue(2);
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
    expect(component.name).toBe('Australia');
    expect(component.companies.length).toBe(4);
  });

  it('should have correct companies for Germany', () => {
    carouselServiceSpy.current.and.returnValue(3);
    fixture = TestBed.createComponent(FormComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
    
    expect(component.name).toBe('Germany');
    expect(component.companies.length).toBe(1);
  });

  it('should have correct companies for France', () => {
    carouselServiceSpy.current.and.returnValue(4);
    fixture = TestBed.createComponent(FormComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
    
    expect(component.name).toBe('France');
    expect(component.companies.length).toBe(1);
  });

  it('should have correct companies for Brazil', () => {
    carouselServiceSpy.current.and.returnValue(5);
    fixture = TestBed.createComponent(FormComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
    
    expect(component.name).toBe('Brazil');
    expect(component.companies.length).toBe(1);
  });

  it('should have correct company data for first USA company', () => {
    expect(component.companies[0].name).toBe('Axiom');
    expect(component.companies[0].link).toBe('http://www.acxiom.com.au/about-acxiom/privacy/australia-privacy-policy');
    expect(component.companies[0].description).toBe('TBD');
  });
});
