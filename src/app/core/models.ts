export interface Surah {
  englishName: string;
  arabicName: string;
  ayahs: number;
  english: string;
  place: string;
  index: number;
  range: string;
}

export interface Juz {
  title: string;
  subTitle: string;
  ayahCount: number;
  index: number;
  range: string;
}
export interface Sajda {
  surahNo: number;
  ayahNo: number;
  juzNo: number;
  isObligatory: boolean;
  index: number;
}

export interface AyahRange {
  start: number;
  end: number;
}

export interface Theme {
  id: string;
  className: string;
  primary_theme_color: string;
  appbar_background_color: string;
}