import { Injectable } from '@nestjs/common';
import { SongService } from '../application/song.service';
import { SongResponse } from '../http/response/songResponse'

@Injectable()
export class SongPresentation {
  constructor(
    private songService: SongService
  ) { }

  async getLyric(artist: string, title: string): Promise<SongResponse> {
    return await this.songService.getSongLyric(artist, title)
  }
}
