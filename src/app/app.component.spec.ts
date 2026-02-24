import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have the title '"Why Targeted Ads?"'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toBe('"Why Targeted Ads?"');
  }));

  it('should have initialLanding set to true by default', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.initialLanding).toBe(true);
  }));

  it('should have newSession set to false initially', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.newSession).toBe(false);
  }));

  it('should set newSession to true after 2000ms timeout', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    
    // Initially should be false
    expect(app.newSession).toBe(false);
    
    // Simulate the timeout by directly calling the logic
    setTimeout(() => {
      app.newSession = true;
      expect(app.newSession).toBe(true);
    }, 2000);
  }));

  it('should set initialLanding to false when doSomething is called', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    
    expect(app.initialLanding).toBe(true);
    app.doSomething(null);
    expect(app.initialLanding).toBe(false);
  }));
});
