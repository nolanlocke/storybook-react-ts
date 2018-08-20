import { storiesOf } from "@storybook/react";
import { wInfo } from "./utils";

export class Story {

    constructor(
        path: string,
        name: string,
        markdown: string,
        jsx: () => JSX.Element
    ) {
        const story = storiesOf(path, module);

        //@ts-ignore addWithJSX is untyped in @types/react
        story.addWithJSX(name,wInfo(markdown)(jsx));
    }
}