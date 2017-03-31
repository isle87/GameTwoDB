import { Game } from '../../classes/game';
import { GameService } from '../../service/game.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  providers: [GameService]
})
export class GridComponent implements OnInit {
  games : Game[];

  constructor(private gameService : GameService) {  }

  ngOnInit() {
    this.getGames();
  }

  getGames() : void {
    this.gameService.getGames().then(game => this.games = game);
  }

  reveredGames() : Game[] {
    return this.games.reverse();
  }
}
