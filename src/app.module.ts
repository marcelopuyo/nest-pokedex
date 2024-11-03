import { join } from 'path';

import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';

import { PokemonModule } from './pokemon/pokemon.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
    
    //sirve archivos estaticos --> ej. paginas web (vanilla, react, angular, etc)
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),

    //conecta base de datos MongoDB
    MongooseModule.forRoot('mongodb://localhost:27017/nest-pokemon'),

    //modulos de la aplicacion
    PokemonModule,

    CommonModule,

    SeedModule,
  ],
})
export class AppModule {}
