import { Component, OnInit } from '@angular/core';
import { PluginService } from '../../../../shared/services/plugin.service';
import { ActivatedRoute } from '@angular/router';
import { Plugin } from 'src/app/shared/types/plugin.model';

@Component({
  selector: 'app-plugin-custom-detail',
  templateUrl: './plugin-custom-detail.component.html',
  styleUrls: ['./plugin-custom-detail.component.scss']
})
export class PluginCustomDetailComponent implements OnInit {
  plugin: Plugin;

  constructor(private pluginService: PluginService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pluginService.getCustomPlugin(params['id'])
        .toPromise().then(plugin => {
          this.plugin = plugin;
          this.plugin.version = "1.0";
          // this.plugin.rating = 3;
          this.plugin.doc = "aaa\naaa\naaa\n"
          this.plugin.reviews = [
            { title: 'aaa', author: 'uuua', rating: 5, content: 'content' },
            { title: 'bbb', author: 'rerere', rating: 3.5, content: 'content' }
          ]
        })
    })
  }

}
