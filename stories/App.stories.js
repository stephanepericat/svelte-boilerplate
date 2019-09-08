import { storiesOf } from "@storybook/svelte";
import { withA11y } from "@storybook/addon-a11y";
// import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import App from "../src/App.svelte";

storiesOf("My App", module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add("Default", () => ({
    Component: App,
    props: {
      name: text("Name", "Storybook")
    }
  }));
