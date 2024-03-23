import { InputRange } from '../../components/input/range';
import { InputNumbre } from '../../components/input/number';
import { CharacterTypes } from '../../components/character/types';
import { CharacterLength } from '../../components/character/length';
import { ChatacterOptions } from '../../components/character/options';

export function ConfigPass() {
  return (
    <div>
      <p>Personalice su contraseña</p>
      <div>
        <InputRange />
        <InputNumbre />
        <CharacterTypes />
        <ChatacterOptions />
        <CharacterLength />
      </div>
    </div>
  );
}
