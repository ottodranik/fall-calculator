import React from 'react';
import { SETTINGS } from './constants';

interface EquipmentTableProps {
  parameters: Partial<{}>;
  damage: Partial<{}>;
}

const calcTable = (parameters: any) => Object.keys(parameters).reduce(
  (res: any, eqName: any) => {
    parameters[eqName].forEach((item: any) => {
      res[item.name] = +item.value + (res[item.name] || 0);
    });
    return res;
  }, {},
);

export default class EquipmentTable extends React.Component<
  EquipmentTableProps
> {
  state: any = {
    parameters: {},
    damage: {},
  }

  static getDerivedStateFromProps(nextProps: any) {
    return {
      parameters: calcTable(nextProps.parameters),
      damage: nextProps.damage,
    };
  }

  calcDefaultDamage = (value = 0, type: any) => {
    if (!(value >= 0)) return 0;
    let damage: number = +value;
    damage += (damage * ((this.state.parameters['Урон от оружия'] || 0) / 100));
    damage += (damage * ((this.state.parameters[type] || 0) / 100));
    return +damage.toFixed(0);
  }

  calcCriticalDamage = (value = 0, type: any) => {
    if (!(value >= 0)) return 0;
    let damage: number = this.calcDefaultDamage(+value, type);
    damage += (damage * ((this.state.parameters['Критический урон'] || 0) / 100));
    return +damage.toFixed(0);
  }

  calcDamage = (dmg: any) => `${this.calcDefaultDamage(dmg.min, dmg.dmgType)}
    - ${this.calcDefaultDamage(dmg.max, dmg.dmgType)}`;

  calcCritical = (dmg: any) => `${this.calcCriticalDamage(dmg.min, dmg.dmgType)}
    - ${this.calcCriticalDamage(dmg.max, dmg.dmgType)}`;

  render() {
    const { def: defL, combo1: combo1L, combo2: combo2L } = this.state.damage.left;
    const { def: defR, combo1: combo1R, combo2: combo2R } = this.state.damage.right;
    return (
      <div className="EquipmentTable">
        <h2>Сводная таблица</h2>
        <div className="EquipmentTableWeapons">
          <div>
            {Object.keys(SETTINGS).map((item) => (
              <div key={item} className="EquipmentTableRow">
                <div>{item}</div>
                <div>{`${(this.state.parameters[item] || 0)}`}</div>
              </div>
            ))}
          </div>
          <div className="EquipmentDmgTable">
            <span className="DamageHandTitle" style={{ margin: 0 }}>Левая рука</span>
            <br />
            Простой урон: {this.calcDamage(defL)}
            <br />
            Критический простой урон: {this.calcCritical(defL)}
            <br />
            Комбо1 урон: {this.calcDamage(combo1L)}
            <br />
            Критический комбо1 урон: {this.calcCritical(combo1L)}
            <br />
            Комбо2 урон: {this.calcDamage(combo2L)}
            <br />
            Критический комбо2 урон: {this.calcCritical(combo2L)}
            <br />
            <br />
            <span className="DamageHandTitle" style={{ margin: 0 }}>Правая рука</span>
            <br />
            Простой урон: {this.calcDamage(defR)}
            <br />
            Критический простой урон: {this.calcCritical(defR)}
            <br />
            Комбо1 урон: {this.calcDamage(combo1R)}
            <br />
            Критический комбо1 урон: {this.calcCritical(combo1R)}
            <br />
            Комбо2 урон: {this.calcDamage(combo2R)}
            <br />
            Критический комбо2 урон: {this.calcCritical(combo2R)}
            <br />
            <br />
            Шанс оглушения: {this.state.parameters['Вероятность оглушения'] || 0}%
            <br />
            Шанс оглушения при критическом ударе: {(this.state.parameters['Вероятность оглушения'] || 0) + 10}%
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}
