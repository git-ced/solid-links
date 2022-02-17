// ANCHOR Solid
import {
  JSX,
  For,
  Show,
  splitProps,
  createSignal,
  createEffect,
} from 'solid-js';

// ANCHOR Utils
import {
  isLink,
  extractLinks,
} from './utils/links';

export interface LinkifyProps extends JSX.AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
}

export default function Linkify(props: LinkifyProps): JSX.Element {
  const [local, anchorProps] = splitProps(props, ['text']);
  const [ref, setRef] = createSignal<HTMLSpanElement>();

  const words = local.text.split(' ');

  createEffect(() => {
    const paragraphElement = ref();

    if (paragraphElement) {
      paragraphElement.innerHTML = paragraphElement.innerHTML.trimEnd();
    }
  });

  return (
    <span
      ref={setRef}
      style="white-space: pre-wrap;"
    >
      <For each={words}>
        {(word): JSX.Element => (
          <Show
            when={isLink(word)}
            fallback={`${word} `}
          >
            <a
              {...anchorProps}
              href={extractLinks(word)[0]}
            >
              {word}
            </a>
            {' '}
          </Show>
        )}
      </For>
    </span>
  );
}
