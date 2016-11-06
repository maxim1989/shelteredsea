import {User} from 'app/user/model';
import {Game} from 'app/game_dispute/game/model';

export class Order {
    id: number;

    games_count: number;
    team_size: number;

    is_active: boolean;
    is_winner: boolean;
    in_negotiations: boolean;

    rate: number;
    rate_left: number;
    rate_right: number;

    game: Game;
    user: User;
}
