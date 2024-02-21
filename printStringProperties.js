function showProperties (obj) {
    for (const key in obj) 
        if(typeof obj[key] ==='string')
            console.log(key , obj[key]);
    
}
const movie = {
    title:'sun',
    year : 1998,
    rate : 9.2,
    director : 'saba'
}

showProperties(movie)