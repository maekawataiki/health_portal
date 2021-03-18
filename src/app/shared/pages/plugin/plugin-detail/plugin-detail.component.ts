import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PluginService } from '../../../services/plugin.service';
import { Plugin } from 'src/app/shared/types/plugin.model';
import { AuthService } from '../../../../pages/auth/auth.service';

@Component({
  selector: 'app-plugin-detail',
  templateUrl: './plugin-detail.component.html',
  styleUrls: ['./plugin-detail.component.scss']
})
export class PluginDetailComponent implements OnInit {
  plugin: Plugin;

  constructor(private pluginService: PluginService,
    private authService: AuthService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pluginService.getPlugin(params['id'])
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
