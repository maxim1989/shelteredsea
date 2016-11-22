import { Deal } from 'app/account/deals/deal.model'
import { Game } from 'app/account/deals/game.model'


export class Order {
    is_active: boolean;
    is_winner: boolean;
    deal: Deal;
    game: Game;
}
