//buscador de nombres

const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  
  function finderName(array, nameToFind) {
    return array.includes(nameToFind);
  }
  
  const nameToFind = 'Tony';
  const result = finderName(nameFinder, nameToFind);
  
  if (result) {
    console.log(`El nombre ${nameToFind} está en la lista.`);
  } else {
    console.log(`El nombre ${nameToFind} no está en la lista.`);
  }
  