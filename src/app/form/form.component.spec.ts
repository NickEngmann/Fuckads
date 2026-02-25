import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormComponent } from './form.component';
import { CarouselService } from '../carousel/carousel.service';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let carouselServiceSpy: jasmine.SpyObj<CarouselService>;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('CarouselService', ['current']);
    spy.current.and.returnValue(0);

    TestBed.configureTestingModule({
      declarations: [FormComponent],
      providers: [
        { provide: CarouselService, useValue: spy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    carouselServiceSpy = TestBed.get(CarouselService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.name).toBe('United States of America');
    expect(component.companies.length).toBeGreaterThan(0);
    expect(component.link).toBe('');
    expect(component.id).toBe(0);
  });

  it('should get companies for selected country', () => {
    carouselServiceSpy.current.and.returnValue(0);
    const newComponent = new FormComponent(carouselServiceSpy);
    expect(newComponent.name).toBe('United States of America');
    expect(newComponent.companies.length).toBe(8);
  });

  it('should get companies for UK', () => {
    carouselServiceSpy.current.and.returnValue(1);
    const newComponent = new FormComponent(carouselServiceSpy);
    expect(newComponent.name).toBe('United Kingdom');
    expect(newComponent.companies.length).toBe(3);
  });

  it('should get companies for Australia', () => {
    carouselServiceSpy.current.and.returnValue(2);
    const newComponent = new FormComponent(carouselServiceSpy);
    expect(newComponent.name).toBe('Australia');
    expect(newComponent.companies.length).toBe(4);
  });

  it('should get companies for Germany', () => {
    carouselServiceSpy.current.and.returnValue(3);
    const newComponent = new FormComponent(carouselServiceSpy);
    expect(newComponent.name).toBe('Germany');
    expect(newComponent.companies.length).toBe(1);
  });

  it('should get companies for France', () => {
    carouselServiceSpy.current.and.returnValue(4);
    const newComponent = new FormComponent(carouselServiceSpy);
    expect(newComponent.name).toBe('France');
    expect(newComponent.companies.length).toBe(1);
  });

  it('should get companies for Brazil', () => {
    carouselServiceSpy.current.and.returnValue(5);
    const newComponent = new FormComponent(carouselServiceSpy);
    expect(newComponent.name).toBe('Brazil');
    expect(newComponent.companies.length).toBe(1);
  });

  it('should have formItems with correct structure', () => {
    expect(component.formItems).toBeDefined();
    expect(component.formItems.item).toBeDefined();
    expect(component.formItems.item.length).toBe(6);
  });

  it('should have companies with name, link, and description', () => {
    const firstCountry = component.formItems.item[0];
    expect(firstCountry.company[0]).toHaveProperty('name');
    expect(firstCountry.company[0]).toHaveProperty('link');
    expect(firstCountry.company[0]).toHaveProperty('description');
  });
});
