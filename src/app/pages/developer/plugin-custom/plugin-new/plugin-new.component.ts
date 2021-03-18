import { Component, OnInit } from '@angular/core';
import { PluginService } from '../../../../shared/services/plugin.service';
import { Plugin } from 'src/app/shared/types/plugin.model';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plugin-new',
  templateUrl: './plugin-new.component.html',
  styleUrls: ['./plugin-new.component.scss']
})
export class PluginNewComponent implements OnInit {
  isLoading: boolean = false;

  food: boolean = false;
  activity: boolean = false;
  sleep: boolean = false;

  constructor(private pluginService: PluginService,
    private _location: Location,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;

    let plugin: Plugin = { scripts: [] };
    if (this.food) {
      plugin.scripts.push({ name: 'food.json', code: '{"PROT": { "min": "{{ user.weight }} * 1.5", "max": 150 }}' });
    }
    if (this.activity) {
      plugin.scripts.push({ name: 'activity.json', code: '{"WEIGHT": { "min": 0, "max": 2 }}' });
    }
    if (this.sleep) {
      plugin.scripts.push({ name: 'sleep.json', code: '{"REM": { "min": 1, "max": 4 }}' });
    }

    this.pluginService.addCustomPlugin(plugin).subscribe(responseData => {
      // console.log(responseData);
      this.router.navigate(['/developer/plugin/edit', responseData._id]);
    });
  }

  onCancel() {
    this._location.back();
  }

}
