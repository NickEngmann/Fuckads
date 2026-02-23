import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormComponent } from './form.component';
import { CarouselService } from '../carousel/carousel.service';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let carouselServiceSpy: jasmine.SpyObj<CarouselService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('CarouselService', ['current']);
    
    await TestBed.configureTestingModule({
      declarations: [FormComponent],
      providers: [
        { provide: CarouselService, useValue: spy }
      ]
    }).compileComponents();

    carouselServiceSpy = TestBed.inject(CarouselService) as jasmine.SpyObj<CarouselService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.name).toBe('');
    expect(component.link).toBe('');
    expect(component.companies).toEqual([]);
    expect(component.id).toBe(0);
  });

  it('should get id from CarouselService', () => {
    carouselServiceSpy.current.and.returnValue(0);
    component = new FormComponent(carouselServiceSpy);
    expect(component.id).toBe(0);
  });

  it('should get name from formItems based on id', () => {
    carouselServiceSpy.current.and.returnValue(0);
    component = new FormComponent(carouselServiceSpy);
    expect(component.name).toBe('United States of America');
  });

  it('should get companies based on id', () => {
    carouselServiceSpy.current.and.returnValue(0);
    component = new FormComponent(carouselServiceSpy);
    expect(component.companies.length).toBe(8);
  });

  it('should handle different country ids', () => {
    carouselServiceSpy.current.and.returnValue(1);
    component = new FormComponent(carouselServiceSpy);
    expect(component.name).toBe('United Kingdom');
    expect(component.companies.length).toBe(3);
  });

  it('should handle Australia id', () => {
    carouselServiceSpy.current.and.returnValue(2);
    component = new FormComponent(carouselServiceSpy);
    expect(component.name).toBe('Australia');
    expect(component.companies.length).toBe(4);
  });

  it('should handle Germany id', () => {
    carouselServiceSpy.current.and.returnValue(3);
    component = new FormComponent(carouselServiceSpy);
    expect(component.name).toBe('Germany');
    expect(component.companies.length).toBe(1);
  });

  it('should handle France id', () => {
    carouselServiceSpy.current.and.returnValue(4);
    component = new FormComponent(carouselServiceSpy);
    expect(component.name).toBe('France');
    expect(component.companies.length).toBe(1);
  });

  it('should handle Brazil id', () => {
    carouselServiceSpy.current.and.returnValue(5);
    component = new FormComponent(carouselServiceSpy);
    expect(component.name).toBe('Brazil');
    expect(component.companies.length).toBe(1);
  });

  it('should have correct company data for US', () => {
    carouselServiceSpy.current.and.returnValue(0);
    component = new FormComponent(carouselServiceSpy);
    const usCompanies = component.companies;
    expect(usCompanies[0].name).toBe('Axiom');
    expect(usCompanies[0].link).toBe('http://www.acxiom.com.au/about-acxiom/privacy/australia-privacy-policy');
    expect(usCompanies[0].description).toBe('TBD');
  });

  it('should have correct company data for UK', () => {
    carouselServiceSpy.current.and.returnValue(1);
    component = new FormComponent(carouselServiceSpy);
    const ukCompanies = component.companies;
    expect(ukCompanies[0].name).toBe('Axiom');
    expect(ukCompanies[1].name).toBe('Experian');
    expect(ukCompanies[2].name).toBe('Oracle Data Cloud');
  });
});
