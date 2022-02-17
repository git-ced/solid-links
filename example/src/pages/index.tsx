// ANCHOR Solid
import { JSX } from 'solid-js';

// ANCHOR Solid Links
import Linkify from 'solid-links';

export default function ViewPage(): JSX.Element {
  const testString = `
    Will match the following cases

        https://stackoverflow.com/a/17773849/
        http://www.foufos.gr
        https://www.foufos.gr
        http://foufos.gr
        http://www.foufos.gr/kino
        http://werer.gr
        www.foufos.gr
        www.mp3.com
        www.t.co
        http://t.co
        http://www.t.co
        https://www.t.co
        www.aa.com
        http://aa.com
        http://www.aa.com
        https://www.aa.com

    Will NOT match the following

        www.foufos
        www.foufos-.gr
        www.-foufos.gr
        foufos.gr
        http://www.foufos
        http://foufos
        www.mp3#.com
  `;

  return (
    <Linkify
      target="_blank"
      rel="noopener noreferrer"
      text={testString}
      class="underline"
    />
  );
}
