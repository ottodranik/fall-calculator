import React from 'react';
import DamageTypeComponent from './DamageType';

interface DamageProps {
  damage: any;
  damageChanged: Function;
}

const DamageComponent: React.FC<DamageProps> = (props: DamageProps) => (
  <div className="EquipmentDmg">
    <div className="DamageHandTitle">Левая рука</div>
    <div className="EquipmentDmgFlex">
      <DamageTypeComponent
        name="Простой урон"
        hand="left"
        type="def"
        damage={props.damage.left.def}
        damageChanged={props.damageChanged}
      />
      <DamageTypeComponent
        name="Комбо удар 1"
        hand="left"
        type="combo1"
        damage={props.damage.left.combo1}
        damageChanged={props.damageChanged}
      />
      <DamageTypeComponent
        name="Комбо удар 2"
        hand="left"
        type="combo2"
        damage={props.damage.left.combo2}
        damageChanged={props.damageChanged}
      />
    </div>
    <br />
    <div className="DamageHandTitle">Правая рука</div>
    <div className="EquipmentDmgFlex">
      <DamageTypeComponent
        name="Простой урон"
        hand="right"
        type="def"
        damage={props.damage.right.def}
        damageChanged={props.damageChanged}
      />
      <DamageTypeComponent
        name="Комбо удар 1"
        hand="right"
        type="combo1"
        damage={props.damage.right.combo1}
        damageChanged={props.damageChanged}
      />
      <DamageTypeComponent
        name="Комбо удар 2"
        hand="right"
        type="combo2"
        damage={props.damage.right.combo2}
        damageChanged={props.damageChanged}
      />
    </div>
  </div>
);

export default DamageComponent;
