import * as React from 'react';
import './Button.css';
export interface Props {
  /** this dictates what the button will say  */
  label: string;
  /** this dictates what the button will do  */
  onClick: () => void;
  /**
   * Disables onclick
   *
   * @default false
   **/
  disabled?: boolean;
}
const noop = () => {};

export class Button extends React.Component<Props> {
  disabledClass: string;

  constructor(props: Props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  render() {

    this.disabledClass = this.props.disabled ? 'Button_disabled' : '';

    return (
      <div
        className={`Button ${this.disabledClass}`}
        onClick={!this.props.disabled ? this.onClick : noop}
      >
        <span>{this.props.label}</span>
      </div>
    );
  }

  onClick() {
    this.props.onClick();
  }
}
