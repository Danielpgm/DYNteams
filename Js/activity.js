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

        if((element.confirm) === 1){
            output += `
            <tr>
                <td>${element.no}</td>
                <td>${element.id_activity}</td>
                <td>${element.title_book}</td>
                <td>${element.user}</td>
                <td>${element.start_date}</td>
                <td>${element.return_date}</td>
                <td class="text-center">
                    <a href="#" type="button" class="badge badge-danger">Rp ${element.fine*800}</a>
                    <label class="text-xs text-muted">${element.status}</label>
                </td>
                <td class="text-center">
                    <a href="#" data-toggle="modal" data-target="#extendModal" onclick="extend('${element.no-1}')" class="badge badge-success text-uppercase"><i class="fas fa-plus-circle"></i>&nbsp;Extend</a><br />
                    <a href="#" data-toggle="modal" data-target="#return" onclick="returnBook('${element.no-1}')" class="badge badge-danger text-uppercase"><i class="fas fa-undo"></i>&nbsp;Return</a>
                </td>
            </tr>
            `;
        }
    
    });
    
    const bodyTable = document.getElementById("bodyTable-activity");
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