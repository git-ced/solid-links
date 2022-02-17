// ANCHOR Solid
import { JSX, splitProps } from 'solid-js';

// ANCHOR Utils
import { isLink } from './utils/links';

export interface LinkifyProps extends JSX.HTMLAttributes<HTMLAnchorElement> {
  text: string;
}

export default function Linkify(props: LinkifyProps): JSX.Element {
  const [local, anchorProps] = splitProps(props, ['text']);

  const words = local.text.split(' ');

  return (
    <p style="white-space: pre-wrap">
      {
        words.map((word) => {
          // Check if the word is a URL
          if (isLink(word)) {
            return (
              <a
                {...anchorProps}
                href={word}
              >
                {word}
              </a>
            );
          }

          return word || ' ';
        })
      }
    </p>
  );
}
