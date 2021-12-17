import { Module } from '@nestjs/common'
import { SongController } from './http/controller/song.controller'
import { SongService } from './application/song.service'
import { SongRepository } from './infrasctructure/song.repository'
import { SongPresentation } from './presentation/song.presentation'

@Module({
  controllers: [SongController],
  providers: [SongPresentation, SongService, SongRepository],
  exports: [SongPresentation]
})

export class SongModule { }
