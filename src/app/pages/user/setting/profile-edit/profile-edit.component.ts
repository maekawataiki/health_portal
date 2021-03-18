import { Component, OnInit, OnDestroy } from '@angular/core';
import { Setting } from 'src/app/shared/types/setting.model';
import { Subscription } from 'rxjs';
import { SettingService } from 'src/app/shared/services/setting.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit, OnDestroy {
  setting: Setting;
  private settingSub: Subscription;

  constructor(private settingService: SettingService,
    private router: Router,
    private route: ActivatedRoute) { }

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

  save() {
    this.settingService.updateSetting(this.setting)
      .subscribe(res => {
        this.router.navigate([".."], { relativeTo: this.route });
      })
  }

}
