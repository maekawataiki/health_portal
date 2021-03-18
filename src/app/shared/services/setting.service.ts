import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Setting } from 'src/app/shared/types/setting.model';
import { AuthService } from 'src/app/pages/auth/auth.service';

const BACKEND_URL = environment.apiUrl + '/setting/';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
  private setting: Setting;
  private settingUpdated = new Subject<{ setting: Setting }>();

  constructor(private authService: AuthService, private http: HttpClient) { }

  getSettingUpdateListener() {
    return this.settingUpdated.asObservable();
  }

  getSetting() {
    return this.http.get<Setting>(BACKEND_URL).subscribe(setting => {
      this.setting = setting;
      this.settingUpdated.next({ setting: this.setting });
    });
  }

  updateSetting(setting: Setting) {
    return this.http.put(BACKEND_URL, setting);
  }
}
