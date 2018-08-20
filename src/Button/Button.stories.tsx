import * as React from "react";

import { Button } from "./Button";
import { text, boolean } from "@storybook/addon-knobs/react";
import { Story } from "../story";
import buttonMetadata from './README';


let data = {
  clickCount: 0,
  disabled: false,
  onClick: () => console.log(`button clicked ${data.clickCount++} times`),
  label: 'Click Me'
};

// export class ButtonStory extends React.Component {
//   constructor(props: {}) {
//     super(props);
//   }

//   render() {

//     return <div>
//       <Button
//         label={text("label", 'Click Me')}
//         disabled={boolean("disabled", false)}
//         onClick={() => data.onClick()}
//       />
//     </div>;
//   }
// }

new Story("Components/Button", 'basic button', buttonMetadata.md, () => <div>
<Button
  label={text("label", 'Click Me')}
  disabled={boolean("disabled", false)}
  onClick={() => data.onClick()}
/>
</div>);

