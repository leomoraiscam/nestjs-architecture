import { Module } from '@nestjs/common'
import { SongController } from './http/controller/song.controller'
import { SongService } from './application/songService.service'
import { SongRepository } from './infrasctructure/song.repository'

@Module({
  controllers: [SongController],
  providers: [SongService, SongRepository]
})

export class SongModule { }
