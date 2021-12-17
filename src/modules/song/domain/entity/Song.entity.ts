export class Song {
  title: string;

  artist: string;

  lyric: string;

  constructor(artist: string, title: string, lyric: string) {
    this.title = title;
    this.artist = artist;
    this.lyric = lyric;
  }
}
