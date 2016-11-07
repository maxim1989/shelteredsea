import {Standard} from "../standard.model";
import {Order} from 'app/deal/order/model';

export class TempDeal{
    id: number;
    is_active: boolean;
    chat: Standard;
    orders: Order[];
}
