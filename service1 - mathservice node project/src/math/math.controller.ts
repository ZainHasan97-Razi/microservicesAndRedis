import { Controller, Post, Body, Logger } from '@nestjs/common';
import { MathService } from './math.service';

@Controller('math')
export class MathController {
    private logger = new Logger('MathController');
    constructor(private mathService: MathService){}

    @Post('add')
    async accumulate(@Body('data') data: number[]) {
        console.log('dataa ==>>>>>> ', data);
        
        // this.logger.log('Adding ' + data.toString()); // log something on any call
        return this.mathService.accumulate(data) // use math service to calc result & return
    }
}
