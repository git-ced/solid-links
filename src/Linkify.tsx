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
import { isLink } from './utils/links';

export interface LinkifyProps extends JSX.AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
}

export default function Linkify(props: LinkifyProps): JSX.Element {
  const [local, anchorProps] = splitProps(props, ['text']);
  const [ref, setRef] = createSignal<HTMLParagraphElement>();

  const words = local.text.split(' ');

  createEffect(() => {
    const paragraphElement = ref();

    if (paragraphElement) {
      paragraphElement.innerHTML = paragraphElement.innerHTML.trimEnd();
    }
  });

  return (
    <p
      style="white-space: pre-wrap"
      ref={setRef}
    >
      <For each={words}>
        {(word): JSX.Element => (word)}
      </For>
    </p>
  );
}
