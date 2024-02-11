//valores unicos:   la función que recibe por parámetro un array y compruebe si existen elementos duplicados

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  
  function removeDuplicates(array) {
    return [...new Set(array)];
  }
  
  const result = removeDuplicates(duplicates);
  console.log(result);
  