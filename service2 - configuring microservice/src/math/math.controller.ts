import { Controller, Post, Body, Logger } from '@nestjs/common';
import { MathService } from './math.service';
import { MessagePattern } from '@nestjs/microservices'

@Controller('math')
export class MathController {
    private logger = new Logger('MathController');
    constructor(private mathService: MathService){}

    // Define the message pattern for this method
    // @Post('add')
    @MessagePattern('add')
    async accumulate(data: number[]) {
        console.log('dataa ==>>>>>> ', data);
        
        // this.logger.log('Adding ' + data.toString()); // log something on any call
        return this.mathService.accumulate(data) // use math service to calc result & return
    }
}
