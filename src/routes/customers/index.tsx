import {
  component$,
  useVisibleTask$,
  useStore,
  useStylesScoped$,
} from "@builder.io/qwik";
import { type DocumentHead, useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  return <div>customers</div>;
});

export const head: DocumentHead = {
  title: "Qwik Flower",
};
