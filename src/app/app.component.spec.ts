import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have title', () => {
    expect(component.title).toBe('"Why Targeted Ads?"');
  });

  it('should initialize newSession to false', () => {
    expect(component.newSession).toBe(false);
  });

  it('should initialize initialLanding to true', () => {
    expect(component.initialLanding).toBe(true);
  });

  it('should set newSession to true after 2000ms', (done) => {
    expect(component.newSession).toBe(false);
    setTimeout(() => {
      expect(component.newSession).toBe(true);
      done();
    }, 2500);
  });

  it('doSomething should set initialLanding to false', () => {
    component.doSomething(null);
    expect(component.initialLanding).toBe(false);
  });
});
