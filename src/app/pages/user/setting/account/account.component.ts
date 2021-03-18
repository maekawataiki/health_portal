import { Component, OnInit, OnDestroy } from '@angular/core';
import { Setting } from 'src/app/shared/types/setting.model';
import { SettingService } from 'src/app/shared/services/setting.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit, OnDestroy {
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
