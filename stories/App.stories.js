import { storiesOf } from "@storybook/svelte";
import App from "../src/App.svelte";

storiesOf("My App", module).add("Default", () => ({
  Component: App,
  props: {
    name: "Storybook"
  }
}));
