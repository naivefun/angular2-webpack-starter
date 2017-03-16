import { inject, TestBed } from '@angular/core/testing';
import { ParserComponent } from './parser.component';

describe('Parser', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ParserComponent]
  }));

  it('should log ngOnInit', inject([ParserComponent], (parser: ParserComponent) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();
    parser.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));
});
