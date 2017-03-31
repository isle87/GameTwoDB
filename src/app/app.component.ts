import { Component } from '@angular/core'
import { SearchComponent } from './components/search/search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Game';
  subTitle = 'Two';
  gearImage : string = '../assets/img/ic_gear.svg';
}
