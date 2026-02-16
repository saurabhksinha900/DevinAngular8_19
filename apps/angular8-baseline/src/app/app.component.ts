import { Component } from '@angular/core';
import { ThemeService, Theme } from './shared/services/theme.service';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular8-baseline';

  constructor(private themeService: ThemeService) {}

  get isDark(): boolean {
    return this.themeService.currentTheme === 'dark';
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
