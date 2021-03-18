import { Component, OnInit } from '@angular/core';
import { PluginService } from '../../../services/plugin.service';
import { Plugin } from 'src/app/shared/types/plugin.model';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material';
import { AuthService } from '../../../../pages/auth/auth.service';
import { FormControl } from '@angular/forms';
import { debounceTime, tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-plugin',
  templateUrl: './plugin.component.html',
  styleUrls: ['./plugin.component.scss']
})
export class PluginComponent implements OnInit {
  plugins: Plugin[] = [];
  isLoading = false;
  totalPlugins = 0;
  pluginsPerPage = 5;
  currentPage = 1;
  pageSizeOptions = [1, 2, 5, 10];
  userIsAuthenticated = false;
  userId: string;
  searchCtrl = new FormControl();
  private pluginsSub: Subscription;
  private authStatusSub: Subscription;

  constructor(private pluginService: PluginService,
    private authService: AuthService) { }

  ngOnInit() {
    this.isLoading = true;
    this.pluginService.getPlugins(this.pluginsPerPage, this.currentPage, "");
    this.pluginsSub = this.pluginService
      .getPluginUpdateListener()
      .subscribe((pluginData: { plugins: Plugin[]; pluginCount: number }) => {
        this.isLoading = false;
        this.totalPlugins = pluginData.pluginCount;
        this.plugins = pluginData.plugins;
      });
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
        this.userId = this.authService.getUserId();
      });
    this.searchCtrl.valueChanges
      .pipe(
        debounceTime(300),
        tap(() => this.isLoading = true)
      ).subscribe(keyword => this.pluginService.getPlugins(0, 0, keyword));
  }

  onChangedPage(pageData: PageEvent) {
    this.isLoading = true;
    this.currentPage = pageData.pageIndex + 1;
    this.pluginsPerPage = pageData.pageSize;
    this.pluginService.getPlugins(this.pluginsPerPage, this.currentPage, "");
  }

  ngOnDestroy() {
    this.pluginsSub.unsubscribe();
  }

}
