

export interface PhotoExif {
  id:     string;
  secret: string;
  server: string;
  farm:   number;
  camera: string;
  exif:   Exif[];
}

export interface Exif {
  tagspace:   string;
  tagspaceid: number;
  tag:        string;
  label:      string;
  raw:        Raw;
  clean?:     Clean;
}

export interface Clean {
  _content: string;
}

export interface Raw {
  _content: number | string;
}
