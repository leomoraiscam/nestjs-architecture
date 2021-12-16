import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common'
import { SongService } from '../../application/songService.service';
import { Response } from 'express';

@Controller('v1/song')
export class SongController {
  constructor(private readonly songService: SongService) { }

  @Get()
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
