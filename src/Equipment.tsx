import React from 'react';
import EquipmentItemComponent from './EquipmentItem';
import EquipmentTable from './EquipmentTable';
import { BONUSES, EQUIPMENT_PARTS } from './constants';
import DamageComponent from './Damage';

interface EquipmentState {
  settings: any;
  damage: any;
  isLoadMode: boolean;
}

export default class EquipmentComponent extends React.Component<
  {}
> {
  input: any;

  state: EquipmentState = {
    settings: {},
    damage: {
      left: {
        def: {},
        combo1: {},
        combo2: {},
      },
      right: {
        def: {},
        combo1: {},
        combo2: {},
      },
    },
    isLoadMode: false,
  }

  handleEquipmentChanged = (name: string, data: any[]) => {
    this.setState((state: Readonly<EquipmentState>) => ({
      settings: {
        ...state.settings,
        [name]: data,
      },
    }));
  }

  handleDamageChanged = (hand: string, type: string, key: string, event: any) => {
    const val = event.target.value;
    this.setState((state: Readonly<EquipmentState>) => ({
      damage: {
        ...state.damage,
        [hand]: {
          ...state.damage[hand],
          [type]: {
            ...state.damage[hand][type],
            [key]: val,
          },
        },
      },
    }));
  }

  savePreset = () => {
    console.log(JSON.stringify(this.state));
  }

  loadPreset = () => {
    try {
      this.setState({ ...JSON.parse(this.input.value) });
    } catch (e) {
      console.log(e);
    }
  }

  toggleMode = () => {
    this.setState((state: Readonly<EquipmentState>) => ({ isLoadMode: !state.isLoadMode }));
  }

  render() {
    return (
      <div>
        <div className="EquipmentHeader">
          <button type="button" onClick={this.toggleMode}>Toggle mode</button>
          {
            (!this.state.isLoadMode)
              ? (<button type="button" onClick={this.savePreset}>Save preset</button>)
              : (<button type="button" onClick={this.loadPreset}>Load preset</button>)
          }
        </div>
        {
        (!this.state.isLoadMode)
          ? (
            <div className="Equipment">
              <div className="EquipmentCnt">
                <h2 style={{ marginLeft: '10px' }}>Weapons</h2>
                <DamageComponent
                  damage={this.state.damage}
                  damageChanged={this.handleDamageChanged}
                />
                <div className="EquipmentAndBloodlines">
                  <div>
                    <h2>Equipment bonuses</h2>
                    {EQUIPMENT_PARTS.map((equipment) => (
                      <EquipmentItemComponent
                        key={equipment}
                        name={equipment}
                        parameters={this.state.settings[equipment] || []}
                        equipmentChanged={
                          (data: any) => this.handleEquipmentChanged(equipment, data)
                        }
                      />
                    ))}
                  </div>
                  <div>
                    <h2>Bloodlines bonuses</h2>
                    {BONUSES.map((item) => (
                      <EquipmentItemComponent
                        key={item}
                        name={item}
                        parameters={this.state.settings[item] || []}
                        equipmentChanged={
                          (data: any) => this.handleEquipmentChanged(item, data)
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>
              <EquipmentTable
                parameters={this.state.settings}
                damage={this.state.damage}
              />
            </div>
          ) : (
            <div>
              <textarea
                ref={(c) => { this.input = c; }}
              />
            </div>
          )
        }
      </div>
    );
  }
}
