const URL_MATCH = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/g;

export function isLink(string: string): boolean {
  return !!string.match(URL_MATCH)?.length;
}

export function extractLinks(string: string): string[] {
  return string.match(URL_MATCH)?.map((link) => link.trim()) ?? [];
}
