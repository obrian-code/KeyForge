export const labels = [
  {
    name: 'easyToSayOption',
    title: 'Fácil de decir',
    tooltip: 'Evite números y caracteres especiales'
  },
  {
    name: 'easyToReadOption',
    title: 'Fácil de leer',
    tooltip: 'Evite caracteres ambiguos como l, 1, O y 0 '
  },
  {
    name: 'allCharactersOption',
    title: 'Todos los caracteres',
    tooltip: 'Cualquier combinación de caracteres como !, 7, h, K y l1'
  }
];

export const options = {
  easyToSayOption: 'lowercase,uppercase',
  easyToReadOption: 'lowercase,uppercase,numbers',
  allCharactersOption: 'lowercase,uppercase,numbers,specials'
};
