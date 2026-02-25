import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ExplainationComponent } from './explaination.component';

describe('ExplainationComponent', () => {
  let component: ExplainationComponent;
  let fixture: ComponentFixture<ExplainationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExplainationComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplainationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title', () => {
    expect(component.title).toBeDefined();
    expect(component.title.length).toBeGreaterThan(0);
  });

  it('should have explanation text', () => {
    expect(component.explanation).toBeDefined();
    expect(component.explanation.length).toBeGreaterThan(0);
  });

  it('should have why section', () => {
    expect(component.why).toBeDefined();
    expect(component.why.length).toBeGreaterThan(0);
  });

  it('should have how section', () => {
    expect(component.how).toBeDefined();
    expect(component.how.length).toBeGreaterThan(0);
  });
});
