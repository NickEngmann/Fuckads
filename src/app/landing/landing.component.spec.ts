import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingComponent } from './landing.component';

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have welcome message', () => {
    expect(component.title).toBeDefined();
    expect(component.title).toContain('FuckAds');
  });

  it('should have description text', () => {
    expect(component.description).toBeDefined();
    expect(component.description.length).toBeGreaterThan(0);
  });

  it('should have steps array', () => {
    expect(component.steps).toBeDefined();
    expect(component.steps.length).toBeGreaterThan(0);
  });

  it('should have correct number of steps', () => {
    expect(component.steps.length).toBe(3);
  });

  it('should have step titles', () => {
    expect(component.steps[0]).toHaveProperty('title');
    expect(component.steps[1]).toHaveProperty('title');
    expect(component.steps[2]).toHaveProperty('title');
  });

  it('should have step descriptions', () => {
    expect(component.steps[0]).toHaveProperty('description');
    expect(component.steps[1]).toHaveProperty('description');
    expect(component.steps[2]).toHaveProperty('description');
  });
});
