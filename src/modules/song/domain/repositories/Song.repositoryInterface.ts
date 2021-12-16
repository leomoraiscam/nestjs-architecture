import { Song } from "../entity/Song.entity";

export interface SongRepositoryInterface {
  getSongLyric(artist: string, title: string): Promise<Song>;
}
