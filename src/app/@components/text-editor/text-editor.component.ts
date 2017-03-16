import { Component, Input } from '@angular/core';

@Component({
  selector: 'text-editor',
  template: `
    <textarea class="form-control" [placeholder]="placeholder"></textarea>
  `,
  styles: [`
  textarea { flex-grow: 1; }
  `]
})
export class TextEditorComponent {
  @Input() public placeholder;
}
