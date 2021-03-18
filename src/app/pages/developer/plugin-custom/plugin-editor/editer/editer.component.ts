import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ThemeService } from 'src/app/core/theme/theme.service';
import { Script } from 'src/app/shared/types/plugin.model';

@Component({
  selector: 'app-editer',
  templateUrl: './editer.component.html',
  styleUrls: ['./editer.component.scss']
})
export class EditerComponent implements OnInit {
  @Input() tabs: Script[];
  @Output() tabsChange = new EventEmitter<Script[]>();
  @Input() selected: Script;
  @Output() selectedChange = new EventEmitter<Script>();

  editorOptions = {
    theme: 'vs',
    language: 'json',
    minimap: {
      enabled: false
    }
  };

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.setEditorTheme(this.themeService.getTheme());
    this.themeService.getThemeListener()
      .subscribe(theme => {
        this.setEditorTheme(theme)
      })
  }

  setEditorTheme(theme: any) {
    this.editorOptions.theme = theme.dark ? 'vs-dark' : 'vs';
    this.editorOptions = { ...this.editorOptions };
  }

  setScript(script: Script) {
    this.selected = script;
    this.selectedChange.emit(this.selected);
  }

  closeTab(i: number) {
    if (this.tabs[i].name === this.selected.name) {
      let nextTabIndex: number = (i + 1 === this.tabs.length) ? i - 1 : i + 1;
      let script: Script = nextTabIndex < 0 ? null : this.tabs[nextTabIndex];
      this.setScript(script);
    }
    this.tabs.splice(i, 1);
    this.tabsChange.emit(this.tabs);
  }

}
