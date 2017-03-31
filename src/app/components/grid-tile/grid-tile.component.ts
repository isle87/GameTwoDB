import { Game } from '../../classes/game';
import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-grid-tile',
  templateUrl: './grid-tile.component.html',
  styleUrls: ['./grid-tile.component.css']
})
export class GridTileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() game: Game;

}
