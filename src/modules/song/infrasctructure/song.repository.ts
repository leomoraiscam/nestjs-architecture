import axios, { AxiosInstance } from 'axios';
import { AXIOS_TIMEOUT, FIRST_POSITION, VAGALUME_API_URL } from '../../../core/constants';
import { Injectable } from '@nestjs/common';
import { VagalumeResponse } from './VagalumeResponse';
import { SongRepositoryInterface } from '../domain/repositories/Song.repositoryInterface';
import { Song } from '../domain/entity/Song.entity'

@Injectable()
export class SongRepository implements SongRepositoryInterface {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      timeout: AXIOS_TIMEOUT,
      baseURL: VAGALUME_API_URL
    })
  }

  async getSongLyric(artist: string, title: string): Promise<Song> {
    const { data } = await this.axiosInstance.get<VagalumeResponse>(`search.php?art=${artist}&mus=${title}`);

    return new Song(data.art.name, data.mus[FIRST_POSITION].name, data.mus[FIRST_POSITION].text)
  }
}
