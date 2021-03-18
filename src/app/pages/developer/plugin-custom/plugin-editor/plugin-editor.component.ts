import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PluginService } from '../../../../shared/services/plugin.service';
import { Plugin, Script } from 'src/app/shared/types/plugin.model';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'app-plugin-editor',
  templateUrl: './plugin-editor.component.html',
  styleUrls: ['./plugin-editor.component.scss']
})
export class PluginEditorComponent implements OnInit {
  explorerStyle: object = { width: '150px' };
  resultStyle: object = { width: '400px' };

  plugin: Plugin;
  tabs: Script[] = [];
  selected: Script;

  constructor(private pluginService: PluginService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pluginService.getCustomPlugin(params['id'])
        .toPromise().then(plugin => {
          this.plugin = plugin;
          this.setScript(this.plugin.scripts[0]);
        })
    })
  }

  setScript(script: Script) {
    if (!this.tabs.find(tab => tab.name === script.name)) {
      this.tabs.push(script);
    }
    this.selected = script;
  }

  save() {
    this.pluginService.updateCustomPlugin(this.plugin);
  }

  publish() {

  }

  onResizeEnd(event: ResizeEvent, style: any): void {
    style.width = `${event.rectangle.right - event.rectangle.left}px`;
    setTimeout(() => window.dispatchEvent(new Event('resize')), 10);
  }

}
