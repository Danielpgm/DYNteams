fetch('book.json')
    .then(response => response.json())
    .then(json =>{
        getBook(json);
    })
    // handling error
    .catch(err => console.log(err))
    
    
function getBook(data) {
    let popular = "";
    
    data.forEach((element) => {

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

    const carouselPopular = document.getElementById('owlCarousel');
    carouselPopular.innerHTML = popular;

    const carouselComputer = document.getElementById('owlCarouselComputer');
    carouselComputer.innerHTML = popular;

    const carouselPersonal = document.getElementById('owlCarouselPersonal');
    carouselPersonal.innerHTML = popular;

    const carouselComic = document.getElementById('owlCarouselComic');
    carouselComic.innerHTML = popular;

    const carouselRomance = document.getElementById('owlCarouselRomance');
    carouselRomance.innerHTML = popular;

    const carouselHistory = document.getElementById('owlCarouselHistory');
    carouselHistory.innerHTML = popular;

    const carouselTravel = document.getElementById('owlCarouselTravel');
    carouselTravel.innerHTML = popular;

    const carouselEducation = document.getElementById('owlCarouselEducation');
    carouselEducation.innerHTML = popular;

    const carouselEntertainment = document.getElementById('owlCarouselEntertainment');
    carouselEntertainment.innerHTML = popular;

    const carouselBusiness = document.getElementById('owlCarouselBusiness');
    carouselBusiness.innerHTML = popular;

    const carouselBiographies = document.getElementById('owlCarouselBiographies');
    carouselBiographies.innerHTML = popular;

    const carouselEtc = document.getElementById('owlCarouselEtc');
    carouselEtc.innerHTML = popular;

    var owl = $('.owl-carousel');
        owl.owlCarousel({
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




