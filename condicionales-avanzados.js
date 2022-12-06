const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
];


alumns.push([{isApproved: true}]);
console.log(alumns);
/*console.log('Han aprobado: ')
for(let aprobados of alumns) {
    if(aprobados.T1 && aprobados.T2 && aprobados.T3 == true) {
        console.log('- '+aprobados.name);
    } else if(aprobados.T1 && aprobados.T3 == true) {
        console.log('- '+aprobados.name);
    } else if(aprobados.T2 && aprobados.T3 == true) {
        console.log('- '+aprobados.name);
    } else if(aprobados.T1 && aprobados.T2 == true) {
        console.log('- '+aprobados.name);
    } 
}*/
