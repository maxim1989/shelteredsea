import {User} from 'app/user/model';
import {Game} from 'app/game_dispute/game/model';

export class Order {
    id: number;

    games_count: number;
    team_size: number;

    is_active: boolean;
    is_winner: boolean;
    in_negotiations: boolean;

    integer_part_from: number;
    fractional_part_from: number;
    integer_part_to: number;
    fractional_part_to: number;

    game: Game;
    user: User;
}
