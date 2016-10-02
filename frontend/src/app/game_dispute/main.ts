import {Component, OnInit} from '@angular/core';
import { Game } from 'app/game_dispute/game/model';
import { GameService } from 'app/game_dispute/game/service';

@Component({
    selector: 'pfg',
    templateUrl: './main.html',
    providers: [GameService]
})
export class GameDispute implements OnInit{
    gameList: Game[];

    constructor(
        private GameService: GameService
    ) {}

    ngOnInit() {
        this.loadGames();
    }

    loadGames() {
        this.GameService.getGames()
            .then(
                (games: Game[]) => {
                    this.gameList = games;
                }
            )
    }

    changeGame(game_namespace: string){
        console.log(game_namespace);
    }
}
