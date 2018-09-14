import * as React from "react";

import { text, boolean } from "@storybook/addon-knobs/react";
import { Story } from "../story";
import { NumberInput } from "./NumberInput";

let data = {
  disabled: false,
  value: null,
  onChange: (val: number) => { console.log(`current input value is:`, val); },
  label: 'Some Label'
};

new Story("Components/Inputs", 'number Input', 'test', () =>
    <div className="number-input-demo">
        <NumberInput
            label={text("label", data.label)}
            disabled={boolean("disabled", false)}
            onChange={(a) => data.onChange(a)}
        />
    </div>);

