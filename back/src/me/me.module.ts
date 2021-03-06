import { Module } from '@nestjs/common';
import { MeService } from './me.service';
import { MeController } from './me.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Me, MeSchema } from './entities/me.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Me.name, schema: MeSchema }])],
  controllers: [MeController],
  providers: [MeService],
})
export class MeModule {}
