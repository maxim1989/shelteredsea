import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'time'
})
export class TimePipe implements PipeTransform {
    transform(all_seconds: number): string {
        let seconds = TimePipe.leftPad(all_seconds % 60);
        let temp = Math.floor(all_seconds / 60);
        let minutes = TimePipe.leftPad(temp % 60);
        let hours = TimePipe.leftPad(Math.floor(temp / 60));
        return hours + ":" + minutes + ":" + seconds;
    }

    static leftPad(value: number){
        let result = String( value );
        return (result.length < 2) ? "0" + result : result;
    }
}