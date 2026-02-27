import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormComponent } from './form.component';
import { CarouselService } from '../carousel/carousel.service';
import { of } from 'rxjs';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let carouselServiceSpy: jasmine.SpyObj<CarouselService>;

  const mockFormItems = {
    item: [
      {
        name: 'United States',
        company: ['Facebook', 'Google', 'Twitter']
      },
      {
        name: 'European Union',
        company: ['Facebook', 'Google']
      }
    ]
  };

  beforeEach(() => {
    carouselServiceSpy = jasmine.createSpyObj('CarouselService', ['current']);
    carouselServiceSpy.current.and.returnValue(0);

    TestBed.configureTestingModule({
      declarations: [FormComponent],
      providers: [
        { provide: CarouselService, useValue: carouselServiceSpy }
      ]
    });

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    component.formItems = mockFormItems;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get id from carousel service', () => {
    expect(component.id).toBe(0);
  });

  it('should get name from formItems based on id', () => {
    expect(component.name).toBe('United States');
  });

  it('should get companies based on id', () => {
    expect(component.companies).toEqual(['Facebook', 'Google', 'Twitter']);
  });

  it('should update when carousel service id changes', () => {
    carouselServiceSpy.current.and.returnValue(1);
    component.ngOnInit();
    expect(component.name).toBe('European Union');
    expect(component.companies).toEqual(['Facebook', 'Google']);
  });
});
