import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { Game } from 'app/game_dispute/game/model';
import { GameService } from 'app/game_dispute/game/service';

@Component({
    selector: 'pfg',
    templateUrl: './main.html',
    providers: [GameService]
})
export class GameDisputeComponent implements OnInit{
    gameList: Game[];

    constructor(
        private GameService: GameService,
        private router: Router
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
            .catch(
                () => {
                    this.redirectToMainPage();
                }
            )
    }

    changeGame(game_namespace: string){
        let link = ['/pfg', game_namespace, 'dispute'];
        this.router.navigate(link);
    }

    redirectToMainPage() {
        this.router.navigate(['/']);
    }
}
