import { Song } from '../domain/entity/Song.entity';
import { SongResponse } from '../http/response/songResponse';
import { SongRepository } from '../infrasctructure/song.repository';
import { SongService } from './song.service';
import * as faker from 'faker';

let songRepository: SongRepository;
let songService: SongService;

describe('application - song service', () => {
  beforeEach(() => {
    songRepository = new SongRepository();
    songService = new SongService(songRepository);
  });

  it('should be able get artist lyric and return lyric as an array of string', async () => {
    const artist = 'blink';
    const title = 'hello';

    const songEntityMock = new Song(
      artist,
      title,
      faker.lorem.paragraphs()
    );

    const expectReturn = {
      ...songEntityMock,
      lyric: songEntityMock.lyric.split('\n')
    };

    songRepository.getSongLyric = jest.fn().mockResolvedValue(songEntityMock);

    const returned = await songService.getSongLyric(artist, title);

    expect(returned).toEqual(expectReturn);
  })
})
