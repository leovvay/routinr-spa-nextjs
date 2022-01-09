import youtubeRegExp from './youtubeRegExp';

interface YouTubeValidatorResult {
  isValid: boolean;
  embedUrl: string | null;
}

export default function youtubeValidator(url: string): YouTubeValidatorResult {
  const match = url.match(youtubeRegExp);

  const isValid = Boolean(match && match[2].length === 11);

  return {
    isValid,
    embedUrl: match && isValid ? `//www.youtube.com/embed/${match[2]}` : null,
  };
}
