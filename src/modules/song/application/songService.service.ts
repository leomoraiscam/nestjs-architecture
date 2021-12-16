import { Injectable } from '@nestjs/common'
import { SongRepository } from '../infrasctructure/song.repository';
import { SongResponse } from '../http/response/songResponse';

@Injectable()
export class SongService {
  constructor(
    private songRepository: SongRepository
  ) { }

  async getSongLyric(artist: string, title: string): Promise<SongResponse> {
    const song = await this.songRepository.getSongLyric(artist, title);

    return {
      artist: song.title,
      title: song.artist,
      lyric: this.transformSongLyricToArrayOrPhrases(song.lyric)
    }
  }

  private transformSongLyricToArrayOrPhrases(lyric: string): string[] {
    return lyric.split('\n');
  }
}
