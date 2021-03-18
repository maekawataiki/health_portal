import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeStorage {
  private static themeKey = 'theme-storage-current-theme';
  private static darkKey = 'theme-storage-current-dark';

  constructor() { }

  storeTheme(theme: string) {
    try {
      window.localStorage[ThemeStorage.themeKey] = theme;
    } catch {
    }
  }

  getStoredThemeName(): string {
    try {
      return window.localStorage[ThemeStorage.themeKey] || "mono-theme";
    } catch {
      return null;
    }
  }

  storeDark(dark: string) {
    try {
      window.localStorage[ThemeStorage.darkKey] = dark;
    } catch {
    }
  }

  getStoredDark(): string {
    try {
      var dark = window.localStorage[ThemeStorage.darkKey];
      if (dark === undefined) dark = "";
      return dark;
    } catch {
      return null;
    }
  }

  clearCache() {
    try {
      window.localStorage.removeItem(ThemeStorage.themeKey);
      window.localStorage.removeItem(ThemeStorage.darkKey);
    } catch {
      return null;
    }
  }
}
