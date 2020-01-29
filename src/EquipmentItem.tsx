import React from 'react';
import EquipmentItemOptionComponent from './EquipmentItemOption';

interface EquipmentItemProps {
  name: string;
  parameters: any;
  positionLeft: string;
  positionTop: string;
  equipmentChanged: Function;
}

interface EquipmentItemOptionState {
  name: string;
  value: string;
  index: number;
}

export default class EquipmentItemComponent extends React.Component<
  EquipmentItemProps
> {
  static defaultProps: Partial<EquipmentItemProps> = {
    name: 'Часть доспехов',
    positionLeft: '0px',
    positionTop: '0px',
  };

  state: { settings: any[] } = {
    settings: [],
  }

  static getDerivedStateFromProps(nextProps: any) {
    return {
      settings: [...nextProps.parameters],
    };
  }

  addOptionHandler = () => {
    const settings = [...this.state.settings, {
      id: Date.now(),
      name: '',
      value: '',
    }];
    this.props.equipmentChanged(settings);
  }

  handleOnChangeOption = (optionState: EquipmentItemOptionState) => {
    const { index, ...rest } = optionState;
    const settings = rest.value !== null
      ? this.state.settings.map((item: any, i: number) => (
        (i === index) ? { ...item, ...rest } : item
      )) // update
      : this.state.settings.filter((item: any, i: number) => i !== index); // remove
    this.props.equipmentChanged(settings);
  }

  render() {
    return (
      <div
        className="EquipmentItem"
        style={{
          left: this.props.positionLeft,
          top: this.props.positionTop,
        }}
      >
        <div className="EquipmentItemPlace">
          <div className="EquipmentItemTitle">{this.props.name}</div>
        </div>
        <div className="EquipmentItemOptionTable">
          {this.state.settings.map((item, index) => (
            <EquipmentItemOptionComponent
              key={item.id}
              optionIndex={index}
              name={item.name}
              value={item.value}
              handleChange={this.handleOnChangeOption}
            />
          ))}
          <button
            type="button"
            className="EquipmentItemOptionRemove"
            onClick={this.addOptionHandler}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}
