import { Injectable } from '@angular/core';

import { Game } from '../classes/game';
import { GAMES } from '../mock-Games';

@Injectable()
export class GameService {
    getGames() : Promise<Game[]> {
        return Promise.resolve(GAMES);
    }

    getGame(id : number) : Promise<Game> {
        return this.getGames().then(games => games.find(game => game.id === id));
    }
}