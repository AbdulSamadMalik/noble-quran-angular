import { UrlMatchResult, UrlSegment } from '@angular/router';

export const HomeMatcher = (url: UrlSegment[]): UrlMatchResult => {
  const identifiers = ['surah', 'juz', 'sajda'];
  if (!url.length || (url.length == 1 && identifiers.includes(url[0].path))) {
    return { consumed: url };
  }
  return null;
};
export const SurahMatcher = (url: UrlSegment[]): UrlMatchResult => {
  if (url.length && url[0].path.match(/^([1-9][0-9]?|10[0-9]|11[0-4])$/gm)) {
    return {
      consumed: url,
      posParams: {
        surahId: new UrlSegment(url[0].path, {}),
      },
    };
  }
  return null;
};

export const JuzMatcher = (url: UrlSegment[]): UrlMatchResult => {
  const identifiers = ['juz', 'para', 'sipara'];
  if (
    url.length &&
    identifiers.includes(url[0].path) &&
    url[1].path.match(/(^[1-9]|10|1[1-9]|2[0-9]|30)$/gm)
  ) {
    return {
      consumed: url,
      posParams: {
        juzId: new UrlSegment(url[1].path, {}),
      },
    };
  }
  return null;
};

export const SajdaMatcher = (url: UrlSegment[]): UrlMatchResult => {
  const identifiers = ['sajda', 'sijda', 'prostration'];
  if (
    url.length &&
    identifiers.includes(url[0].path) &&
    url[1].path.match(/(^[1-9]|10|1[1-5])$/gm)
  ) {
    return {
      consumed: url,
      posParams: {
        sajdaId: new UrlSegment(url[1].path, {}),
      },
    };
  }
  return null;
};
