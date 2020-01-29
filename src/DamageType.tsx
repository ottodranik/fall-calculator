import React from 'react';
import { SETTINGS } from './constants';

interface DamageTypeProps {
  damage: any;
  name: string;
  hand: string;
  type: string;
  damageChanged: Function;
}

const dmgArr = [
  SETTINGS['Урон от оглушающего оружия'],
  SETTINGS['Урон от режущего оружия'],
  SETTINGS['Урон от колющего оружия'],
  SETTINGS['Урон от тьмы'],
  SETTINGS['Урон от огня'],
  SETTINGS['Урон от молнии'],
  SETTINGS['Урон от магии'],
];

const DamageTypeComponent: React.FC<DamageTypeProps> = (props: DamageTypeProps) => {
  const {
    name,
    hand,
    type,
    damageChanged,
    damage,
  } = props;
  return (
    <div className="DamageType">
      <div className="DamageTypeTitle">{name}</div>
      <span className="DamageTypeName">Min:</span>
      <input value={damage.min} onChange={(e) => damageChanged(hand, type, 'min', e)} />
      <br />
      <span className="DamageTypeName">Max:</span>
      <input value={damage.max} onChange={(e) => damageChanged(hand, type, 'max', e)} />
      <br />
      <span className="DamageTypeName">Тип урона:</span>
      <select
        defaultValue={damage.dmgType}
        onChange={(e) => damageChanged(hand, type, 'dmgType', e)}
      >
        <option key="None">None</option>
        {dmgArr.map((item: string) => (
          <option key={item}>{item}</option>
        ))}
      </select>
      <br />
    </div>
  );
};

export default DamageTypeComponent;
