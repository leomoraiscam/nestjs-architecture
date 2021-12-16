interface VagalumeArtist {
  name: string;
}

interface VagalumeMusic {
  name: string;
  text: string;
}

export interface VagalumeResponse {
  art: VagalumeArtist;
  mus: VagalumeMusic
}
