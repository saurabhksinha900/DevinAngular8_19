import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly STORAGE_KEY = 'app-theme';
  private themeSubject: BehaviorSubject<Theme>;

  theme$ = this.getThemeSubject().asObservable();

  get currentTheme(): Theme {
    return this.getThemeSubject().value;
  }

  toggleTheme(): void {
    const next: Theme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(next);
  }

  setTheme(theme: Theme): void {
    this.getThemeSubject().next(theme);
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(this.STORAGE_KEY, theme);
    } catch (_) {}
  }

  private getThemeSubject(): BehaviorSubject<Theme> {
    if (!this.themeSubject) {
      let stored: Theme = 'light';
      try {
        const val = localStorage.getItem(this.STORAGE_KEY);
        if (val === 'dark' || val === 'light') {
          stored = val;
        }
      } catch (_) {}
      this.themeSubject = new BehaviorSubject<Theme>(stored);
      document.documentElement.setAttribute('data-theme', stored);
    }
    return this.themeSubject;
  }
}
