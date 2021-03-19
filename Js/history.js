fetch('activity.json')
    .then(response => response.json())
    .then(json =>{
        getActivity(json);
    })
    // handling error
    .catch(err => console.log(err))
    
    
function getActivity(data) {
    let output = "";
    
    data.forEach((element) => {

        if((element.return) === 1){
            output += `
            <tr>
                <td>${element.no}</td>
                <td>${element.id_activity}</td>
                <td>${element.title_book}</td>
                <td>${element.user}</td>
                <td>${element.start_date}</td>
                <td>${element.return_date}</td>
                <td class="text-center">Rp ${element.fine * 800}</td>
                <td class="text-center">
                    <a href="#" class="badge badge-primary">${element.status}</a>
                </td>
            </tr>
            `;
        }
    
    });
    
    const bodyTable = document.getElementById("bodyTable-history");
    bodyTable.innerHTML = output;
}

function extend(no){
    fetch("activity.json")
    .then((response) => response.json())
    .then((json) => {
        document.getElementById('id_activity').value=json[no].id_activity;
        document.getElementById('title_book').value=json[no].title_book;
        document.getElementById('user').value=json[no].user;
        document.getElementById('start_date').value=json[no].start_date;
        document.getElementById('return_date').value=json[no].return_date;
    })

    // handling error
    .catch((err) => console.log(err));
}

function returnBook(no){
    fetch("activity.json")
    .then((response) => response.json())
    .then((json) => {
        swal({
            title: "Are you sure to return book?",
            icon: "warning",
            dangerMode: true,
            buttons: true,
        })
        .then((returnBook) => {
            if (returnBook) {
                swal("Return!", "Rent " + json[no].id_activity +" has been return. ", "success");
            }
        });
    })
    // handling error
    .catch((err) => console.log(err));
}