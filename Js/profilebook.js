fetch('../book.json')
    .then(response => response.json())
    .then(json =>{
        getProfileBook(json);
    })
    // handling error
    .catch(err => console.log(err))



function getProfileBook(data) {
        console.log(data);
}