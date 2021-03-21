window.onload = function () {
    getOnProgressBook();
    getCurrentBook();
    getHistoryBook();
}

function getOnProgressBook() {

    fetch('book.json')
        .then(response => response.json())
        .then(json => {
            // console.log(json);
            var databook = ""; //buat nyimpen list2nya sebelum masuk ke HTMLnya.
            for (var i = 0; i < 2; i++) {
                databook += profileBookOnProgress(json[i]);

            }

            document.getElementById('onprogressbook').innerHTML = databook;
        })
        // handling error
        .catch(err => console.log(err))
}

function profileBookOnProgress(data) {

    var cover = (data.cover).replace("../", "");
    var onprogresbook = ""
        + "<div class='col-sm-3 mb-2'>"
        + " <div class='card'>"
        + " <img class='img-thumbnail coverBook' alt='100%x280' src='" + cover + "'>"
        + "<a class='btn btn-danger' data-bs-toggle='modal' data-bs-target='#modalprofile1'>Information"
        + "</a>"
        + "</div>"
        + "</div>"
        + "";

    return onprogresbook;

}



function getCurrentBook() {

    fetch('book.json')
        .then(response => response.json())
        .then(json => {
            // console.log(json);
            var databook = ""; //buat nyimpen list2nya sebelum masuk ke HTMLnya.
            for (var i = 0; i < 3; i++) {
                databook += profileCurrentBook(json[i]);

            }
            document.getElementById('currentbook').innerHTML = databook;
        })
        // handling error
        .catch(err => console.log(err))
}

function profileCurrentBook(data) {

    var cover = (data.cover).replace("../", "");
    var currentbook = ""
        + "<div class='col-sm-3 mb-2'>"
        + " <div class='card'>"
        + " <img class='img-thumbnail coverBook' alt='100%x280' src='" + cover + "'>"
        + "<a class='btn btn-danger' data-bs-toggle='modal' data-bs-target='#modalprofile1'>Information"
        + "</a>"
        + "</div>"
        + "</div>"
        + "";

    return currentbook;

}

function getHistoryBook() {

    fetch('book.json')
        .then(response => response.json())
        .then(json => {
            // console.log(json);
            var databook = ""; //buat nyimpen list2nya sebelum masuk ke HTMLnya.
            for (var i = 0; i < 4; i++) {
                databook += profileHistoryBook(json[i]);

            }
            document.getElementById('historybook').innerHTML = databook;
        })
        // handling error
        .catch(err => console.log(err))
}

function profileHistoryBook(data) {

    var cover = (data.cover).replace("../", "");
    var historybook = ""
        + "<div class='col-sm-3 mb-2'>"
        + " <div class='card'>"
        + " <img class='img-thumbnail coverBook' alt='100%x280' src='" + cover + "'>"
        + "<a class='btn btn-danger' data-bs-toggle='modal' data-bs-target='#modalprofile1'>Information"
        + "</a>"
        + "</div>"
        + "</div>"
        + "";

    return historybook;

}