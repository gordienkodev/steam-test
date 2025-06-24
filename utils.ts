export function fixUrl(url: string): string {
  if (url.startsWith('//')) {
    return 'https:' + url;
  }
  return url;
}
