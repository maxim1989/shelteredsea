import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'rate'
})
export class RatePipe implements PipeTransform {
    transform(rate: number): string {
        let rateOutput = String(rate / 100);
        rateOutput = rateOutput.replace(".", ",");
        return rateOutput.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
    }
}