import { Component, OnInit, OnDestroy } from '@angular/core';
import { Setting } from 'src/app/shared/types/setting.model';
import { Subscription } from 'rxjs';
import { SettingService } from 'src/app/shared/services/setting.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  setting: Setting;
  private settingSub: Subscription;

  constructor(private settingService: SettingService) { }

  ngOnInit() {
    this.settingService.getSetting();
    this.settingSub = this.settingService
      .getSettingUpdateListener().subscribe((data: { setting: Setting }) => {
        this.setting = data.setting;
      })
  }

  ngOnDestroy() {
    this.settingSub.unsubscribe();
  }

}
