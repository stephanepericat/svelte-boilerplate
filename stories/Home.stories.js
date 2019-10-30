import { storiesOf } from "@storybook/svelte";
import { withA11y } from "@storybook/addon-a11y";
// import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import "../src/styles/App.scss";
import Home from "../src/routes/Home.svelte";

storiesOf("Home", module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add("Default", () => ({
    Component: Home
  }));
