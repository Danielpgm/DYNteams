
function fetchData(){
    fetch('book.json')
    .then(response => response.json())
    .then(json =>{
        getBook(json);
        console.log(json);
    })
    // handling error
    .catch(err => console.log(err))
}

function getBook(data) {
    let output = "";
    let popular = "";
    
    data.forEach((element) => {
        if((element.no) < 7){
            output += `
                <div class="col-sm-2 mb-3">
                    <a data-bs-toggle="modal" data-bs-target="#viewDetail" onclick="detailBook('${element.no-1}')">
                        <div class="card">
                            <img class="img-thumbnail coverBook" alt="100%x280" src="assets/book/${element.id_book}.jpg">
                            <div class="card-body">
                                <h6 class="card-title fw-bold text-center"><b>${element.title}</b></h6>
                                <p class="author text-center">${element.author} <br>(${element.year})</p>
                            </div>
                        </div>
                    </a>
                </div>
            `;
        }

        popular += `
                <div class="item card">
                    <a data-bs-toggle="modal" data-bs-target="#viewDetail" onclick="detailBook('${element.no-1}')">
                        <img class="img-thumbnail coverBook" alt="100%x280" src="assets/book/${element.id_book}.jpg">
                        <div class="card-body">
                            <h6 class="card-title fw-bold text-center"><b>${element.title}</b></h6>
                            <p class="author text-center">${element.author} <br>(${element.year})</p>
                        </div>
                    </a>
                </div>
        `;
    
    });

    const bodyTable = document.getElementById('recommended');
    bodyTable.innerHTML = output;

    const carouselPopular = document.getElementById('owlCarousel');
    carouselPopular.innerHTML = popular;
    console.log(carouselPopular);

    console.log(carouselPopular);

    var p = $('.owl-carousel');
        p.owlCarousel({
            margin: 10,
            loop: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 6
                }
            }
    })
    
}

function detailBook(id) {
    fetch("book.json")
    .then((response) => response.json())
    .then((json) => {
        document.getElementById('title_book').innerHTML = json[id].title;
        document.getElementById('pic').src = "../assets/book/" + json[id].id_book + ".jpg";
        document.getElementById('stock').innerHTML = json[id].stock;
        document.getElementById('id_book').innerHTML = json[id].id_book;
        document.getElementById('author').innerHTML = json[id].author;
        document.getElementById('publisher').innerHTML = json[id].publisher;
        document.getElementById('year').innerHTML = '(' + json[id].year + ')';
        document.getElementById('synopsis').innerHTML = json[id].synopsis;
    })
    // handling error
    .catch((err) => console.log(err));
}

fetchData();


