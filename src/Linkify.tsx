// ANCHOR Solid
import {
  JSX,
  For,
  Show,
  splitProps,
} from 'solid-js';

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
      <For each={words}>
        {(word): JSX.Element => (
          <Show
            when={isLink(word)}
            fallback={word || ' '}
          >
            <a
              {...anchorProps}
              href={word}
            >
              {word}
            </a>
          </Show>
        )}
      </For>
    </p>
  );
}
