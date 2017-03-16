import { Component, OnInit } from '@angular/core';
import { ConvertService } from '../@services/convert.service';

@Component({
  selector: 'parser',
  templateUrl: './parser.component.html',
  styleUrls: ['./parser.component.css']
})
export class ParserComponent implements OnInit {

  public convertedString: string;

  constructor(private convertService: ConvertService) {

  }

  public ngOnInit(): void {
    console.log('parser component is inited');
  }

  public onTextChanged(text: string) {
    let obj = this.convertService.toObject(text, null);
    console.debug('text changed', text, obj);
    if (obj) {
      this.convertedString = JSON.stringify(obj, null, 2);
    }
  }
}
