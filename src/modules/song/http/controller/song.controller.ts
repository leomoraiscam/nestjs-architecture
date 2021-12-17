import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common'
import { SongService } from '../../application/song.service';
import { Response } from 'express';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { SongResponse } from '../response/songResponse';

@Controller('v1/song')
export class SongController {
  constructor(private readonly songService: SongService) { }

  @Get()
  @ApiOperation({
    summary: 'Recupera a letra de uma música dado um artista e o título da música deste artista'
  })
  @ApiOkResponse({ type: SongResponse })
  async getSongLyric(
    @Query('artist') artist: string,
    @Query('title') title: string,
    @Res() res: Response
  ) {
    console.log('artist', artist)
    console.log('title', title)

    const lyric = await this.songService.getSongLyric(artist, title);

    res.status(HttpStatus.OK).send(lyric);
  }
}
