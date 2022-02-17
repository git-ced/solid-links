import {
  isLink,
  extractLinks,
} from '../src/utils/links';

describe('isLink util function', () => {
  it('should return true', () => {
    const result = isLink('http://www.foufos.gr');
    expect(result).toBeTruthy();
  });
  it('should return true', () => {
    const result = isLink('https://www.foufos.gr');
    expect(result).toBeTruthy();
  });
  it('should return true', () => {
    const result = isLink('http://foufos.gr');
    expect(result).toBeTruthy();
  });
  it('should return true', () => {
    const result = isLink('http://www.foufos.gr/kino');
    expect(result).toBeTruthy();
  });
  it('should return true', () => {
    const result = isLink('http://werer.gr');
    expect(result).toBeTruthy();
  });
  it('should return true', () => {
    const result = isLink('www.foufos.gr');
    expect(result).toBeTruthy();
  });
  it('should return true', () => {
    const result = isLink('www.mp3.com');
    expect(result).toBeTruthy();
  });
  it('should return true', () => {
    const result = isLink('www.t.co');
    expect(result).toBeTruthy();
  });
  it('should return true', () => {
    const result = isLink('http://t.co');
    expect(result).toBeTruthy();
  });
  it('should return true', () => {
    const result = isLink('http://www.t.co');
    expect(result).toBeTruthy();
  });
  it('should return true', () => {
    const result = isLink('https://www.t.co');
    expect(result).toBeTruthy();
  });
  it('should return true', () => {
    const result = isLink('www.aa.com');
    expect(result).toBeTruthy();
  });
  it('should return true', () => {
    const result = isLink('http://aa.com');
    expect(result).toBeTruthy();
  });
  it('should return true', () => {
    const result = isLink('http://www.aa.com');
    expect(result).toBeTruthy();
  });
  it('should return true', () => {
    const result = isLink('https://www.aa.com');
    expect(result).toBeTruthy();
  });

  it('should return false', () => {
    const result = isLink('www.foufos');
    expect(result).toBeFalsy();
  });
  it('should return false', () => {
    const result = isLink('www.foufos-.gr');
    expect(result).toBeFalsy();
  });
  it('should return false', () => {
    const result = isLink('www.-foufos.gr');
    expect(result).toBeFalsy();
  });
  it('should return false', () => {
    const result = isLink('foufos.gr');
    expect(result).toBeFalsy();
  });
  it('should return false', () => {
    const result = isLink('http://www.foufos');
    expect(result).toBeFalsy();
  });
  it('should return false', () => {
    const result = isLink('http://foufos');
    expect(result).toBeFalsy();
  });
  it('should return false', () => {
    const result = isLink('www.mp3#.com');
    expect(result).toBeFalsy();
  });
});

describe('extractLinks util function', () => {
  it('should return an array of links', () => {
    const result = extractLinks('hello, this is a link https://www.aa.com in a string');

    expect(result?.[0]).toEqual('https://www.aa.com');
  });
  it('should return null if no links are found', () => {
    const result = extractLinks('hello, there is no link in this string');

    expect(result.length).toBe(0);
  });
});
