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
        if((element.confirm) === 0){
            output += `
            <tr>
                <td>${element.no}</td>
                <td>${element.id_activity}</td>
                <td>${element.title_book}</td>
                <td>${element.user}</td>
                <td>${element.start_date}</td>
                <td>${element.return_date}</td>
                <td class="text-center">
                    <a href="#" data-toggle="modal" data-target="#accept" onclick="accept('${element.no-1}')" class="btn btn-success"><i class="fas fa-check"></i></a>
                    <a href="#" data-toggle="modal" data-target="#decline" onclick="decline('${element.no-1}')" class="btn btn-danger"><i class="fas fa-times"></i></a>
                </td>
            </tr>
            `;
        }
    });
    
    const bodyTable = document.getElementById("bodyTable-waiting");
    bodyTable.innerHTML = output;
}

function accept(no){
    fetch("activity.json")
    .then((response) => response.json())
    .then((json) => {
        swal({
            title: "Are you sure to accept rent?",
            icon: "warning",
            dangerMode: true,
            buttons: true,
        })
        .then((returnBook) => {
            if (returnBook) {
                swal("Accepted!", "Rent " + json[no].id_activity +" has been accepted. ", "success");
            }
        });
    })
    // handling error
    .catch((err) => console.log(err));
}

function decline(no){
    fetch("activity.json")
    .then((response) => response.json())
    .then((json) => {
        swal({
            title: "Are you sure to decline rent?",
            icon: "warning",
            dangerMode: true,
            buttons: true,
        })
        .then((returnBook) => {
            if (returnBook) {
                swal("Declined!", "Rent " + json[no].id_activity +" has been declined. ", "success");
            }
        });
    })
    // handling error
    .catch((err) => console.log(err));
}