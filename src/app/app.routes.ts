import { Routes } from '@angular/router';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { ParserComponent } from './+parser/parser.component';

export const ROUTES: Routes = [
  { path: '', component: ParserComponent },
  { path: 'parser', component: ParserComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NoContentComponent },
];
