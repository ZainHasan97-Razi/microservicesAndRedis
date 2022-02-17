import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { MathModule } from './math/math.module';

@Module({
  imports: [MathModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
