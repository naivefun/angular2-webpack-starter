import { AfterViewInit, Component, Input } from '@angular/core';

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
export class TextEditorComponent implements AfterViewInit {

  @Input() public aceId;

  private editor: any;

  public  ngAfterViewInit(): void {
    this.editor = ace.edit(this.aceId);
    this.editor.setTheme('ace/theme/github');
    this.editor.getSession().setMode('ace/mode/javascript');
  }

}
