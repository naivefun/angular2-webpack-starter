import { Injectable } from '@angular/core';
import * as HJson from 'hjson';
import { TextEditorMode } from '../@components/text-editor/text-editor.model';

declare let jsyaml: any;

@Injectable()
export class ConvertService {

  public toObject(text: string, mode: TextEditorMode) {
    switch (mode) {
      default:
        return this.parseYamlString(text);
    }
  }

  private parseYamlString(text: string) {
    try {
      let obj = jsyaml.safeLoad(text);
      return obj;
    } catch (err) {
      return null;
    }
  }
}
