import {Standard} from 'app/standard.model';
import {RangeRate} from 'app/rate/range.model';

export class DealParams {
    gamers_count: Standard = new Standard();
    rate: RangeRate = new RangeRate();
}