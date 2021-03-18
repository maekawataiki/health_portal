import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Plugin } from 'src/app/shared/types/plugin.model';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../pages/auth/auth.service';
import { MatSnackBar } from '@angular/material';

const BACKEND_URL = environment.apiUrl + '/plugin/';

@Injectable({
  providedIn: 'root'
})
export class PluginService {
  private plugins: Plugin[] = [];
  private pluginsUpdated = new Subject<{ plugins: Plugin[]; pluginCount: number }>();

  constructor(private auth: AuthService,
    private http: HttpClient,
    private router: Router,
    private _snackBar: MatSnackBar) { }

  getPlugins(pluginsPerPage: number, currentPage: number, keyword: string) {
    var queryParams = `?pagesize=${pluginsPerPage}&page=${currentPage}`;
    if (keyword) queryParams += `&keyword=${keyword}`;
    return this.http.get<{ message: string; plugins: any; maxPlugins: number }>(
      BACKEND_URL + 'public/' + queryParams
    ).pipe(map(pluginData => {
      return {
        plugins: pluginData.plugins,
        maxPlugins: pluginData.maxPlugins
      };
    })).subscribe(transformedPluginData => {
      this.plugins = transformedPluginData.plugins;
      this.pluginsUpdated.next({
        plugins: [...this.plugins],
        pluginCount: transformedPluginData.maxPlugins
      });
    });
  }

  getCustomPlugins(pluginsPerPage: number, currentPage: number) {
    var queryParams = `?pagesize=${pluginsPerPage}&page=${currentPage}`;
    return this.http.get<{ message: string; customPlugins: any; maxCustomPlugins: number }>(
      BACKEND_URL + 'custom/' + queryParams
    ).pipe(map(pluginData => {
      return {
        plugins: pluginData.customPlugins,
        maxPlugins: pluginData.maxCustomPlugins
      };
    })).subscribe(transformedPluginData => {
      this.plugins = transformedPluginData.plugins;
      this.pluginsUpdated.next({
        plugins: [...this.plugins],
        pluginCount: transformedPluginData.maxPlugins
      });
    });
  }

  getPluginUpdateListener() {
    return this.pluginsUpdated.asObservable();
  }

  getPlugin(unique_id: string) {
    return this.http.get<Plugin>(BACKEND_URL + 'public/' + unique_id);
  }

  getCustomPlugin(_id: string) {
    return this.http.get<Plugin>(BACKEND_URL + 'custom/' + _id);
  }

  addCustomPlugin(plugin: Plugin) {
    return this.http.post<Plugin>(
      BACKEND_URL + 'custom/',
      plugin
    )
  }

  updateCustomPlugin(plugin: Plugin) {
    this.http
      .put<Plugin>(BACKEND_URL + 'custom/' + plugin._id, plugin)
      .subscribe(response => {
        this.openSnackBar("Saved!", "OK");
      });
  }

  deleteCustomPlugin(pluginId: string) {
    return this.http.delete(BACKEND_URL + pluginId);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
