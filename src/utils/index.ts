const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const specials = '!@#$%^&*()_+-=[]{}|;:,.<>?';

type option = 'lowercase' | 'uppercase' | 'numbers' | 'specials';

const length = 12;

export const charAt = (option: option) => {
  let result = '';
  switch (option) {
    case 'lowercase':
      result = lowercase;
      break;
    case 'uppercase':
      result = uppercase;
      break;
    case 'numbers':
      result = numbers;
      break;
    case 'specials':
      result = specials;
      break;
    default:
      result = lowercase;
      break;
  }
  return result;
};

export const generate = () => {
  let result = '';
  const opcions: option[] = ['lowercase', 'uppercase', 'numbers', 'specials'];
  for (let index = 0; index < length; index++) {
    const opcion: option = opcions[Math.floor(Math.random() * opcions.length)];
    const charactersOption = charAt(opcion);
    const value = Math.floor(Math.random() * charactersOption.length);
    result += charactersOption[value];
  }
  return result;
};
