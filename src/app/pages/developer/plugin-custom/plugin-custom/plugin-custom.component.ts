import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material';
import { AuthService } from '../../../auth/auth.service';
import { PluginService } from '../../../../shared/services/plugin.service';
import { Plugin } from 'src/app/shared/types/plugin.model';

@Component({
  selector: 'app-plugin-custom',
  templateUrl: './plugin-custom.component.html',
  styleUrls: ['./plugin-custom.component.scss']
})
export class PluginCustomComponent implements OnInit, OnDestroy {
  plugins: Plugin[] = [];
  isLoading = false;
  totalPlugins = 0;
  pluginsPerPage = 5;
  currentPage = 1;
  pageSizeOptions = [1, 2, 5, 10];
  userIsAuthenticated = false;
  userId: string;
  private pluginsSub: Subscription;
  private authStatusSub: Subscription;

  constructor(private pluginService: PluginService,
    private authService: AuthService) { }

  ngOnInit() {
    this.isLoading = true;
    this.pluginService.getCustomPlugins(this.pluginsPerPage, this.currentPage);
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
  }

  onChangedPage(pageData: PageEvent) {
    this.isLoading = true;
    this.currentPage = pageData.pageIndex + 1;
    this.pluginsPerPage = pageData.pageSize;
    this.pluginService.getCustomPlugins(this.pluginsPerPage, this.currentPage);
  }

  ngOnDestroy() {
    this.pluginsSub.unsubscribe();
  }


}
