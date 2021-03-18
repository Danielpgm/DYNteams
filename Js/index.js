fetch('../book.json')
    .then(response => response.json())
    .then(json =>{
        getBook(json);
    })
    // handling error
    .catch(err => console.log(err))
    
    
function getBook(data) {
    let output = "";
    
    data.forEach((element) => {
        if((element.no) < 7){
            output += `
                <div class="col-sm-2 mb-3">
                    <div class="card">
                        <img class="img-thumbnail coverBook" alt="100%x280" src="assets/book/${element.id_book}.jpg">
                        <div class="card-body">
                            <h6 class="card-title fw-bold text-center"><b>${element.title}</b></h6>
                            <p class="author text-center">${element.author} <br>(${element.year})</p>
                        </div>
                    </div>
                </div>
            `;
        }
    
    });
    
    const bodyTable = document.getElementById("recommended");
    bodyTable.innerHTML = output;
}