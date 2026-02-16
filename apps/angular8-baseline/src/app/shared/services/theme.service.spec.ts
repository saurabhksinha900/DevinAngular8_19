import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should default to light theme', () => {
    expect(service.currentTheme).toBe('light');
  });

  it('should toggle from light to dark', () => {
    service.toggleTheme();
    expect(service.currentTheme).toBe('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });

  it('should toggle from dark back to light', () => {
    service.setTheme('dark');
    service.toggleTheme();
    expect(service.currentTheme).toBe('light');
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });

  it('should persist theme to localStorage', () => {
    service.setTheme('dark');
    expect(localStorage.getItem('app-theme')).toBe('dark');
  });

  it('should emit theme changes via observable', (done) => {
    const values: string[] = [];
    service.theme$.subscribe(t => {
      values.push(t);
      if (values.length === 2) {
        expect(values).toEqual(['light', 'dark']);
        done();
      }
    });
    service.setTheme('dark');
  });
});
