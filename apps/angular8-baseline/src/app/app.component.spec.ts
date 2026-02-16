import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          { path: 'dashboard', component: AppComponent },
          { path: '**', redirectTo: 'dashboard' }
        ])
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular8-baseline'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular8-baseline');
  });

  it('should render title in header', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.app-title').textContent).toContain('Angular 8 Baseline');
  });

  it('should redirect unknown routes to /dashboard (edge test – hop v8→v9)', fakeAsync(() => {
    const router = TestBed.get(Router);
    const location = TestBed.get(Location);
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    router.navigateByUrl('/nonexistent-route');
    tick();
    expect(location.path()).toBe('/dashboard');
  }));

  it('should have a non-empty title that is a string (edge test – hop v11→v12)', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(typeof app.title).toBe('string');
    expect(app.title.length).toBeGreaterThan(0);
  });

  it('should render navigation links in the app nav (edge test – hop v15→v16)', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const navLinks = compiled.querySelectorAll('.app-nav a');
    expect(navLinks.length).toBeGreaterThan(0);
  });
});
