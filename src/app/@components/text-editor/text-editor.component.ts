import { AfterViewInit, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TextEditorMode } from './text-editor.model';
import * as _ from 'lodash';

declare const ace: any;

@Component({
  selector: 'text-editor',
  template: `
    <div [id]="aceId" class="editor"></div>
  `,
  styles: [`
    .editor {
      flex-grow: 1;
    }
  `]
})
export class TextEditorComponent implements AfterViewInit, OnChanges {

  @Input() public aceId;
  @Input() public mode = TextEditorMode.YAML; // defaults to YAML
  @Input() public text: string;

  private editor: any;
  private session: any;

  public ngAfterViewInit(): void {
    this.editor = ace.edit(this.aceId);
    this.editor.setTheme('ace/theme/github');
    this.session = this.editor.getSession();
    this.setMode(this.mode);

    if (this.text) {
      this.setText(this.text);
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
    let mode = changes['mode'];
    if (mode) {
      this.setMode(this.mode);
    }

    let text = changes['text'];
    if (text) {
      this.setText(this.text);
    }
  }

  public getValue(): string {
    if (this.editor) {
      return this.editor.getValue();
    }
  }

  public setValue(text: string) {
    if (this.editor) {
      this.editor.setValue(text || '', 1);
    }
  }

  private setMode(mode: TextEditorMode) {
    mode = mode || TextEditorMode.YAML;
    this.editor.getSession().setMode(`ace/mode/${_.toLower(mode + '')}`);
  }

  private setText(text: string) {
    let currentValue = this.getValue();
    // TODO: compare text with current value
    this.setValue(text);
  }

}
