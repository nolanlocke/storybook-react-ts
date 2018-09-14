import * as React from 'react';
import './NumberInput.css';

export interface Props {
  /** this dictates what the input's label will say  */
  label: string;
  /** this dictates what the input will do on value change */
  onChange: (val: number) => void;
  /**
   * Disables input
   *
   * @default false
   **/
  disabled?: boolean;
}
const noop = () => {};

export class NumberInput extends React.Component<Props> {
   disabledClass: string;
    protected _element: HTMLInputElement;

  constructor(props: Props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  render() {
    return (
        <div className="number-input-container">
            <label>{this.props.label} {this.props.disabled ? '(disabled)' : ''}</label>
            <input
                ref={r => (this._element = r as HTMLInputElement)}
                onChange={!this.props.disabled ? this.onChange : noop}
                disabled={this.props.disabled}
                type="number"
            />
        </div>
    );
  }

  getValue() {
    var parsed = Number.parseFloat(this._element.value)
    return isNaN(parsed) ? 0 : parsed;
  }

  onChange(): void {
    this.props.onChange(this.getValue());
  }
}
