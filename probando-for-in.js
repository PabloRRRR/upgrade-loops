const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for(let key in alien) {
    console.log('Alien ' + key + ' is' + ': ' + alien[key]);
}
