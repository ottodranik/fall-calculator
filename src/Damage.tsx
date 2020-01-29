import React from 'react';
import DamageTypeComponent from './DamageType';

interface DamageState {
  damage: any;
}

interface DamageProps {
  damage: any;
  damageChanged: Function,
}

export default class DamageComponent extends React.Component<
  DamageProps
> {
  render() {
    return (
      <div className="EquipmentDmg">
        <div className="DamageHandTitle">Левая рука</div>
        <div className="EquipmentDmgFlex">
          <DamageTypeComponent
            name="Простой урон"
            hand="left"
            type="def"
            damage={this.props.damage.left.def}
            damageChanged={this.props.damageChanged}
          />
          <DamageTypeComponent
            name="Комбо удар 1"
            hand="left"
            type="combo1"
            damage={this.props.damage.left.combo1}
            damageChanged={this.props.damageChanged}
          />
          <DamageTypeComponent
            name="Комбо удар 2"
            hand="left"
            type="combo2"
            damage={this.props.damage.left.combo2}
            damageChanged={this.props.damageChanged}
          />
        </div>
        <br />
        <div className="DamageHandTitle">Правая рука</div>
        <div className="EquipmentDmgFlex">
          <DamageTypeComponent
            name="Простой урон"
            hand="right"
            type="def"
            damage={this.props.damage.right.def}
            damageChanged={this.props.damageChanged}
          />
          <DamageTypeComponent
            name="Комбо удар 1"
            hand="right"
            type="combo1"
            damage={this.props.damage.right.combo1}
            damageChanged={this.props.damageChanged}
          />
          <DamageTypeComponent
            name="Комбо удар 2"
            hand="right"
            type="combo2"
            damage={this.props.damage.right.combo2}
            damageChanged={this.props.damageChanged}
          />
        </div>
      </div>
    );
  }
}
