export default function getVideoThumbnail(url: string): string {
  if (url == null) {
    return '';
  }
  let video;

  if (url.includes('watch?')) {
    const results = url.match('[\\?&]v=([^&#]*)');
    video = results === null ? url : results[1];
  } else {
    const results = url.split('/');
    video = !results.length ? url : results.pop();
  }

  return `https://img.youtube.com/vi/${video}/0.jpg`;
}
