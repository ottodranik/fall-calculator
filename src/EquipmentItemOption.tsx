import React from 'react';
// import Select from 'react-select';
import { SETTINGS } from './constants';

interface EquipmentItemOptionProps {
  handleChange: Function;
  optionIndex: number;
  name: string;
  value: number;
}

export default class EquipmentItemOptionComponent extends React.Component<
  EquipmentItemOptionProps
> {
  setOptionValue = (event: any, value: any = undefined) => {
    this.props.handleChange({
      index: this.props.optionIndex,
      value: value !== undefined ? value : event.target.value,
    });
  }

  setOptionName = (event: any) => {
    this.props.handleChange({
      index: this.props.optionIndex,
      name: event.target.value,
    });
  }

  render() {
    const { name, value } = this.props;
    return (
      <div className="EquipmentItemOption">
        <select
          defaultValue={name}
          onChange={(e) => this.setOptionName(e)}
        >
          <option defaultValue="None">None</option>
          {Object.values(SETTINGS).map((item: string) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        {/* <Select
          className="react-select-container"
          classNamePrefix="react-select"
          value={name as any}
          options={Object.values(SETTINGS)}
          onChange={(e) => this.setOptionName(e)}
        /> */}
        <input
          value={value}
          disabled={!name}
          onChange={(e) => this.setOptionValue(e)}
        />
        <button
          type="button"
          onClick={(e) => this.setOptionValue(e, null)}
        >
          &times;
        </button>
      </div>
    );
  }
}
