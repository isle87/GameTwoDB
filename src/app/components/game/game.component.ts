import { GameService } from '../../service/game.service';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Game } from '../../classes/game';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  game : Game;
  link : string;

  constructor(
    private route : ActivatedRoute,
    private gameService : GameService,
    private location : Location,
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.gameService.getGame(+params['id']))
      .subscribe(game => this.game = game);
  }

  getLink() : string {
    const url = 'https://www.youtube.com/embed/' + this.game.link 
                + '?start=' + this.game.start;
    return url;
  }

}
