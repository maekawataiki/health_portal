import { Injectable } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ThemeStorage } from './theme-storage.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public currentTheme: string = "mono-theme";
  public currentDark: string = "";
  private themeListener = new Subject<{ theme: string, dark: string }>();

  public options: any = [
    { name: 'icicle-theme', label: 'Icicle', primary: '#90caf9' },
    { name: 'green-theme', label: 'Green', primary: '#a5d6a7' },
    { name: 'orange-theme', label: 'Orange', primary: '#ffcc80' },
    { name: 'mono-theme', label: 'Mono', primary: '#F5F5F5' }
  ]

  constructor(
    private themeStorage: ThemeStorage,
    private overlayContainer: OverlayContainer) {
  }

  initTheme() {
    this.setTheme(this.themeStorage.getStoredThemeName());
    this.setDark(this.themeStorage.getStoredDark());
  }

  toggleDark(){
    this.setDark(this.currentDark ? "" : "dark");
    this.notify();
  }

  setTheme(theme: string): void {
    this.setOverlayTheme(this.currentTheme, theme);
    this.themeStorage.storeTheme(theme);
    this.currentTheme = theme;
    this.notify();
  }

  setDark(dark: string): void {
    this.setOverlayDark(this.currentDark, dark);
    this.themeStorage.storeDark(dark);
    this.currentDark = dark;
    this.notify();
  }

  getTheme(){
    return { theme: this.currentTheme, dark: this.currentDark };
  }

  getThemeListener(){
    return this.themeListener.asObservable();
  }

  private setOverlayTheme(oldToken: string, newToken: string): void {
    if (oldToken) {
      this.overlayContainer.getContainerElement().classList.remove(oldToken);
    }
    if (newToken) {
      this.overlayContainer.getContainerElement().classList.add(newToken);
    }
  }

  private setOverlayDark(oldToken: string, newToken: string): void {
    if (oldToken && !newToken) {
      this.overlayContainer.getContainerElement().classList.remove("dark");
    } else if (!oldToken && newToken) {
      this.overlayContainer.getContainerElement().classList.add("dark");
    }
  }

  private clearCache(){
    this.themeStorage.clearCache();
  }

  private notify(){
    this.themeListener.next(this.getTheme());
  }
  
}
