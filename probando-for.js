const placesToTravel = [
    {id: 5, name: 'Japan'},
    {id: 11, name: 'Venecia'},
    {id: 23, name: 'Murcia'}, 
    {id: 40, name: 'Santander'}, 
    {id: 44, name: 'Filipinas'}, 
    {id: 59, name: 'Madagascar'}
]

const idsEliminar = [11, 40]
for(let id of idsEliminar) {
    console.log('Eliminar elemento con id ' + id);
    let posicion;
    for(let i=0; i<placesToTravel.length; i++) {
        const place = placesToTravel[i];
        if(place.id === id) {
            posicion = i;
        }
    }
    placesToTravel.splice(posicion, 1);
}
console.log(placesToTravel);

