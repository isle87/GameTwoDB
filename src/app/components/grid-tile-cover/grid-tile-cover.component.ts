import { Game } from '../../classes/game';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid-tile-cover',
  templateUrl: './grid-tile-cover.component.html',
  styleUrls: ['./grid-tile-cover.component.css']
})
export class GridTileCoverComponent implements OnInit {
  selected = false;
  constructor() { }

  ngOnInit() {
  }
@Input() game: Game;
}
