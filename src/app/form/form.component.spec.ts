import { TestBed, async } from '@angular/core/testing';
import { FormComponent } from './form.component';
import { CarouselService } from '../carousel/carousel.service';
import { of } from 'rxjs';

describe('FormComponent', () => {
  let component: FormComponent;
  let carouselService: CarouselService;
  
  beforeEach(async(() => {
    const carouselServiceSpy = jasmine.createSpyObj('CarouselService', ['current']);
    
    TestBed.configureTestingModule({
      declarations: [FormComponent],
      providers: [
        { provide: CarouselService, useValue: carouselServiceSpy }
      ]
    }).compileComponents();
    
    carouselService = TestBed.get(CarouselService);
  }));

  it('should create the component', async(() => {
    const fixture = TestBed.createComponent(FormComponent);
    component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

  it('should have default values for name, link, companies, id', async(() => {
    const fixture = TestBed.createComponent(FormComponent);
    component = fixture.debugElement.componentInstance;
    
    expect(component.name).toBe('');
    expect(component.link).toBe('');
    expect(component.companies).toEqual([]);
    expect(component.id).toBe(0);
  }));

  it('should initialize companies based on current carousel index', async(() => {
    const fixture = TestBed.createComponent(FormComponent);
    component = fixture.debugElement.componentInstance;
    
    // Mock the carousel service to return index 0
    carouselService.current.and.returnValue(0);
    
    // Re-initialize component with mocked service
    component.ngOnInit();
    
    // Should have United States of America as name
    expect(component.name).toBe('United States of America');
    // Should have companies array with items
    expect(component.companies.length).toBeGreaterThan(0);
  }));

  it('should have formItems with 5 country items', async(() => {
    const fixture = TestBed.createComponent(FormComponent);
    component = fixture.debugElement.componentInstance;
    
    expect(component.formItems.item.length).toBe(5);
  }));

  it('should have United States of America as first country', async(() => {
    const fixture = TestBed.createComponent(FormComponent);
    component = fixture.debugElement.componentInstance;
    
    expect(component.formItems.item[0].name).toBe('United States of America');
  }));

  it('should have United Kingdom as second country', async(() => {
    const fixture = TestBed.createComponent(FormComponent);
    component = fixture.debugElement.componentInstance;
    
    expect(component.formItems.item[1].name).toBe('United Kingdom');
  }));

  it('should have Australia as third country', async(() => {
    const fixture = TestBed.createComponent(FormComponent);
    component = fixture.debugElement.componentInstance;
    
    expect(component.formItems.item[2].name).toBe('Australia');
  }));

  it('should have Germany as fourth country', async(() => {
    const fixture = TestBed.createComponent(FormComponent);
    component = fixture.debugElement.componentInstance;
    
    expect(component.formItems.item[3].name).toBe('Germany');
  }));

  it('should have France as fifth country', async(() => {
    const fixture = TestBed.createComponent(FormComponent);
    component = fixture.debugElement.componentInstance;
    
    expect(component.formItems.item[4].name).toBe('France');
  }));

  it('should have Brazil as sixth country', async(() => {
    const fixture = TestBed.createComponent(FormComponent);
    component = fixture.debugElement.componentInstance;
    
    expect(component.formItems.item[5].name).toBe('Brazil');
  }));
});
