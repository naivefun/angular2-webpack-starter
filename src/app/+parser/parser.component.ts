import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parser',
  templateUrl: './parser.component.html',
  styleUrls: ['./parser.component.css']
})
export class ParserComponent implements OnInit {

  public ngOnInit(): void {
    console.log('parser component is inited');
  }

}
